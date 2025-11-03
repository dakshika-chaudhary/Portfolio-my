
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const projects = [
  {
    title: "PropertyDeller",
    description: "Full-stack web application enabling users to explore and manage properties with subscription plans.Implemented an AI-powered chatbot using Generative AI to assist users with property suggestions, price explanations, and general guidance on the platform",
    image: "/PropertyDeller.png",
    github: "https://github.com/dakshika-chaudhary/Property-Deller1",
    demo: "https://property-deller1-xr3z.vercel.app/",
    tech: ["React","SaaS","OpenAI","Clerk","linear regression ML model","Python", "Tailwind", "Nodejs","MongoDB"],
  },
  {
    title: "AssistAi",
    description: "AI-powered SaaS platform offering multiple AI tools including article generator, blog title generator, image generator, background remover, object remover, and resume analyzer",
    image: "/AssistAi.png",
    github: "https://github.com/dakshika-chaudhary/-Assist.ai",
    demo: "https://assist-ai-one.vercel.app/",
    tech: ["PostgreSQL","SaaS","OpenAI","TypeScript","Cloudinary","React.js", "Tailwind", "Nodejs","MongoDB"],
  },
  {
    title: "SocialXN HelpDesk",
    description: "Manage your tickets, connect with agents, explore FAQs, and stay updated with announcements – all in one place",
    image: "/helpdesk.png",
    github: "https://github.com/dakshika-chaudhary/Project-Help-Desk",
    demo: "https://project-help-desk-ocy7.vercel.app/",
    tech: ["Next.js", "Tailwind", "Nodejs","MongoDB"],
  },
  {
    title: "Yeddit",
    description: "Built a full-stack blog platform for users to post content and embed YouTube videos with support for likes, dislikes, and comments.",
    image: "/Yeddit.png",
    github: "https://github.com/dakshika-chaudhary/yeddit",
    demo: "https://yeddit.vercel.app/?filter=all",
    tech: ["TypeScript", "Next.js", "Server side rendering", "MongoDB", "Material UI"],
  },
  {
    title: "BackGround Remover",
    description: "Upload the photo and remove the unwanted background to fetch the required object.",
    image: "/backgroundRemover.png",
    github: "https://github.com/dakshika-chaudhary/backGround-remover",
    demo: "https://back-ground-remover-rho.vercel.app/",
    tech: ["JavaScript","modern-rembg", "Next.js"],
  },
  {
    title: "Chat Application",
    description: "Developed a full-stack chat application with real-time messaging. Enabled secure user login with JWT authentication for both individual and group chat features.",
    image: "/chatApplication.png",
    github: "https://github.com/dakshika-chaudhary/Chat-Application",
    demo: "#",
    tech: ["JavaScript", "Next.js", "Socket.io","MongoDB","Nodejs"],
  },
  {
    title: "Check the Weather",
    description: "Developed a full-stack weather application that provides real-time weather updates and forecasts.",
    image: "/climate.png",
    github: "https://github.com/dakshika-chaudhary/Check-the-Weather?tab=readme-ov-file",
    demo: "#",
    tech: ["JavaScript","HTML","CSS"],
  },
];

export default function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen px-6 md:px-16 lg:px-32 py-16 bg-white dark:bg-black transition-colors duration-300 relative">
      <h1 className="text-3xl font-bold text-center text-purple-500 dark:text-purple-400 mb-12">
        My Projects
      </h1>

      {/* Arrow buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-purple-500 dark:bg-purple-700 text-white p-2 rounded-full hover:bg-purple-600 dark:hover:bg-purple-800 transition-colors"
      >
        <ChevronLeftIcon size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-purple-500 dark:bg-purple-700 text-white p-2 rounded-full hover:bg-purple-600 dark:hover:bg-purple-800 transition-colors"
      >
        <ChevronRightIcon size={24} />
      </button>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-none py-4"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="w-[90%] sm:w-[45%] md:w-[30%] bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex-shrink-0 transition-transform hover:scale-105 duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
