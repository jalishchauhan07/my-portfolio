import React from "react";
import { Layout, Terminal, Database } from "lucide-react";

export const experience = [
  {
    title: "Software Developer",
    company: "ABJ Experts",
    logo: "/logos/abj-experts-logo.jpg",
    logoBg: "bg-white",
    logoFit: "cover",
    location: "Ahmedabad",
    startDate: "2025-12-01",
    endDate: "Current",
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
    location: "Ahmedabad",
    startDate: "2024-10-01",
    endDate: "2025-12-01",
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
    location: "Ahmedabad",
    startDate: "2023-09-01",
    endDate: "2024-10-01",
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
    location: "Ahmedabad",
    startDate: "2023-02-01",
    endDate: "2023-08-01",
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
    image: "/projects/vgraphic.png",
    description: "Developed a user-friendly tool to convert CSV data into customizable and visually compelling graphs. Features include data filtering, graph styling, direct printing, and fast data processing, enabling efficient data visualization for analysts and businesses.",
    tech: ["Next.js", "MongoDB", "TypeScript", "Razorpay"],
    link: "https://vgraphic.dicot.tech",
  },
  {
    title: "Vision Web",
    image: "/projects/vision-web.png",
    description: "Built a high-performance Mini-SCADA web platform for industrial and IIoT use cases with ~100ms real-time latency. Integrated MQTT and HTTP APIs, live data trending, alarms, reporting, and long-term historical data storage.",
    tech: ["React.js", "Node.js", "MQTT", "OAuth 2.0"],
    link: "https://vision-web.tech",
  },
  {
    title: "Solar Industry Reporting System",
    image: "/projects/solar-reporting.png",
    description: "Created a MERN-based reporting system for project tracking with real-time supervisor logs and performance analytics. Implemented selfie verification using camera API and integrated Google Maps for location tracking.",
    tech: ["React", "Express", "Node.js", "Google Maps"],
    link: "https://github.com/jalishchauhan07/solar-reporting-website",
  },
  {
    title: "Meta Tank Game",
    image: "/projects/meta-tank.png",
    description: "Developed a 2-player tank battle game using JavaScript and Phaser with HTML5 Canvas. Built turn-based attack logic where players and AI opponents take actions, reducing opponent health based on attack outcomes.",
    tech: ["JavaScript", "Phaser", "Canvas"],
    link: "https://jalishchauhan07.github.io/meta-tank/",
  }
];

