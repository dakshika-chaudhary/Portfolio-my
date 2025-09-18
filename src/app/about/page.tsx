"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const skills = [

  "Next.js",
  "React.js",
  "SaaS",
  "PostgreSQL",
  "OpenAI",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "C++",
  "JavaScript",
  "TypeScript",
  "MongoDB",
  "SQL",
  "shadcn/ui",
  "Problem Solving",
  "git/version-control",
  "Material UI",
  "Next.js SSR",
  "Clerk"
];

export default function About() {
  return (
    <section className="min-h-screen px-6 md:px-16 lg:px-32 py-16 bg-white dark:bg-black transition-colors duration-300 mt-2">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-500 dark:text-purple-400 mb-8 text-center">
        About Me
      </h1>

      <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto text-center mb-12">
        I’m <span className="font-semibold text-purple-500">Dakshika Chaudhary</span>, a Full Stack Developer and Programmer passionate about creating beautiful, interactive, and high-performance websites. I love solving complex problems and building scalable applications using modern technologies.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 dark:text-purple-400 mb-6 text-center">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 font-medium text-sm shadow-sm hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
      {/* LeetCode Profile */}
      <div className="max-w-md mx-auto text-center mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 dark:text-orange-400 mb-4">
          Check My LeetCode Profile
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          I enjoy solving algorithm and data structure challenges to improve my problem-solving skills.
        </p>
        <motion.a
          href="https://leetcode.com/u/techanology/" // Replace with your LeetCode profile
          target="_blank"
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-xl shadow-lg hover:scale-105 hover:from-orange-500 hover:to-orange-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/icons8-leetcode-24.png" // Place a LeetCode logo in public folder
            alt="LeetCode"
            width={24}
            height={24}
            className="rounded-sm"
          />
          View Profile
        </motion.a>
      </div>
    </section>
  );
}
