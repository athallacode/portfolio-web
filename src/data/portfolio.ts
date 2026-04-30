export const portfolioData = {
  about: {
    name: "Nauval Yusriya Athalla",
    role: "IT Undergrad @ Telkom University | ML & Data Engineer",
    company: "Telkom University",
    bio: "I build high-impact technology for social good through expertise in Data Analysis, Data Engineering, Machine Learning, and AI Engineering. Experienced in managing complex pipelines (Spark, Airbyte, Docker) and Cloud architectures (GCP/AWS). 1st Place Winner of Hackfest 2026, focused on delivering practical and scalable solutions.",
    stats: [
      { label: "Projects Completed", value: "12" },
      { label: "Competition Wins", value: "8" },
      { label: "Years Experience", value: "2+" }
    ],
    social: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instagram.com/"
    }
  },
  skills: [
    { category: "AI & Data", items: ["NLP", "Transformers", "PyTorch", "TensorFlow", "Scikit-Learn", "Computer Vision"], icon: "Cpu", color: "#FF6F00" },
    { category: "Backend & Data Eng", items: ["Python", "SQL", "Node.js", "Express", "BigQuery", "Docker"], icon: "Server", color: "#3C873A" },
    { category: "Cloud & Database", items: ["MongoDB", "PostgreSQL", "Firebase", "AWS", "Google Cloud"], icon: "Database", color: "#F5A623" },
    { category: "App Development", items: ["React", "Next.js", "Tailwind CSS", "Flutter", "REST API"], icon: "Layout", color: "#61DAFB" }
  ],
  achievements: {
    featured: [
      {
        id: "hackfest-2026",
        title: "1st Place | Hackfest 2026",
        year: "2026",
        description: "Leksa: A specialized therapy application for children with dyslexia, utilizing AI Handwriting Analysis and Gamified Therapy.",
        image: "/images/hackfestp.jpeg",
        color: "from-blue-400 to-indigo-600",
        extendedDetails: {
          role: "Lead AI & UX Developer",
          teamSize: "4 Members",
          technologies: ["PaddleOCR", "Gamification Engines", "Accessibility Design"],
          highlights: [
            "AI Handwriting Analysis: Utilizes PaddleOCR to scan and analyze handwritten input, providing instant feedback on letter formation.",
            "Gamified Therapy: Converts phonetic exercises into interactive challenges, increasing engagement and retention.",
            "Humanity-Centered Design: Specifically tailored to the cognitive and sensory needs of dyslexic users."
          ]
        }
      },
      {
        id: "hackathon-ugm-2026",
        title: "1st Place | Refactory Hackathon",
        year: "2026",
        description: "OpenTasks: A system designed to bridge the gap between software design and implementation using OpenSpec for rigorous code architecture.",
        image: "/images/HACKATHON1.png",
        color: "from-amber-400 to-amber-600",
        extendedDetails: {
          role: "Architectural Lead",
          teamSize: "4 Members",
          technologies: ["OpenSpec", "GitHub API", "Node.js"],
          highlights: [
            "Architecture Detection: Automatically analyzes code pushes to GitHub to verify alignment with predefined architectural plans.",
            "Automated Gatekeeping: Rejects commits that deviate from the original architecture, preventing long-term 'architectural drift'."
          ]
        }
      },
      {
        id: "adikara-2025",
        title: "1st Place | Adikara Inovasi",
        year: "2025",
        description: "Anti-Gambling Sentinel: A mobile security application developed to proactively detect and block online gambling content on Android devices.",
        image: "/images/Adikara.jpeg",
        color: "from-amber-400 to-orange-600",
        extendedDetails: {
          role: "AI Security Engineer",
          teamSize: "3 Members",
          technologies: ["TensorFlow Lite", "Android Accessibility Service"],
          highlights: [
            "On-Device AI: Leverages TensorFlow Lite to perform real-time text and pattern recognition on the user's screen.",
            "Automated Intervention: Monitors screen content and immediately redirects or blocks gambling-related elements to protect the user."
          ]
        }
      },
      {
        id: "innovillage-2025",
        title: "Top 50 Innovillage 2025",
        year: "2025",
        description: "Developed an integrated AIoT system for Black Soldier Fly (BSF) larvae cultivation to modernize village-scale waste management and support a sustainable circular economy.",
        image: "/images/Innovillage.jpeg",
        color: "from-amber-400 to-amber-600",
        extendedDetails: {
          role: "Research & Product Development",
          teamSize: "3 Members",
          technologies: ["IoT Sensors", "AI Predictive Modeling", "Real-time Dashboard (MQTT/HTTP)", "Renewable Energy Integration"],
          highlights: [
            "Precision AIoT Architecture: Engineered a high-precision monitoring system integrating IoT sensors with AI predictive models to forecast harvest yields and optimize growth cycles based on environmental data.",
            "Intelligent Real-time Analytics: Designed and deployed a Live-View Dashboard that transforms raw sensor data into actionable insights, ensuring precision farming standards.",
            "Sustainable Automation: Spearheaded the development of a renewable energy-powered automation system, featuring a solar-panel-integrated organic shredder to streamline the cultivation process.",
            "Socio-Economic Impact: Successfully revitalized the local village economy by reducing manual labor costs and increasing harvest reliability through technology-driven automation."
          ]
        }
      }
    ],
    compact: [
      {
        title: "Finalis Arkavidia 10.0 ITB",
        description: "Equilibra: An intelligent project management platform that automates the transition from virtual meetings to actionable tasks.",
        icon: "🔥",
        color: "text-orange-500",
        image: "/images/arkavidia.jpeg",
        extendedDetails: {
          role: "Product & AI Lead",
          teamSize: "4 Members",
          technologies: ["Recall.ai", "NLP", "React"],
          highlights: [
            "Virtual Meeting Bot: Integrated via Recall.ai to automatically join and synthesize online meeting transcripts.",
            "Auto-Task Transformation: Converts discussions into structured tasks assigned directly to team members within the Equilibra dashboard."
          ]
        }
      },
      {
        title: "Selected Finalist | Gemastik 2025",
        description: "Developed 'Ajak', an essential web-based platform designed to empower Micro, Small, and Medium Enterprises (MSMEs) by automating complex tax management and financial reporting processes.",
        icon: "💻",
        color: "text-blue-500",
        image: "/images/Gemastik.jpeg",
        extendedDetails: {
          role: "Hacker / Lead Developer",
          teamSize: "3 Members",
          technologies: ["React.js", "Express.js", "MongoDB", "Node.js"],
          highlights: [
            "Financial Automation Engine: Engineered a robust system to automate financial calculations and administrative workflows, replacing inefficient conventional methods with a seamless digital experience.",
            "Bureaucracy Simplification: Successfully reduced the complexity of tax compliance for small business owners by streamlining data entry and automated document generation.",
            "Institutional Representation: Selected as a top-tier project to represent the university at the national level, recognized for its significant contribution to the digitalization of the MSME sector.",
            "Scalable Architecture: Developed a full-stack solution focusing on data integrity and user-centric design to ensure high adoption rates among non-technical business owners."
          ]
        }
      },
      {
        title: "Top 10 Finalist | Begin 2.0 Business Plan Competition",
        description: "Conceptualized and developed 'Nusa', a progressive Agritech startup aimed at revolutionizing the fisheries supply chain by eliminating exploitative middlemen and empowering local fishermen.",
        icon: "🏆",
        color: "text-amber-500",
        image: "/images/beast.jpeg",
        extendedDetails: {
          role: "Hacker / Lead Developer",
          teamSize: "3 Members",
          technologies: ["React.js", "Firebase", "Node.js"],
          highlights: [
            "Direct-to-Consumer (D2C) Ecosystem: Engineered a marketplace architecture that bridges the gap between remote fishing supply points and end-consumers, ensuring fairer pricing and fresher products.",
            "Scalable Cloud Infrastructure: Leveraged Firebase for real-time data synchronization and rapid prototyping, allowing for a highly responsive and reliable user experience.",
            "High Business Viability: Recognized as a Top 10 innovation for its exceptional future viability and its potential to solve systemic inefficiencies in the maritime logistics sector.",
            "Strategic Prototyping: Developed a functional MVP that successfully demonstrated the technical feasibility of complex supply chain tracking to a panel of business experts."
          ]
        }
      }
    ]
  },
  experience: [
    {
      role: "Vice Lead Digistar Club",
      company: "Telkom University Chapter",
      period: "2024 - Present",
      description: "Empowering the next generation of digital innovators through strategic leadership and community management. I direct organizational activities that foster collaboration, manage diverse member cohorts, and design the framework for a thriving digital ecosystem where technology and talent converge.",
      tags: ["Leadership", "Digital Talent", "Strategy"],
      color: "from-purple-500 to-indigo-600",
      image: "/images/chaptervice.jpeg"
    },
    {
      role: "Asisten Laboratorium IoT",
      company: "Telkom University",
      period: "2024 - Present",
      description: "Spearheading the integration of Artificial Intelligence with IoT frameworks within the laboratory ecosystem. Responsibilities include facilitating advanced practicums on edge computing, designing modules for intelligent sensor networks, and contributing to research focused on deploying machine learning models directly onto embedded hardware.",
      tags: ["IoT", "Teaching", "Research"],
      color: "from-cyan-400 to-blue-500",
      image: "/images/iot.jpeg"
    },
    {
      role: "AI-Driven Mobile Developer",
      company: "Motion Lab – Telkom University",
      period: "2024",
      description: "Developing data-integrated mobile applications for mental health monitoring. Implementing predictive features and cloud-based data synchronization.",
      tags: ["Kotlin", "Firebase", "AI Integration"],
      color: "from-pink-500 to-rose-500",
      image: "/images/motion.jpeg"
    }
  ],
  projects: [
    {
      slug: "leksa-dyslexia",
      title: "Leksa: Dyslexia Therapy AI",
      category: "EdTech \u00b7 AI \u00b7 Accessibility",
      year: "2026",
      description: "Specialized therapy application using AI Handwriting Analysis to assist children with dyslexia.",
      problem: "Traditional dyslexia therapy is often repetitive and lacks engaging, real-time feedback for literacy development.",
      solution: "Integrated PaddleOCR for AI Handwriting Analysis with a gamified environment specifically designed for neurodiverse needs.",
      impact: "Winner of 1st Place at Hackfest 2026 for its humanity-centered technological approach.",
      features: ["AI Handwriting Analysis", "Gamified Therapy", "Sensory-friendly UI"],
      tech: ["PaddleOCR", "Python", "React Native", "Gamification Engines"],
      image: "/images/leksa.png",
      color: "blue",
      size: "large",
      links: { demo: "#", github: "https://github.com/athallacode/ARCANA" }
    },
    {
      slug: "sentivo",
      title: "Sentivo: Sentiment Insights for TikTok",
      category: "NLP \u00b7 Web Ext",
      year: "2026",
      description: "Automated sentiment analysis tool for TikTok comments using advanced NLP models.",
      problem: "Massive volume of TikTok comments makes manual analysis impossible for creator feedback.",
      solution: "Developed an automation platform using Linear SVM and NLP pre-processing to classify sentiment trajectories.",
      impact: "Reduced sentiment analysis time by 95% for creators.",
      features: ["Auto-scrapping API", "Real-time NLP Classification", "Data-driven Dashboard"],
      tech: ["Python", "Scikit-learn", "NLP", "Linear SVM"],
      image: "/images/sentivo.jpg",
      color: "purple",
      size: "medium",
      links: { demo: "#", github: "#" }
    },
    {
      slug: "anti-gambling-ai",
      title: "Anti-Gambling Sentinel",
      category: "Cybersecurity \u00b7 AI",
      year: "2025",
      description: "Real-time on-device AI system to proactively detect and block online gambling content on mobile.",
      problem: "Widespread exposure to gambling content on mobile devices without effective real-time filtering.",
      solution: "Integrates TFLite for pattern recognition with Accessibility Service for immediate content intervention.",
      impact: "Winner of 1st Place at Adikara Inovasi for its impact on digital safety.",
      features: ["On-Device AI", "Automated Intervention", "Cyber Protection"],
      tech: ["TensorFlow Lite", "Android Accessibility", "Kotlin"],
      image: "/images/garda.jpg",
      color: "orange",
      size: "medium",
      links: { demo: "#", github: "#" }
    },
    {
      slug: "equilibra",
      title: "Equilibra",
      category: "AI \u00b7 Workflow Automation",
      year: "2025",
      description: "Intelligent platform bridging virtual meeting coordination with automated task execution.",
      problem: "Manual transcription and task delegation from meetings are slow and prone to coordination gaps.",
      solution: "Uses Recall.ai to join meetings, synthesize transcripts, and automate the project lifecycle.",
      impact: "Finalist at Arvadiai for innovative AI-driven project management.",
      features: ["Virtual Meeting Bot", "Auto-Task Transformation", "Sync Workflow"],
      tech: ["Recall.ai", "NLP", "React"],
      image: "/images/equilibra.jpg",
      color: "blue",
      size: "small",
      links: { demo: "https://equilibra.user.cloudjkt02.com/", github: "https://github.com/evangelionxyz/Equilibra-Lunaris" }
    },
    {
      slug: "green-maggot",
      title: "Green Maggot",
      category: "IoT \u00b7 Predictive AI",
      year: "2025",
      description: "Data-driven IoT system for sustainable Maggot BSF cultivation.",
      problem: "Lack of environmental data monitoring leads to low harvest yields.",
      solution: "IoT sensor grid integrated with AI predictive models to monitor growth.",
      impact: "Increased biomass production by 30%.",
      features: ["Sensor Telemetry", "Anomaly detection", "Harvest Prediction"],
      tech: ["IoT", "Python", "Firebase"],
      image: "/images/greenmaggot.jpg",
      color: "green",
      size: "small",
      links: { demo: "#", github: "https://github.com/athallacode/GreenMaggot" }
    },
    {
      slug: "donasiku",
      title: "Donasiku",
      category: "Data-driven Web",
      year: "2024",
      description: "Social impact platform with verified donation tracking.",
      problem: "Transparency issues in donation distribution.",
      solution: "A database-first approach to track donation flow and verify recipients.",
      impact: "Facilitated 1000+ donations with full transparency.",
      features: ["Database Tracking", "Logistics logic", "Impact Dashboard"],
      tech: ["Next.js", "Node.js", "MongoDB"],
      image: "/images/donasiku.jpg",
      color: "pink",
      size: "small",
      links: { demo: "#", github: "https://github.com/athallacode/DONASIKU-PROWEB" }
    }
  ],
  certificates: [
    {
      title: "Hackathon Refactory x UGM Winner",
      organization: "Refactory & UGM",
      date: "Jan 2026",
      image: "/images/Refactory Sertif.jpg",
      link: "#"
    },
    {
      title: "Arkavidia 10.0 Finalist",
      organization: "ITB",
      date: "Feb 2025",
      image: "/images/Sertif Arkavidia.jpg",
      link: "#"
    },
    {
      title: "AI Training Completion",
      organization: "Generation Girl",
      date: "Dec 2024",
      image: "/images/Sertif Training.jpg",
      link: "#"
    }
  ]
};
