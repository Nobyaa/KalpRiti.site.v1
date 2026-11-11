export const siteContent = {
  brand: {
    name: "KalpRiti",
    tagline: "We change the way complex products are marketed",
    descriptor: "founder-led creative studio",
    coreIdea: "KalpRiti designs the story, the interaction, and the next step as one connected campaign experience.",
  },
  socials: {
    instagram: "https://www.instagram.com/kalpriti_/",
    linkedin: "https://www.linkedin.com/company/kalpriti",
    email: "hello@kalpriti.com",
    founderLinkedIn: "https://www.linkedin.com/in/vaibhav-kalpriti/",
  },
  navigation: {
    links: [
      { label: "What We Do", href: "/what-we-do" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    cta: {
      label: "Discuss a Campaign",
      href: "/contact",
    },
  },
  home: {
    hero: {
      badge: "Founder-Led Creative Studio",
      headline: "We change the way complex products are marketed.",
      subhead:
        "For founders of smart home, consumer electronics, and premium tech. We build Interadaptive Campaigns—cinematic advertising that continues into an interactive experience, adapting to what each buyer cares about most.",
      sectors: [
        "Smart Home & Automation",
        "Consumer Electronics",
        "Premium Hardware",
        "Complex Consumer Tech",
      ],
      buttons: {
        primary: { label: "Discuss a Campaign", href: "/contact" },
        secondary: { label: "Try the Interadaptive Demo ↓", href: "#demo" },
      },
    },
    theGap: {
      heading: "The gap shows up in ordinary places.",
      items: [
        "People click your ad, then leave without knowing what the product does.",
        "Your sales team starts every call with the basics.",
        "A premium product gets compared on price, because its value isn't visible.",
        "One message tries to speak to buyers who each care about something different.",
      ],
      closing:
        "Sometimes the product isn't the problem. The gap between its value and what customers understand is.",
    },
    whyItHappens: {
      heading: "Most campaigns say the same thing to everyone.",
      lead: "A film builds interest. An ad lists features. A landing page sends everyone to the same overview. Then the customer is left to work out what it means for their own life.",
      closing: "That's three pieces that never quite became one.",
    },
    approach: {
      heading: "One campaign experience, not three separate pieces.",
      points: [
        {
          title: "The story",
          desc: "decides what a customer should understand first.",
        },
        {
          title: "The interaction",
          desc: "lets them explore what matters to them.",
        },
        {
          title: "The next step",
          desc: "is offered based on what they showed they care about.",
        },
      ],
      closing:
        "The interactive part isn't added after the creative is finished. The story decides what a person explores. What they explore decides what they learn, and what they're offered next.",
    },
    demo: {
      badge: "Live Methodology Demo",
      heading: "See an Interadaptive Campaign in action.",
      lead: "Conventional landing pages show the exact same 20 features to everyone. An Interadaptive Campaign adapts its story, demonstrations, and next step to what the visitor explicitly chooses.",
      scenario: "Product Scenario: Luxury Smart Living & Automation Hardware",
      choices: [
        {
          id: 1,
          label: "Home Security & Family Safety",
          persona: "Working Parent · Frequent Traveler",
          hook: "What happens to your home when you're 5,000 miles away?",
          narrative:
            "Instead of browsing light dimming presets, this buyer receives immediate answers to their vulnerability: simulated presence lighting, instant perimeter alert logs, and backup failover during power outages.",
          adaptiveProtocols: [
            "Child Arrival Push Alert Logs",
            "24/7 Offline Security Mesh Network",
            "Geofenced Nighttime Perimeter Locking",
          ],
          actionLabel: "Request Home Security Consultation →",
          actionHref: "/contact?intent=security-focus",
        },
        {
          id: 2,
          label: "Architectural Design & Clean Walls",
          persona: "Interior Architect · Luxury Homeowner",
          hook: "High technology shouldn't ruin handcrafted Italian marble walls.",
          narrative:
            "This buyer doesn't care about software protocols. The campaign adapts to highlight flush-mounted solid brass keypads, concealed conduits, and custom architectural color matching.",
          adaptiveProtocols: [
            "Flush Precision Milling Specifications",
            "Custom RAL & Metallic Finish Swatches",
            "Zero Wall-Acne Concealed Actuators",
          ],
          actionLabel: "Request Architect Swatch Kit →",
          actionHref: "/contact?intent=architectural-design",
        },
        {
          id: 3,
          label: "Whole-Home Automation & Energy",
          persona: "Tech Enthusiast · Sustainability Lead",
          hook: "Intelligence that cuts energy consumption without manual tweaking.",
          narrative:
            "The experience shifts to dynamic solar-sync harvesting, automated thermal curtain scheduling, and real-time kW consumption graphs across individual living zones.",
          adaptiveProtocols: [
            "Dynamic Daylight Harvesting Sensors",
            "Smart HVAC Thermal Load Balancing",
            "Sub-circuit Real-time Power Telemetry",
          ],
          actionLabel: "Explore Energy Configurator →",
          actionHref: "/contact?intent=automation-energy",
        },
        {
          id: 4,
          label: "Effortless Daily Living & Convenience",
          persona: "Multi-Generational Family Homeowner",
          hook: "A home that understands elderly parents and children alike.",
          narrative:
            "No apps or complicated sub-menus. The campaign demonstrates single-tap magnetic scenes, voice failover, and intuitive tactile dials that anyone can use naturally from day one.",
          adaptiveProtocols: [
            "Tactile Magnetic Scene Dials",
            "Zero-Learning-Curve Physical Feedback",
            "Gentle Nighttime Pathway Illumination",
          ],
          actionLabel: "Discuss Family Home Setup →",
          actionHref: "/contact?intent=daily-convenience",
        },
      ],
      explainer: {
        title: "What just happened:",
        text: "A standard interactive page lets people click around static elements. An interadaptive campaign reorganizes what the customer sees, learns, and does next based on the choices they make. One campaign. Zero guesswork. Significantly higher conversion.",
      },
      disclaimer: "Built with transparent, choice-based adaptation. No hidden cookies or behavioral tracking.",
    },
    workPreview: {
      heading: "One concept, labelled honestly.",
      text: "We built a smart-home campaign experience for Keus, without a client brief, to show how we'd approach a product that's hard to explain. It's a proof of concept, not client work, and we won't present it as anything else.",
      link: { label: "See the concept & breakdown →", href: "/work" },
      tag: "POC · A self-initiated concept, not client work.",
    },
    whatWeMake: {
      heading: "How we work together.",
      offers: [
        {
          title: "Strategy & Narrative Blueprint",
          desc: "The thinking, positioning, and adaptive blueprint before anything is built.",
        },
        {
          title: "The Interadaptive Campaign Experience",
          desc: "Our flagship engagement: narrative film, custom 3D/adaptive digital build, and conversion paths.",
          flagship: true,
        },
        {
          title: "Campaign Growth Partner",
          desc: "Continuous iterative optimization and path refinement after campaign launch.",
        },
      ],
      link: { label: "Explore scope and deliverables →", href: "/what-we-do" },
    },
    whereWeAre: {
      heading: "We're early. We'd rather show you than list clients.",
      body: "KalpRiti is a young, founder-led creative studio. We're developing this approach through working concepts and experiments, starting with interadaptive campaign experiences. You won't find a wall of logos or performance claims here. What we can show is how we think and what we build.",
    },
    closingCta: {
      heading: "Have a product that deserves a better explanation?",
      button: { label: "Discuss a Campaign", href: "/contact" },
    },
  },
  whatWeDo: {
    header: {
      heading: "How we work with founders.",
      subhead:
        "Start with the strategic narrative blueprint, or build the complete flagship interadaptive experience. We scope investment individually on a call once we understand your product.",
    },
    offers: [
      {
        id: "experience",
        num: "01",
        title: "The Interadaptive Campaign Experience",
        flagship: true,
        tag: "FLAGSHIP ENGAGEMENT",
        subtitle:
          "For founders with a launch, campaign or revenue goal who want a complete, high-converting campaign system built—not just planned.",
        included: [
          "Core narrative strategy & campaign positioning",
          "Cinematic campaign film concept and creative direction",
          "One custom Interadaptive web experience (responsive, mobile-first WebGL/3D)",
          "Choice-based multi-path architecture (tailored to your key buyer personas)",
          "Conversion paths and next steps matched to what each visitor explores",
          "Full event analytics setup & conversion tracking plan",
          "Testing, launch deployment, and performance handover (4–6 week timeline)",
        ],
        notIncluded: [
          "Paid media buying spend, excessive production crews, backend ERP/CRM rebuilds, unlimited revisions beyond agreed scope.",
        ],
        noteOnExisting:
          "An existing product film, 3D asset, or landing page can be integrated as the entry point if it already works. We only rebuild what is fundamentally unclear.",
      },
      {
        id: "sprint",
        num: "02",
        title: "Strategy & Narrative Blueprint",
        tag: "STRATEGY SPRINT",
        subtitle:
          "For leadership teams who know there's a communication gap and want a clear narrative and experience blueprint before entering production.",
        included: [
          "Alignment on business objective, buyer personas, and drop-off points",
          "A comprehensive audit of how the product is communicated today",
          "Core messaging direction and category differentiation",
          "The campaign narrative script and creative concept",
          "Information architecture and wireframe blueprint for the adaptive experience",
        ],
        notIncluded: [
          "Production code, 3D development, ad filming, or media management (scoped separately if you proceed to build).",
        ],
      },
      {
        id: "growth",
        num: "03",
        title: "Campaign Growth Partner",
        tag: "POST-LAUNCH PARTNERSHIP",
        subtitle:
          "For teams who have launched their campaign experience and want continuous quarterly iteration and path optimization based on live visitor data.",
        included: [
          "Ongoing campaign path refinement and A/B branch testing",
          "Creative narrative iterations for seasonal launches or new features",
          "Quarterly review of engagement depth and drop-off analytics",
          "Direct founder advisory on customer communication",
        ],
        notIncluded: [
          "Media buying, unlimited creative volume, extensive production, guaranteed performance.",
        ],
      },
    ],
    whatWeDontPromise: {
      heading: "What we don't promise",
      text: "We don't promise fabricated results. We cannot honestly tell you what a campaign will generate before it has been tested with real buyers. What we do promise is radical clarity: we agree on what to measure up front, and we will be completely straight with you about what the data shows.",
    },
    qualification: {
      whoThisIsFor: [
        "You sell a valuable product that's hard to explain: premium smart home hardware, consumer electronics, or high-consideration tech.",
        "Customers need time to understand, compare or involve family/team members before they buy.",
        "You have a real launch, campaign or revenue milestone.",
        "A founder, executive, or key decision-maker is directly involved.",
        "You're ready to invest in a differentiated campaign and share what you know about your product.",
      ],
      whoItIsNotFor: [
        "You need routine social media posts, low-cost banner graphics, or generic SEO blogs.",
        "You see creativity as decoration, or want 3D interactivity added without a clear communication reason.",
        "You need guaranteed instant conversions or fabricated revenue claims.",
        "You expect high-end strategy, creative, and custom software in 48 hours on a minimal budget.",
        "Your product is a quick impulse purchase where buyers decide in 3 seconds.",
      ],
    },
    process: {
      heading: "How a project moves",
      steps: [
        {
          num: "1",
          name: "Diagnose",
          desc: "We study the product, dissect where customer understanding breaks down, and define the core narrative hook.",
        },
        {
          num: "2",
          name: "Shape the Architecture",
          desc: "We map the visitor choices and write the adaptive narrative branches for each buyer persona.",
        },
        {
          num: "3",
          name: "Build the Experience",
          desc: "The film concept, 3D interaction, and conversion paths are engineered together as one unified engine.",
        },
        {
          num: "4",
          name: "Launch & Measure",
          desc: "We deploy the campaign, track which choices visitors explore, and refine the path to conversion.",
        },
      ],
    },
  },
  work: {
    header: {
      heading: "Work and experiments.",
      subhead:
        "We're early. Rather than a list of logos, here is a working concept we built to demonstrate how we think.",
    },
    concept: {
      title: "Keus Smart Home",
      tag: "POC · A self-initiated concept, not client work.",
      challengeHeading: "The challenge we explored",
      challenge:
        "Smart-home ads tend to look alike: sleek renders, a list of features, and an affluent lifestyle. But when we looked at what people actually worry about before buying luxury home automation, features weren’t the real concern. They wanted to know: Will it break after installation? What happens after the sale? And what will this cost for my home? We turned that insight into an emotional story, 'Test Your Absence,' built on the bond between a child and an elderly parent. Then we carried that story directly into an interadaptive digital experience.",
      thinkingHeading: "The thinking",
      thinking:
        "The biggest hurdle wasn't feature specs, or even initial price—it was trust in post-installation reliability. So the experience doesn't open with an intimidating spec sheet. It opens with an emotional story, invites the visitor to explore what matters to their lifestyle, and answers their unspoken hesitations before they have to ask.",
      whatItShowsHeading: "What it shows",
      whatItShows: [
        "How a cinematic campaign story decides what a visitor explores",
        "How different visitor choices lead to tailored, relevant next steps",
        "A working demonstration of our interadaptive methodology in code and 3D",
      ],
      whatItDoesNotShowHeading: "What it doesn't show",
      whatItDoesNotShow:
        "Sales, conversion or lead-quality results. It was built as a self-initiated concept to prove the approach.",
    },
    footerNote: "More experiments and proof of concepts will be added here as they are deployed.",
  },
  about: {
    header: {
      heading: "Founder-led, on purpose.",
    },
    story: {
      paragraphs: [
        "I'm Vaibhav Kumbhar, the founder of KalpRiti. I began as a designer and creative director, moving through brand strategy, production, and technology into leading creative campaigns.",
        "Across that work I kept witnessing the exact same breakdown: innovative, high-value products explained badly. Not because the teams were careless, but because conventional advertising treats films, ads, and landing pages as disjointed silos. The customer is left to connect the dots.",
        "KalpRiti is my answer to that problem. We design the advertising narrative and the interactive digital environment together—so complex products become immediately understandable, desirable, and trusted.",
        "I have spent years building creative systems and marketing campaigns for growing companies. That hands-on experience revealed the exact bottleneck: good products explained badly because advertising films and landing pages rarely speak the same language.",
      ],
    },
    beliefs: {
      heading: "What we believe",
      text: "Creativity should do more than capture fleeting attention. It should help people think, feel, understand and act. Brands should mean more, and experiences should do more.",
    },
    whereWeAre: {
      heading: "Where we are",
      paragraphs: [
        "We're a young, founder-led creative studio. We develop our approach through working concepts and experiments, starting with interadaptive campaign experiences. We're early, so we won't pretend to have a wall of client logos or unverified metrics.",
        "KalpRiti is small and founder-led. When a campaign requires specialized 3D artists, film directors, or sound designers, we assemble the right talent transparently, and you always work directly with me.",
      ],
    },
  },
  contact: {
    header: {
      heading: "Discuss a campaign.",
      subhead:
        "Tell us what you make and what you are trying to communicate. I'll read it and reply personally within 24 hours to schedule a 30-minute discovery call.",
    },
    fields: {
      name: { label: "Your name & role", placeholder: "e.g. Vaibhav, Founder" },
      email: {
        label: "Work email",
        placeholder: "name@company.com",
        helper: "We will use this only to reply to you.",
      },
      phone: {
        label: "Phone / WhatsApp",
        placeholder: "+91 98765 43210",
        helper: "For quick communication if needed.",
      },
      preferredContact: {
        label: "Preferred contact method",
        helper: "How would you prefer us to reach out?",
        options: ["Email", "WhatsApp", "Call"],
      },
      company: {
        label: "Product link or company website",
        placeholder: "yourproduct.com",
        helper: "So we can see what you make.",
      },
      message: {
        label: "What are you trying to launch or communicate?",
        placeholder: "A sentence or two about your product is plenty.",
        helper: "A sentence or two is enough.",
      },
      challenge: {
        label: "Primary communication challenge",
        helper: "Choose the closest.",
        options: [
          "Customers don't understand what the product does",
          "We're preparing for a major product launch",
          "Buyers compare us mainly on price",
          "Our ads get clicks but visitors don't inquire",
        ],
      },
    },
    footerNotice:
      "We discuss scope and investment on a discovery call once we review your product.",
    thankYou: {
      heading: "Got it. Thank you.",
      subhead:
        "Your details have arrived in my studio inbox. I'll review what you've sent and reply personally within 24 hours to coordinate our discovery call.",
      nextStepsHeading: "What happens next",
      steps: [
        "If it looks like a good fit, we'll set up a 30-minute discovery call to explore your communication challenge.",
        "If it isn't the right fit right now, I'll tell you honestly and explain why.",
      ],
      altAction: {
        label: "Not ready to talk? Explore the Keus Smart Home POC →",
        href: "/work",
      },
    },
  },
  notFound: {
    heading: "That page isn't here.",
    text: "Try the homepage, or tell us what you were looking for.",
    button: { label: "Return to Home", href: "/" },
  },
  footer: {
    blurb:
      "KalpRiti — We change the way complex products are marketed through Interadaptive Campaigns.",
    links: [
      { label: "Discuss a Campaign", href: "/contact" },
    ],
  },
};
