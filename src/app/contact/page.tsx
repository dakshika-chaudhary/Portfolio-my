

"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const contacts = [
    { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/chaudharydakshika/" },
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/dakshika-chaudhary" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/dakshika-chaudhary-486547263/" },
    { name: "Phone", icon: <FaPhone />, link: "tel:+7983998460" },
    { name: "Email", icon: <FaEnvelope />, link: "mailto:dakshikac2004chaudhary@gmail.com" },
  ];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 bg-white dark:bg-black transition-colors duration-300 mt-20 gap-12">
      
      {/* Left side - Contact Details */}
      <motion.div
        className="flex-1 flex flex-col gap-6 w-full md:max-w-md"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-purple-600 dark:text-purple-400">
          Contact Details
        </h1>
        <div className="flex flex-col gap-4">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-800 dark:text-gray-200 text-lg font-semibold hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            >
              <span className="text-2xl">{contact.icon}</span>
              <span>{contact.name}</span>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Right side - Contact Form */}
      <motion.form
        className="flex-1 w-full max-w-lg flex flex-col gap-6"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-600 dark:text-purple-400">
          
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold shadow-lg hover:shadow-purple-400/50 hover:scale-105 transition-transform duration-300"
        >
          Send Message
        </button>
        {submitted && (
          <p className="text-green-500 font-semibold mt-2 text-center">Message sent successfully!</p>
        )}
      </motion.form>
    </section>
  );
}
