import React from "react";
import { Layout, Terminal, Database } from "lucide-react";

export const experience = [
  {
    title: "Software Developer",
    company: "ABJ Experts",
    location: "Ahmedabad",
    startDate: "2025-12-01",
    endDate: "Current",
    description: [
      "Designed and developed a scalable SaaS-based web application using the MERN stack with Next.js for SSR and performance optimization.",
      "Built full-stack architecture with API routes, authentication, and dynamic routing using Next.js App Router.",
      "Integrated Supabase for authentication, database management, and real-time data handling.",
      "Implemented caching using Redis and AWS ElastiCache to improve API response time.",
      "Developed secure RESTful APIs with role-based access control.",
      "Integrated AI workflows using LangChain, OpenAI, Google Gemini, and Perplexity AI.",
      "Built AI-powered features like document processing, contextual search, and intelligent responses.",
      "Optimized backend performance with indexing and caching strategies.",
      "Deployed and managed scalable infrastructure on AWS."
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digilize Solution",
    location: "Ahmedabad",
    startDate: "2024-10-01",
    endDate: "2025-12-01",
    description: [
      "Developed responsive web applications using Next.js with SSR and SSG for performance and SEO.",
      "Built RESTful APIs using Express.js for frontend-backend communication.",
      "Managed PostgreSQL databases and handled large-scale data migration and synchronization.",
      "Wrote unit and integration tests using Jest and React Testing Library.",
      "Used Prisma ORM for efficient database queries and schema migrations."
    ],
  },
  {
    title: "Backend Developer",
    company: "Dicot Innovation",
    location: "Ahmedabad",
    startDate: "2023-09-01",
    endDate: "2024-10-01",
    description: [
      "Developed backend systems and REST APIs using Express.js.",
      "Integrated Razorpay payment gateway for secure online transactions.",
      "Built Telegram bot for automated notifications and messaging workflows.",
      "Implemented CI/CD pipelines using GitHub Actions.",
      "Automated deployment to Vercel, Render, and AWS using secure workflows."
    ],
  },
  {
    title: "Web Developer",
    company: "Yudiz Solution",
    location: "Ahmedabad",
    startDate: "2023-02-01",
    endDate: "2023-08-01",
    description: [
      "Developed interactive 2D/3D web applications using Phaser.js and Three.js.",
      "Implemented real-time communication using Socket.io.",
      "Integrated React.js for building scalable and responsive UI.",
      "Enhanced user experience with animations and cross-device optimization."
    ],
  }
];

export const projects = [
  {
    title: "VGraphic",
    description: "Developed a user-friendly tool to convert CSV data into customizable and visually compelling graphs. Implemented a subscription model with a 7-day free trial and Razorpay payment integration. Features include data filtering, graph styling, direct printing, and fast data processing, enabling efficient data visualization for analysts and businesses.",
    tech: ["Next.js", "MongoDB", "TypeScript", "Razorpay"],
    link: "https://vgraphic.dicot.tech",
  },
  {
    title: "Vision Web",
    description: "Built a high-performance Mini-SCADA web platform for industrial and IIoT use cases with ~100ms real-time latency. Implemented role-based access, audit logs, OAuth 2.0 authentication with 2FA, and scalable architecture supporting unlimited tags. Integrated MQTT and HTTP APIs, live data trending, alarms, reporting, and long-term historical data storage.",
    tech: ["React.js", "Node.js", "MQTT", "OAuth 2.0"],
    link: "https://vision-web.tech",
  },
  {
    title: "Solar Industry Reporting System",
    description: "Created a MERN-based reporting system for project tracking with real-time supervisor logs and performance analytics. Implemented selfie verification using camera API and integrated Google Maps for location tracking. Enabled role-based access and centralized project management.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Google Maps API"],
    link: "https://github.com/jalishchauhan07/solar-reporting-website",
  },
  {
    title: "Hospital Management System",
    description: "Developed a full-stack hospital appointment system with dynamic UI and backend API integration. Included features like appointment booking, medical shop API integration, and efficient database management.",
    tech: ["React.js", "Node.js", "Bootstrap", "MySQL"],
    link: "#",
  },
  {
    title: "College Management System",
    description: "Built a Java Swing-based desktop application for managing student data with role-based access. Implemented CRUD operations, input validation, and dynamic reporting for performance tracking.",
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    link: "#",
  },
  {
    title: "Snake & Ladder Game",
    description: "Developed a multiplayer Snake & Ladder game using JavaScript and Phaser 3 with HTML5 Canvas. Implemented turn-based gameplay, random dice logic, and core mechanics like ladder climbs and snake drops. Added win condition logic and smooth animations for an engaging experience.",
    tech: ["JavaScript", "Phaser 3", "HTML", "CSS", "React", "HTML5 Canvas"],
    link: "https://jalishchauhan07.github.io/snakes-ladder/",
  },
  {
    title: "Meta Tank Game",
    description: "Developed a 2-player tank battle game using JavaScript and Phaser with HTML5 Canvas. Implemented tank customization with different weapons and abilities, along with strategic combat mechanics. Built turn-based attack logic where players and AI opponents take actions, reducing opponent health based on attack outcomes. Designed engaging gameplay with progression concepts, enemy AI, and interactive battle scenarios.",
    tech: ["JavaScript", "Phaser", "HTML", "CSS", "HTML5 Canvas"],
    link: "https://jalishchauhan07.github.io/meta-tank/",
  }
];

