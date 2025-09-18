// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import ThemeToggle from "./ThemeToggle";

// export default function Navbar() {
//   return (
//     <motion.nav
//       className="fixed top-0 left-0 w-full z-50  shadow-md border-b  transition-colors duration-300"
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 ">
//         <h1 className="text-2xl font-bold text-purple-500 dark:text-purple-400 transition-colors duration-300">
//           Dakshika
//         </h1>
//         <div className="flex items-center space-x-8  transition-colors duration-300">
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/projects">Projects</Link>
//           <Link href="/contact">Contact</Link>
//           <ThemeToggle />
//         </div>
//       </div>
//     </motion.nav>
//   );
// }

"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        
        {/* Left Section: Logo + Name */}
        <div className="flex items-center gap-4">
          {/* Profile Photo */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md border border-gray-300 dark:border-gray-600">
            <Image
              src="/dakshika.jpeg" // <-- Place your photo in /public folder
              alt="Dakshika Chaudhary"
              fill
              className="object-cover"
            />
          </div>

          {/* Name & Tagline */}
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              Dakshika Chaudhary
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Programmer • Problem Solver
            </p>
          </div>
        </div>

        {/* Right Section: Links + Theme Toggle */}
        <div className="flex items-center space-x-8 text-gray-800 dark:text-gray-200 transition-colors duration-300">
          <Link
            href="/"
            className="hover:text-purple-500 dark:hover:text-purple-400 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-purple-500 dark:hover:text-purple-400 transition"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-purple-500 dark:hover:text-purple-400 transition"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-purple-500 dark:hover:text-purple-400 transition"
          >
            Contact
          </Link>

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
