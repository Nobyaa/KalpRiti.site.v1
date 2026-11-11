import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Log the incoming lead on the server console so it is never lost even if external webhook fails
    console.log("[KALPRITI NEW INQUIRY RECEIVED]:", {
      timestamp: new Date().toISOString(),
      ...body,
    });

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (googleScriptUrl) {
      try {
        const response = await fetch(googleScriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...body,
            submittedAt: new Date().toISOString(),
          }),
          redirect: "follow",
        });

        if (!response.ok) {
          console.error(
            "[GOOGLE_SCRIPT_FORWARD_ERROR]: Status",
            response.status,
            await response.text().catch(() => "")
          );
          return NextResponse.json(
            { error: "Error forwarding to inquiry system" },
            { status: 502 }
          );
        }
      } catch (webhookErr: any) {
        console.error("[GOOGLE_SCRIPT_NETWORK_ERROR]:", webhookErr.message);
        return NextResponse.json(
          { error: "Failed to connect to inquiry service. Please try again or email hello@kalpriti.com directly." },
          { status: 502 }
        );
      }
    } else {
      console.warn("[WARNING]: GOOGLE_SCRIPT_URL is not configured in environment variables.");
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("[CONTACT_API_ERROR]:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}

