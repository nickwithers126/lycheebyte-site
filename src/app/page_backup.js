"use client";
import { useState } from "react";


export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="scroll-smooth">
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center px-6 py-12"
        >
          {/* Main content container */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
            <div className="relative w-full md:w-1/2 max-w-md">
              <img
                src="/logo.png"
                alt="LycheeByte Logo"
                className="w-full h-auto object-contain mask-fade-bottom-left"
              />
            </div>


            {/* Title and subtitle */}
            <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
              <h1 className="text-8xl font-bold text-gray-900 leading-none">LycheeByte</h1>
              <p className="text-5xl text-gray-400 text-right mt-2">(Labs)</p>
            </div>
          </div>

          {/* Quote at bottom */}
          <div className="mt-16 text-center w-full">
            <p className="text-3xl text-gray-600 italic px-4 max-w-2xl mx-auto">
              “Accelerating innovation by uniting process, product, and business development”
            </p>
          </div>
        </section>

        <Section id="core" title="Core Competencies" />
        <Section id="services" title="Professional Services" />
        <Section id="strategies" title="Development Strategies" />
        <Section id="projects" title="Projects" />
        <Section id="about" title="About Us" />
        <Section id="contact" title="Contact" />
      </main>
    </div>
  );
}

function Section({ id, title }) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center border-b border-gray-200 p-8"
    >
      <h1 className="text-4xl font-semibold">{title}</h1>
    </section>
  );
}

function Navbar() {
  const links = [
    { id: "home", label: "Home" },
    { id: "core", label: "Competencies" },
    { id: "services", label: "Services" },
    { id: "strategies", label: "Strategies" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-6 z-50 w-full px-4">
      <div className="bg-white border shadow-md rounded-full mx-auto w-full max-w-6xl flex items-center justify-between px-8 h-14">
        <a href="#home" className="text-lg font-bold text-gray-800 hover:text-black whitespace-nowrap">
          LycheeByte
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-black whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden mt-2 bg-white border rounded-xl shadow-md w-full max-w-6xl mx-auto p-4 space-y-2 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}