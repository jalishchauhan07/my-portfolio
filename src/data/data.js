import React from "react";
import { Layout, Terminal, Database } from "lucide-react";

export const experience = [
  {
    title: "Software Developer",
    company: "ABJ Experts",
    summary: "Engineered scalable cloud SaaS platforms, AI document intelligence pipelines, and real-time collaboration features for enterprise clients.",
    logo: "/logos/abj-experts-logo.jpg",
    logoBg: "bg-white",
    logoFit: "cover",
    location: "Ahmedabad, India",
    startDate: "2025-12-01",
    endDate: "Current",
    roleType: "Full-Time",
    skills: ["Next.js", "React.js", "TypeScript", "Supabase", "LangChain", "OpenAI"],
    description: [
      "Built enterprise SaaS web applications with responsive dashboards, role-based permissions, and real-time workspace collaboration.",
      "Integrated AI-powered document processing workflows to analyze unstructured business files and automate routine tasks.",
      "Architected cloud database schemas with automated synchronization to keep distributed team data accurate and secure."
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digilize Solution",
    summary: "Architected consumer anti-counterfeit portals and automated packaging line traceability MES platforms.",
    logo: "/logos/digilize-logo.png",
    logoBg: "bg-emerald-500",
    location: "Ahmedabad, India",
    startDate: "2024-10-01",
    endDate: "2025-12-01",
    roleType: "Full-Time",
    skills: ["Next.js", "React.js", "PostgreSQL", "Prisma ORM", "TypeScript", "Redis"],
    description: [
      "Developed public product authentication portals allowing consumers to instantly verify batch authenticity via on-pack QR codes.",
      "Automated industrial packaging line serialization with live printer monitoring and automated error diagnostics.",
      "Implemented automated database backup and recovery workflows for PostgreSQL with scheduled cron jobs and custom storage paths."
    ],
  },
  {
    title: "Software Developer - Backend & Mobile",
    company: "Dicot Innovation",
    summary: "Engineered scalable backend REST services, secure transaction gateways, and a cross-platform Flutter mobile application replicating the Vision Web industrial monitoring system with automated Telegram and email incident alerts.",
    logo: "/logos/dicot-logo.svg",
    logoBg: "bg-white",
    location: "Ahmedabad, India",
    startDate: "2023-09-01",
    endDate: "2024-10-01",
    roleType: "Full-Time",
    skills: ["Flutter", "Dart", "Telegram Bot", "Email Alerts", "Node.js", "Express.js", "AWS", "MongoDB"],
    description: [
      "Developed a cross-platform mobile application using Flutter that replicated the exact live monitoring experience and sensor telemetry of Vision Web.",
      "Integrated automated Telegram bot messages and instant email alert dispatches triggered whenever equipment exceeds safety threshold limits.",
      "Built real-time machine telemetry dashboards and instant threshold push alerts, empowering plant managers to monitor factory operations on the go.",
      "Engineered reliable backend REST APIs and integrated secure payment gateways for automated transaction processing.",
      "Managed AWS cloud infrastructure and continuous deployment pipelines to maintain high availability and seamless data synchronization."
    ],
  },
  {
    title: "Web Developer",
    company: "Yudiz Solution",
    summary: "Developed interactive 2D browser games and real-time multiplayer networking systems.",
    logo: "/logos/yudiz-logo.svg",
    logoBg: "bg-white",
    location: "Ahmedabad, India",
    startDate: "2023-02-01",
    endDate: "2023-08-01",
    roleType: "Full-Time",
    skills: ["Phaser.js", "Three.js", "Socket.io", "JavaScript"],
    description: [
      "Created engaging interactive web applications, animations, and responsive browser experiences.",
      "Implemented real-time bidirectional data synchronization using WebSockets for multiplayer interactions and live rooms.",
      "Optimized rendering loops and asset caching to maintain smooth 60 FPS gameplay across mobile and desktop devices."
    ],
  }
];

export const projects = [
  {
    title: "VGraphic",
    category: "Full Stack SaaS",
    badge: "Chart Studio",
    image: "/projects/vgraphic.png",
    description: "An interactive data visualization tool that turns spreadsheet data and CSV files into clear, professional graphs and charts. Users can customize styling, apply smart data filters, download high-resolution visuals, and print charts instantly for reporting and business presentations.",
    highlights: [
      "Transforms raw spreadsheet and CSV data into interactive visual charts",
      "Custom color themes, chart styling, and direct high-res export options",
      "Built-in user accounts and secure premium subscription management"
    ],
    stats: { metric: "Data Analytics", label: "Chart Studio", role: "Full Stack Developer" },
    tech: ["Next.js", "TypeScript"],
    link: "https://vgraphic.dicot.tech",
    github: null,
  },
  {
    title: "Product View",
    category: "Full Stack SaaS",
    badge: "Anti-Counterfeit Portal",
    image: "/projects/product-view.jpg",
    description: "An anti-counterfeiting and consumer authentication portal requiring a Unique Product Code (UID or on-pack QR code) to retrieve verified product information. Using this unique code, the platform instantly queries batch records to evaluate whether the product is actively valid or expired, alongside manufacturing and expiry dates, facility origin, and certified lab reports to prevent counterfeit and expired goods from reaching consumers.",
    highlights: [
      "Requires Unique Product Code (UID) to retrieve genuine product and batch information",
      "Real-time expiry validation determining whether the product is active or expired",
      "Instant mobile verification for consumers and distributors via on-pack QR code scanning",
      "Tamper-proof digital certificates, manufacturing timestamps, and certified lab reports"
    ],
    stats: { metric: "Live Verification", label: "Anti-Counterfeit & Expiry", role: "Full Stack Developer" },
    tech: ["Next.js", "React.js", "JavaScript", "Prisma ORM", "Express.js", "React Form"],
    link: "https://dev.digilize.in",
    github: "https://github.com/digilize-innovators/InspectaTrace_ProductView_FrontEnd",
  },
  {
    title: "InspectaTrace",
    category: "Industrial IoT",
    badge: "Packaging Traceability MES",
    image: "/projects/inspectatrace.png",
    description: "An industrial manufacturing and packaging line control system that automates batch serialization and high-speed barcode printing. It communicates directly with packaging printers to print unique serial codes on product cartons in real time, while providing line supervisors with live print monitoring, error alerts, and regulatory batch reports.",
    highlights: [
      "Automated batch serialization and real-time industrial printer control",
      "Live packaging line monitoring with instant hardware status and speed alerts",
      "Digital batch closure reports with verified audit trails and operator sign-offs"
    ],
    stats: { metric: "Factory Automation", label: "Packaging MES", role: "Full Stack Developer" },
    tech: ["React.js", "JavaScript", "Prisma ORM", "Express.js", "Redis", "Socket.io", "React Form"],
    link: "https://dev.digilize.in",
    github: "https://github.com/digilize-innovators/InspectaTrace_ProductView_FrontEnd",
  },
  {
    title: "Vision Web",
    category: "Industrial IoT",
    badge: "Industrial Monitor",
    image: "/projects/vision-web.png",
    description: "An industrial monitoring dashboard that visualizes real-time factory machinery and sensor data. Factory operators can track live operational performance, receive automated Telegram bot messages and instant email alerts whenever equipment exceeds safety thresholds, and analyze historical production trends across shifts to prevent unplanned machine downtime.",
    highlights: [
      "Real-time visual monitoring of factory equipment, sensor telemetry, and live status",
      "Automated Telegram bot messaging and instant email alerts on critical threshold violations",
      "Automated CI/CD pipeline via GitHub Flow with automated testing and deployment"
    ],
    stats: { metric: "Real-time Telemetry", label: "Industrial Monitor", role: "Full Stack & IIoT" },
    tech: ["TypeScript", "MongoDB", "Express.js", "Telegram Bot", "Email Alerts", "GitHub Actions"],
    link: "https://vision-web.tech",
    github: null,
  },
  {
    title: "Vision Mobile",
    category: "Mobile App",
    badge: "Cross-Platform IIoT App",
    image: "/projects/vision-mobile.jpg",
    description: "A cross-platform mobile application developed with Flutter that delivers the exact real-time industrial monitoring capabilities of Vision Web to handheld devices. Plant managers and floor engineers can monitor live machinery telemetry, review operational metrics, and receive instant threshold push alerts, automated Telegram bot messages, and email notifications whenever equipment requires urgent attention.",
    highlights: [
      "Exact mobile reproduction of the Vision Web industrial telemetry dashboard",
      "Automated Telegram bot messages and email alerts for immediate incident escalation",
      "Real-time sensor data streaming with instant critical threshold push alerts",
      "Native cross-platform performance on Android and iOS built with Flutter and Dart"
    ],
    stats: { metric: "Cross-Platform", label: "Mobile IIoT App", role: "Mobile Developer" },
    tech: ["Flutter", "Dart", "Telegram Bot", "Email Alerts", "Node.js", "Express.js", "MongoDB"],
    link: "https://vision-web.tech",
    github: null,
  },
  {
    title: "Solar Industry Reporting System",
    category: "Enterprise Operations",
    badge: "Field Operations Portal",
    image: "/projects/solar-reporting.png",
    description: "A field operations management system designed for solar installation projects. It allows field supervisors to submit daily progress reports, verify worker attendance using on-site photo check-ins, and track team job sites on an interactive map to ensure timely project delivery.",
    highlights: [
      "On-site selfie verification and attendance check-in for field technicians",
      "Interactive map tracking of solar installation sites and job locations",
      "Daily work progress logs, issue reporting, and supervisor analytics"
    ],
    stats: { metric: "Field Operations", label: "Operations Portal", role: "Full Stack Developer" },
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/jalishchauhan07/solar-reporting-website",
    github: "https://github.com/jalishchauhan07/solar-reporting-website",
  },
  {
    title: "Backup Management",
    category: "Enterprise Operations",
    badge: "PostgreSQL Backup & Automation",
    image: "/projects/backup-management.jpg",
    description: "An automated database backup and recovery management platform for PostgreSQL. Users can schedule automated recurring cron jobs with custom execution times and timezone settings, configure target storage folder locations where backup files are saved, browse an organized list of all generated backups, and select any specific backup from the list to view details, download, or restore instantly.",
    highlights: [
      "Automated cron scheduling with custom run time and timezone configuration for PostgreSQL",
      "Customizable backup storage paths to designate exact local or remote save directories",
      "Interactive backup list allowing users to select any specific backup to inspect, download, or restore"
    ],
    stats: { metric: "Automated Cron", label: "PostgreSQL Backup", role: "Full Stack & DevOps" },
    tech: ["PostgreSQL", "Node.js", "Express.js", "React.js"],
    link: "https://github.com/jalishchauhan07",
    github: "https://github.com/jalishchauhan07",
  },
  {
    title: "Meta Tank Game",
    category: "Interactive & Games",
    badge: "Turn-Based Strategy Game",
    image: "/projects/meta-tank.png",
    description: "An interactive 2-player turn-based strategy game where players command tanks in tactical combat against computer opponents or friends. Features strategic aim-and-fire action, health bar mechanics, custom terrain destruction, and smooth battlefield animations.",
    highlights: [
      "Strategic turn-based artillery combat with intelligent computer opponents",
      "Smooth 60 FPS battlefield animation, particle effects, and sound design",
      "Interactive health systems, explosive damage physics, and responsive controls"
    ],
    stats: { metric: "Turn-Based Strategy", label: "Web Game", role: "Game Developer" },
    tech: ["JavaScript", "Phaser"],
    link: "https://jalishchauhan07.github.io/meta-tank/",
    github: "https://github.com/jalishchauhan07/meta-tank",
  }
];

