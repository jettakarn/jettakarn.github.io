"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code, Terminal, Cpu, ChevronDown, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#FF8C00] selection:text-white">
      
      
      <header className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
        
        <div className="w-full max-w-5xl space-y-8 z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-2"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hey, I&apos;m <span className="text-[#FF8C00]">Jettakarn Khamwai</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              CS Student @ YZU CSE
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="md:col-span-8 bg-[#1E1E1E] p-8 rounded-3xl border border-gray-800 hover:border-[#FF8C00]/50 transition-colors group"
            >
              <h3 className="text-2xl font-medium mb-6 flex items-center gap-2">
                <Terminal className="text-[#FF8C00]" /> Core Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Computer Science", 
                  "Coding & Problem Solving",
                  "Data Structures", 
                  "Algorithms"
                ].map((skill, index) => (
                  <div key={index} className="bg-[#2A2A2A] px-4 py-3 rounded-xl text-gray-200 group-hover:bg-[#333] transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="md:col-span-4 flex flex-col gap-4">
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-[#1E1E1E] p-6 rounded-3xl border border-gray-800 flex justify-around items-center h-full"
              >
                <SocialLink href="#" icon={<Linkedin size={28} />} label="LinkedIn" />
                <SocialLink href="#" icon={<Github size={28} />} label="GitHub" />
                <SocialLink href="#" icon={<Code size={28} />} label="LeetCode" />
              </motion.div>

              <motion.a 
                href="mailto:contact@example.com"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-[#FF8C00] text-black p-6 rounded-3xl font-bold text-xl flex justify-between items-center hover:bg-[#ff9f2e] transition-colors cursor-pointer"
              >
                <span>Let&apos;s Connect!</span>
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-gray-500"
        >
          <ChevronDown size={32} />
        </motion.div>
      </header>


      
      <main className="max-w-4xl mx-auto px-6 py-24 space-y-24">
        
        <ResumeSection title="Education">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <h3 className="text-xl font-medium text-white">
              B.Sc. in Computer Science and Engineering
            </h3>
            <span className="text-[#FF8C00] font-mono mt-1 md:mt-0">2024 – 2028</span>
          </div>
          <p className="text-gray-400 text-lg">Yuan Ze University (元智大學)</p>
          <p className="text-gray-500 mt-2 text-sm">
            Focusing on foundational computer science principles, system architecture, and software development.
          </p>
        </ResumeSection>

        <ResumeSection title="Skills & Tools">
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-white mb-2">Languages & Tools</h4>
              <p className="text-gray-400 leading-relaxed">
                <span className="text-[#FF8C00] font-medium">Python</span>, 
                <span className="text-white mx-2">C++</span>, 
                <span className="text-white mx-2">C</span>, 
                <span className="text-white mx-2">JavaScript</span>
              </p>
            </div>
            <div className="h-px bg-gray-800 w-full" />
            <div>
              <h4 className="text-lg font-medium text-white mb-2">Core Competencies</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-1 marker:text-[#FF8C00]">
                <li>Data Structures & Algorithms</li>
                <li>Object-Oriented Programming (OOP)</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
        </ResumeSection>

        <ResumeSection title="Current Focus">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Academic & Self-Learning Goals</h3>
            <ul className="space-y-3">
              <ListItem>Deep diving into Data Structures and Algorithms through LeetCode.</ListItem>
              <ListItem>Building small-scale projects using Python to understand automation.</ListItem>
              <ListItem>Mastering low-level concepts in C/C++ for system programming.</ListItem>
            </ul>
          </div>
        </ResumeSection>

        <ResumeSection title="Interests">
          <div className="flex flex-wrap gap-3">
            {["Coffee", "Coding", "Gaming", "Riding Motorcycle"].map((item, i) => (
              <span key={i} className="px-4 py-2 border border-gray-700 rounded-full text-gray-400 text-sm hover:border-[#FF8C00] hover:text-[#FF8C00] transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
        </ResumeSection>

        <footer className="pt-20 pb-10 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Jettakarn Khamwai. Built with React & Tailwind.</p>
        </footer>

      </main>
    </div>
  );
}

function ResumeSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12"
    >
      <div className="md:col-span-4">
        <h2 className="text-[#FF8C00] font-bold tracking-widest uppercase text-sm md:sticky md:top-10">
          {title}
        </h2>
      </div>
      
      <div className="md:col-span-8">
        {children}
      </div>
    </motion.section>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white hover:text-[#FF8C00] hover:scale-110 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-gray-400">
      <span className="mt-1.5 w-1.5 h-1.5 bg-[#FF8C00] rounded-full shrink-0" />
      <span>{children}</span>
    </li>
  );
}