// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-32 bg-white dark:bg-black transition-colors duration-300 gap-12">
      
//       {/* Left Side - Text Content */}
//       <motion.div
//         className="flex-1 text-center md:text-left"
//         initial={{ opacity: 0, x: -80 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
//             Dakshika Chaudhary
//           </span>
//         </h1>

//         <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
//           I’m a <span className="font-semibold text-purple-500">Full Stack Developer</span> and{" "}
//           <span className="font-semibold text-pink-500">Programmer</span> passionate about creating beautiful, interactive, and high-performance websites using{" "}
//           <span className="font-semibold text-purple-400">Next.js</span>,{" "}
//           <span className="font-semibold text-pink-400">React</span>,{" "}
//           <span className="font-semibold text-green-500">Node.js</span>, and{" "}
//           <span className="font-semibold text-yellow-500">JavaScript</span>.
//         </p>

//         {/* Call to Action Buttons */}
//         <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
//           <motion.a
//             href="/projects"
//             className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg hover:shadow-purple-400/50 hover:scale-105 transition-transform duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             View My Work 🚀
//           </motion.a>

//           <motion.a
//             href="/contact"
//             className="px-6 py-3 rounded-xl border border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             Contact Me 📩
//           </motion.a>

//           {/* Resume Download Button */}
//           <motion.a
//             href="/resume.pdf" // Place your resume.pdf inside the public folder
//             download
//             className="px-6 py-3 rounded-xl bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             Download Resume 📄
//           </motion.a>
//         </div>
//       </motion.div>

//       {/* Right Side - Profile Image */}
//       <motion.div
//         className="flex-1 flex justify-center"
//         initial={{ opacity: 0, x: 80 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-purple-400 dark:border-purple-500">
//           <Image
//             src="/dakshika.jpg"
//             alt="Dakshika Chaudhary"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-32 bg-white dark:bg-black transition-colors duration-300 gap-12">
      
      {/* Left Side - Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
            Dakshika Chaudhary
          </span>
        </h1>

        <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
          I’m a <span className="font-semibold text-purple-500">Full Stack Developer</span> and{" "}
          <span className="font-semibold text-pink-500">Programmer</span> passionate about creating beautiful, interactive, and high-performance websites using{" "}
          <span className="font-semibold text-purple-400">Next.js</span>,{" "}
          <span className="font-semibold text-pink-400">React</span>,{" "}
          <span className="font-semibold text-green-500">Node.js</span>, and{" "}
          <span className="font-semibold text-yellow-500">JavaScript</span>.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <motion.a
            href="/projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg hover:shadow-purple-400/50 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View My Work 🚀
          </motion.a>

          <motion.a
            href="/contact"
            className="px-6 py-3 rounded-xl border border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me 📩
          </motion.a>
        
      
       {/* Resume Download Button */}
          <motion.a
            href="/resume.pdf" // Place your resume.pdf inside the public folder
            download
            className="px-6 py-3 rounded-xl bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Download Resume 📄
          </motion.a>
          
          </div>
        </motion.div>
      {/* Right Side - Profile Image */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-purple-400 dark:border-purple-500">
          <Image
            src="/dakshika.jpeg"
            alt="Dakshika Chaudhary"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
