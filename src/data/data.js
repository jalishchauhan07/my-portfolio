import React from "react";
import { Layout, Terminal, Database } from "lucide-react";

export const experience = [
  {
    title: "Software Developer",
    company: "ABJ Experts",
    logo: "/logos/abj-experts-logo.jpg",
    logoBg: "bg-white",
    logoFit: "cover",
    location: "Ahmedabad, India",
    startDate: "2025-12-01",
    endDate: "Current",
    roleType: "Full-Time",
    skills: ["Next.js", "React", "Supabase", "LangChain", "OpenAI", "MERN"],
    description: [
      "Designed and developed a scalable SaaS-based web application using the MERN stack with Next.js for SSR and performance optimization.",
      "Integrated Supabase for authentication, database management, and real-time data handling.",
      "Built AI-powered features like document processing, contextual search, and intelligent responses using LangChain and OpenAI."
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digilize Solution",
    logo: "/logos/digilize-logo.png",
    logoBg: "bg-emerald-500",
    location: "Ahmedabad, India",
    startDate: "2024-10-01",
    endDate: "2025-12-01",
    roleType: "Full-Time",
    skills: ["Next.js", "PostgreSQL", "Prisma ORM", "TypeScript", "SSR"],
    description: [
      "Developed responsive web applications using Next.js with SSR and SSG for performance and SEO.",
      "Managed PostgreSQL databases and handled large-scale data migration and synchronization.",
      "Used Prisma ORM for efficient database queries and schema migrations."
    ],
  },
  {
    title: "Backend Developer",
    company: "Dicot Innovation",
    logo: "/logos/dicot-logo.svg",
    logoBg: "bg-white",
    location: "Ahmedabad, India",
    startDate: "2023-09-01",
    endDate: "2024-10-01",
    roleType: "Full-Time",
    skills: ["Express.js", "Node.js", "Razorpay", "AWS", "REST APIs"],
    description: [
      "Developed backend systems and REST APIs using Express.js.",
      "Integrated Razorpay payment gateway for secure online transactions.",
      "Automated deployment to Vercel, Render, and AWS using secure workflows."
    ],
  },
  {
    title: "Web Developer",
    company: "Yudiz Solution",
    logo: "/logos/yudiz-logo.svg",
    logoBg: "bg-white",
    location: "Ahmedabad, India",
    startDate: "2023-02-01",
    endDate: "2023-08-01",
    roleType: "Full-Time",
    skills: ["Phaser.js", "Three.js", "Socket.io", "JavaScript", "HTML5 Canvas"],
    description: [
      "Developed interactive 2D/3D web applications using Phaser.js and Three.js.",
      "Implemented real-time communication using Socket.io.",
      "Enhanced user experience with animations and cross-device optimization."
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
    description: "An anti-counterfeiting and product authentication platform that enables consumers and distributors to verify genuine products by scanning a QR code on the packaging. It instantly displays batch authenticity, manufacturing and expiry dates, facility details, and certified lab reports, helping companies protect brand trust and prevent fake goods.",
    highlights: [
      "Instant mobile verification for consumers by scanning on-pack QR codes",
      "Real-time display of batch authenticity, expiry dates, and lab test reports",
      "Automated digital certificate delivery for supply chain transparency"
    ],
    stats: { metric: "Live Verification", label: "Anti-Counterfeit", role: "Full Stack Developer" },
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
    description: "An industrial monitoring dashboard that visualizes real-time factory machinery and sensor data. Factory operators can track live operational performance, receive instant threshold alerts when equipment exceeds safety limits, and analyze historical production trends across shifts.",
    highlights: [
      "Real-time visual monitoring of factory equipment and sensor readings",
      "Instant visual alarms and threshold alerts to prevent machinery downtime",
      "Automated CI/CD pipeline via GitHub Flow with automated testing and deployment"
    ],
    stats: { metric: "Real-time Telemetry", label: "Industrial Monitor", role: "Full Stack & IIoT" },
    tech: ["TypeScript", "MongoDB", "Express.js", "GitHub Actions"],
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

