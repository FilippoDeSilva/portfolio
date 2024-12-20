"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const HeroPage: React.FC = () => {
  const sections = ["hero", "about", "portfolio", "footer"];
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBounce, setShowBounce] = useState(false);

  const handleScroll = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
    document
      .getElementById(sections[currentSection])
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    const handleWindowScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleWindowScroll);

    const bounceTimer = setTimeout(() => setShowBounce(true), 3000);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("scroll", handleWindowScroll);
      clearTimeout(bounceTimer);
    };
  }, [currentSection]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Main Section */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black text-center text-white p-4 relative"
      >
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-blue-500"
        >
          Hello👋, I&apos;m Filippo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          className="text-xs md:text-xl lg:text-xl mb-6 text-gray-300 max-w-lg"
        >
          A professional developer crafting Full Stack Web Apps, Mobile Apps,
          and AI solutions.
        </motion.p>
        {showBounce && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="absolute bottom-6"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-md size-6 sm:size-8 text-blue-500"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                fill="currentColor"
              ></path>
            </svg>
          </motion.div>
        )}
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-black to-gray-900 text-center text-white p-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-blue-500"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="text-xs md:text-xs lg:text-lg text-gray-300 max-w-xl leading-relaxed"
        >
          I&apos;m a dedicated, goal-oriented individual who always enjoys
          experimenting, learning, and building myself in the process. I develop
          scalable and efficient solutions that meet my clients&apos; needs. I
          am passionate about staying up-to-date with the latest technologies
          and industry trends.
        </motion.p>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-black to-gray-900 text-center text-white p-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-blue-500"
        >
          Innovative Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="text-xs md:text-xs lg:text-lg text-gray-300 max-w-xl leading-relaxed"
        >
          This portfolio is more than a showcase of projects — it&apos;s a
          testament to my problem-solving abilities and commitment to continuous
          learning. Within, you&apos;ll discover a range of work, from designing
          intuitive user interfaces to enhancing database performance.
        </motion.p>
      </section>
    </>
  );
};

export default HeroPage;
