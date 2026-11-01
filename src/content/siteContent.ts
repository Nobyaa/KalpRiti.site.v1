export const siteContent = {
  brand: {
    name: "KalpRiti",
    tagline: "A founder-led creative studio",
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
      headline: "Your product does more than your customers understand.",
      subhead:
        "KalpRiti is a founder-led creative studio. We build campaign experiences where the story, the interaction and the next step are designed together, so people see why your product matters to them.",
      buttons: {
        primary: { label: "Discuss a Campaign", href: "/contact" },
        secondary: { label: "Explore the Interactive Experience", href: "#demo" },
      },
      alternateHeadline: "People are looking at your product. Are they understanding it?",
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
      heading: "Try it. Pick the one that sounds most like you.",
      choices: [
        {
          id: 1,
          label: "We're preparing for a product launch.",
          focusTitle: "Launch Strategy & Focus",
          response:
            "You have something worth explaining, and a date. The risk is a launch that lists features when customers need a reason to care. We'd start with the narrative: what's the one thing a customer should understand first, and what should they discover for themselves? Then we'd build the experience that carries it.",
          linkText: "See this in our Keus concept (POC) →",
          linkHref: "/work",
          buttonLabel: "Discuss a Campaign",
          buttonHref: "/contact?intent=launch",
        },
        {
          id: 2,
          label: "People click, but don't understand the product.",
          focusTitle: "Communication Breakdown",
          response:
            "The ad worked. The page didn't. Visitors arrive curious and meet the same overview as everyone else, so they leave, or they enquire without knowing what they're asking about. We'd replace the single page with an experience where each choice decides what comes next, so people reach the part of your product that matters to them.",
          linkText: "See this in our Keus concept (POC) →",
          linkHref: "/work",
          buttonLabel: "Discuss a Communication Challenge",
          buttonHref: "/contact?intent=communication-challenge",
        },
        {
          id: 3,
          label: "Customers compare us mainly on price.",
          focusTitle: "Value Invisibility",
          response:
            "When value is invisible, price is all that's left to compare. A feature list can't show why a premium product is worth more. An experience can: it lets people explore the situations where the difference matters to them, in their own order.",
          linkText: "See this in our Keus concept (POC) →",
          linkHref: "/work",
          buttonLabel: "Discuss a Campaign",
          buttonHref: "/contact?intent=price-comparison",
        },
        {
          id: 4,
          label: "We're scaling beyond founder-led selling.",
          focusTitle: "Scaling the Explanation",
          response:
            "Right now you or your team explain the product, and it works. That doesn't scale. We'd turn the way you explain it in the room into an experience that does the same job without you there: it asks what matters, shows the relevant part, and suggests a sensible next step.",
          linkText: "See this in our Keus concept (POC) →",
          linkHref: "/work",
          buttonLabel: "Discuss a Campaign",
          buttonHref: "/contact?intent=scaling",
        },
      ],
      explainer: {
        title: "What just happened.",
        text: "An interactive experience lets people explore. An interadaptive one changes what they see, learn or do next based on the choices they make. You made one choice, and the page rearranged itself around it. We design that for products that are hard to explain.",
      },
      disclaimer: "Nothing here is tracked to decide what you see. It responds only to what you pick.",
    },
    workPreview: {
      heading: "One concept, labelled honestly.",
      text: "We built a smart-home campaign experience for Keus, without a client brief, to show how we'd approach a product that's hard to explain. It's a proof of concept, not client work, and we won't present it as anything else.",
      link: { label: "See the concept →", href: "/work" },
      tag: "POC. A self-initiated concept, not client work.",
    },
    whatWeMake: {
      heading: "Three ways to work with us.",
      offers: [
        {
          title: "Campaign Strategy Sprint",
          desc: "The thinking, before anything is built.",
        },
        {
          title: "Interactive Campaign Experience",
          desc: "The campaign, built.",
        },
        {
          title: "Campaign Growth Partner",
          desc: "What happens after launch.",
        },
      ],
      link: { label: "See what's included →", href: "/what-we-do" },
    },
    whereWeAre: {
      heading: "We're early. We'd rather show you than list clients.",
      body: "KalpRiti is a young, founder-led creative studio. We're building this approach through working concepts and experiments, starting with interactive campaign experiences. You won't find a wall of logos or performance claims here. What we can show is how we think and what we build.",
    },
    closingCta: {
      heading: "Have a product that deserves a better explanation?",
      button: { label: "Discuss a Campaign", href: "/contact" },
    },
  },
  whatWeDo: {
    header: {
      heading: "Three ways to work with us.",
      subhead:
        "Start with the thinking, build the experience, or keep improving it after launch. We talk through scope and investment on a call, once we understand what you're trying to do.",
    },
    offers: [
      {
        id: "sprint",
        num: "01",
        title: "Campaign Strategy Sprint",
        subtitle:
          "For teams who know there's a communication gap and want a clear plan before anything is built.",
        included: [
          "Alignment on the objective and the audience",
          "A review of how the product is communicated today",
          "Insight and messaging direction",
          "A campaign narrative",
          "Creative direction",
          "A blueprint for the interactive experience",
        ],
        notIncluded: [
          "Building the experience, production, media buying, ongoing execution. We scope those separately if you want them.",
        ],
      },
      {
        id: "experience",
        num: "02",
        title: "Interactive Campaign Experience",
        subtitle:
          "For teams with a launch, campaign or acquisition goal who want it built, not just planned.",
        included: [
          "Strategy and narrative",
          "A campaign concept and creative direction",
          "Concepts for how people arrive (the ad, the film, the link)",
          "One core interactive experience",
          "Agreed paths through it, with next steps matched to each",
          "An analytics plan, with setup where we have access",
          "Testing and launch support",
        ],
        notIncluded: [
          "Media spend or media buying, extensive production, complex CRM or backend integrations, hosting and software costs, unlimited revisions, and additional audiences or objectives beyond what we agree.",
        ],
        noteOnExisting:
          "A product film, campaign or landing page can stay as the entry point if it works. We'd only suggest redoing it if it's fundamentally unclear.",
      },
      {
        id: "growth",
        num: "03",
        title: "Campaign Growth Partner",
        subtitle:
          "For teams who've launched and want to keep improving what they've built. It usually follows an initial campaign or experience.",
        included: [
          "Ongoing campaign planning",
          "A defined round of improvements to the campaign or experience",
          "Narrative and creative development",
          "Refinements to the paths, interactions and next steps",
          "A review of how it's performing, based on the data available",
        ],
        notIncluded: [
          "Media buying, unlimited creative volume, extensive production, guaranteed performance.",
        ],
      },
    ],
    whatWeDontPromise: {
      heading: "What we don't promise",
      text: "We don't promise results. We can't honestly tell you what a campaign will do for your sales before it has been tested. We'll agree what to measure up front, and we'll be straight with you about what the numbers show.",
    },
    qualification: {
      whoThisIsFor: [
        "You sell a valuable product that's hard to explain: technical, unfamiliar, premium, or with several different uses.",
        "Customers need time to understand, compare or involve others before they buy.",
        "You have a real launch, campaign or acquisition goal.",
        "A decision-maker or champion is involved.",
        "You're ready to invest in strategy and a custom experience, and to share what you know about your product.",
      ],
      whoItIsNotFor: [
        "You need routine social posts, ad creatives or low-cost design.",
        "You see creativity as decoration, or want interactivity added without a reason.",
        "You need guaranteed conversions or revenue.",
        "You expect strategy, creative and a custom build on a very small budget, or in a few days.",
        "You can't involve the people who make the decision.",
        "Your product is a quick, low-consideration purchase, where customers decide in seconds.",
      ],
    },
    process: {
      heading: "How a project moves",
      steps: [
        {
          num: "1",
          name: "Understand",
          desc: "We learn the product, the buyer and where understanding breaks down.",
        },
        {
          num: "2",
          name: "Shape the story",
          desc: "We decide what customers should understand first, and what they should discover.",
        },
        {
          num: "3",
          name: "Build the experience",
          desc: "The campaign and the interaction are designed and made together.",
        },
        {
          num: "4",
          name: "Learn",
          desc: "We look at what the data shows and decide what to change.",
        },
      ],
    },
  },
  work: {
    header: {
      heading: "Work and experiments.",
      subhead:
        "We're early. Rather than a list of clients, here's a concept we built to show how we think.",
    },
    concept: {
      title: "Keus Smart Home",
      tag: "POC. A self-initiated concept, not client work.",
      challengeHeading: "The challenge we explored",
      challenge:
        "Smart-home ads tend to look alike: premium visuals, a list of features, a lifestyle. But when we looked at what people actually worry about before buying, features weren’t the concern. They wanted to know: Will it break after installation? What happens after the sale? And what will this cost for my home? They want a rough number immediately, not after a sales call. We turned that insight into a story, “Test Your Absence,” built on the bond between a child and an elderly parent. Then we carried that story from an ad film into an interactive experience.",
      thinkingHeading: "The thinking",
      thinking:
        "The biggest concern wasn’t features, or even price. It was what happens after the sale. So the experience doesn’t open with a spec sheet. It opens with an emotional story, then asks the visitor questions, shows the difference the product makes for them, and answers the concerns people have before they have to raise them.",
      whatItShowsHeading: "What it shows",
      whatItShows: [
        "How a campaign story can decide what a visitor explores",
        "How different choices can lead to different next steps",
        "A working demonstration of our approach",
      ],
      whatItDoesNotShowHeading: "What it doesn't show",
      whatItDoesNotShow:
        "Sales, conversion or lead-quality results. It was built as a concept.",
    },
    footerNote: "More experiments will be added here as they're ready.",
  },
  about: {
    header: {
      heading: "Founder-led, on purpose.",
    },
    story: {
      paragraphs: [
        "I'm Vaibhav Kumbhar, the founder of KalpRiti. I started as a graphic designer, and moved through creative work and marketing into building agencies.",
        "Across that work I kept seeing the same thing: good products explained badly. Not because anyone was careless, but because a film, an ad and a landing page rarely behave like one piece of communication. The customer is left to connect them.",
        "KalpRiti is my answer to that. Design the story, the interaction and the next step together, so people understand why a product matters to them.",
        "I also run Kanbharu, a local marketing agency.",
      ],
    },
    beliefs: {
      heading: "What we believe",
      text: "Creativity should do more than capture attention. It should help people think, feel, understand and act. Brands should mean more, and experiences should do more.",
    },
    whereWeAre: {
      heading: "Where we are",
      paragraphs: [
        "We're a young, founder-led creative studio. We're developing our approach through working concepts and experiments, starting with interactive campaign experiences. We're early, so we won't pretend to have a long list of case studies or performance claims.",
        "KalpRiti is small and founder-led. When a project needs other specialists, we'll say so, and we'll tell you who's involved.",
      ],
    },
  },
  contact: {
    header: {
      heading: "Discuss a campaign.",
      subhead:
        "Tell us what you're trying to communicate. I'll read it and reply personally within 24 hours.",
    },
    fields: {
      name: { label: "Your name", placeholder: "e.g. Vaibhav Kumbhar" },
      email: {
        label: "Work email",
        placeholder: "vaibhavk@kalpriti.com",
        helper: "We'll use this only to reply to you.",
      },
      phone: {
        label: "Phone number",
        placeholder: "+91 9529985797",
        helper: "For quick communication if needed.",
      },
      preferredContact: {
        label: "Preferred contact method",
        helper: "How would you prefer us to reach out?",
        options: ["Email", "WhatsApp", "Call"],
      },
      company: {
        label: "Company and website",
        placeholder: "Company name, or yourwebsite.com",
        helper: "So we can see the product.",
      },
      message: {
        label: "What are you trying to communicate or launch?",
        placeholder: "A sentence or two is enough.",
        helper: "A sentence or two is enough.",
      },
      challenge: {
        label: "What's making it difficult?",
        helper: "Choose the closest.",
        options: [
          "Customers don't understand the product",
          "We can't explain what makes us different",
          "People compare us mainly on price",
          "Our campaigns get attention but not enquiries",
          "We're launching and don't have the narrative yet",
          "Something else",
        ],
      },
      launchDate: {
        label: "Launch or campaign date",
        placeholder: "e.g. Q3 2026, Next month, or No date yet",
        helper: "If you have one.",
      },
      role: {
        label: "Your role in the decision",
        helper: "Choose one.",
        options: [
          "I make the final decision",
          "I'm part of the decision",
          "I'm gathering information for someone else",
        ],
      },
    },
    footerNotice:
      "We'll talk about scope and investment on a call, once we understand your product.",
    thankYou: {
      heading: "Got it. Thank you.",
      subhead:
        "Your confirmation is on its way to your inbox. I'll read what you've sent and reply personally within 24 hours.",
      nextStepsHeading: "What happens next",
      steps: [
        "If it looks like a good fit, we'll set up a conversation. Before it, I may ask one question, or for a link to your product or campaign.",
        "If it isn't a fit right now, I'll tell you honestly and explain why.",
      ],
      altAction: {
        label: "Not ready to talk? Explore the interactive experience →",
        href: "/#demo",
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
      "KalpRiti, a founder-led creative studio.",
    links: [
      { label: "Discuss a Campaign", href: "/contact" },
    ],
  },
};

