"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const page = () => {
  return (
    <>
      <header className="bg-background px-4 py-3 shadow-sm md:px-6 md:py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-lg font-semibold" prefetch={false}>
            {/* <MountainIcon className="w-6 h-6 mr-2 inline-block" /> */}
            Uday Bhardwaj
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/About"
              className="text-muted-foreground hover:text-foreground transition-colors"
              prefetch={false}
            >
              About
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            {/* <MenuIcon className="w-6 h-6" /> */}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto p-6 bg-white rounded-lg shadow-lg"
        >
          <motion.h1
            className="text-4xl font-bold mb-4 text-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                "Hello, I'm Uday Bhardwaj",
                2000,
                "Web Developer",
                2000,
                "Technology Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            I am passionate about building scalable and efficient web
            applications. With expertise in React, Next.js, Prisma, and MySQL, I
            aim to deliver high-quality projects that solve real-world problems.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.img
              src="/uday ai.png"
              alt="Uday Bhardwaj"
              className="w-32 h-32 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/uday-bhardwaj-15"
              className="text-primary font-bold hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              View My Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default page;
