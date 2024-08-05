"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Skill from "../ui/skill";
import Animatedbtn from "../ui/animatedbtn";
import Aboutbtn from "../ui/aboutbtn";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background px-4 py-3 shadow-sm md:px-6 md:py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-lg font-semibold" prefetch={false}>
            {/* <MountainIcon className="w-6 h-6 mr-2 inline-block" /> */}
            Uday Bhardwaj
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="#"
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

            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            {/* <MenuIcon className="w-6 h-6" /> */}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-background py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="space-y-4">
                <h1 className="text-black mb-4 text-4xl lg:text-6xl font-extrabold">
                  <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Hello, I&apos;m{" "}
                  </span>{" "}
                  <br></br>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Uday Bhardwaj",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "Web Developer",
                      1000,
                      "Technology Enthusiast",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </h1>
                <p className="text-muted-foreground md:text-lg">
                  Explore a collection of my best work and learn more about my
                  design and development expertise.
                </p>
                <div className="flex gap-4">
                  <Link href="https://github.com/uday-bhardwaj-15">
                    <Animatedbtn />
                  </Link>
                  <Link href="/About" prefetch={false}>
                    <Aboutbtn />
                  </Link>
                </div>
              </div>
              <div className="relative  rounded-lg">
                <Skill />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-8 md:space-y-12">
              <div className="text-center">
                <motion.h2
                  className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                  Featured Projects
                </motion.h2>
                <motion.p
                  className="mt-2 text-muted-foreground md:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                >
                  Check out some of my recent work.
                </motion.p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
                {/* Project 1 */}
                <motion.div
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                >
                  <Link
                    href="https://github.com/uday-bhardwaj-15/erp"
                    prefetch={false}
                  >
                    <img
                      src="/ERP-System.png"
                      width={600}
                      height={400}
                      alt="ERP System"
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: "600/400", objectFit: "fill" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-white text-center space-y-2">
                        <h3 className="text-lg font-semibold">ERP System</h3>
                        <p className="text-sm">
                          Comprehensive ERP with student management and
                          attendance tracking.
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
                {/* Project 2 */}
                <motion.div
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                >
                  <Link
                    href="https://github.com/uday-bhardwaj-15/ecommerce-admin"
                    prefetch={false}
                  >
                    <img
                      src="/ecommerce-admin.png"
                      width={600}
                      height={400}
                      alt="E-commerce Site"
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: "600/400", objectFit: "fill" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-white text-center space-y-2">
                        <h3 className="text-lg font-semibold">
                          E-commerce Site
                        </h3>
                        <p className="text-sm">
                          E-commerce site with Store & Admin panel, secure auth
                          and payment integration with Stripe.
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
                {/* Project 3 */}
                <motion.div
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                >
                  <Link
                    href="https://github.com/uday-bhardwaj-15/personal"
                    prefetch={false}
                  >
                    <img
                      src="/blog.png"
                      width={600}
                      height={400}
                      alt="Blog Platform"
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-white text-center space-y-2">
                        <h3 className="text-lg font-semibold">Blog Platform</h3>
                        <p className="text-sm">
                          Blog with content management and user interactions.
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
                {/* Project 4 */}
                <motion.div
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                >
                  <Link
                    href="https://github.com/uday-bhardwaj-15/groweasyassignment"
                    prefetch={false}
                  >
                    <img
                      src="/assesment.png"
                      width={600}
                      height={400}
                      alt="Groweasy Assessment"
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: "600/400", objectFit: "fill" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-white text-center space-y-2">
                        <h3 className="text-lg font-semibold">
                          Groweasy Assessment
                        </h3>
                        <p className="text-sm">
                          A Next.js application with TypeScript for ad banners
                          display and editing.
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
              <motion.div
                className="flex-1 space-y-6 md:space-y-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  ERP System
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Dive into the details of one of my recent projects.
                </p>
                <div className="prose">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  >
                    The ERP system you developed is an innovative solution for
                    student management, utilizing Next.js, NextAuth, Prisma, and
                    MySQL. This user-friendly platform allows administrators to
                    easily add students and automate email notifications with
                    login credentials, ensuring a smooth onboarding process.
                  </motion.p>
                  <motion.p
                    className="font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  >
                    Key Features
                  </motion.p>
                  <motion.ul
                    className="list-disc pl-5 space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                  >
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8,
                        ease: "easeOut",
                      }}
                    >
                      Attendance Tracking: Administrators can input multiple
                      attendance entries, while students can view their
                      attendance percentage, keeping them informed about their
                      academic progress.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                    >
                      Secure Authentication: With NextAuth, the system ensures
                      that only authorized users can access sensitive
                      information, safeguarding student data.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.2,
                        ease: "easeOut",
                      }}
                    >
                      Efficient Data Management: Leveraging Prisma and MySQL,
                      the system handles data efficiently, simplifying database
                      interactions and ensuring smooth operation.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.4,
                        ease: "easeOut",
                      }}
                    >
                      Enhanced Communication: The ERP system improves
                      communication between students and administration,
                      fostering a more organized and transparent academic
                      environment.
                    </motion.li>
                  </motion.ul>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg flex-1"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img
                  src="/erp-panel.png"
                  width={600}
                  height={400}
                  alt="Project Details"
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center space-x-4">
            {/* <MountainIcon className="w-6 h-6" /> */}
            <span className="text-muted-foreground">Uday Bhardwaj</span>
          </div>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
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

            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
