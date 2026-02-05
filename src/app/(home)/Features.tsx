"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCard {
  title: string;
  description: string;
  link: string;
  linkText: string;
  image?: string;
  illustration?: React.ReactNode;
  bgColor: string;
  accentColor: string;
}

const ServiceCardComponent = ({ card }: { card: ServiceCard }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer"
      style={{
        background: card.bgColor,
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          : "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative blob that animates on hover */}
      <div
        className="absolute -right-10 -top-10 w-40 h-40 rounded-full transition-all duration-700 ease-out"
        style={{
          background: card.accentColor,
          opacity: 0.3,
          transform: isHovered ? "scale(1.5)" : "scale(1)",
        }}
      />
      <div
        className="absolute -right-5 -bottom-5 w-24 h-24 rounded-full transition-all duration-500 ease-out"
        style={{
          background: card.accentColor,
          opacity: 0.2,
          transform: isHovered ? "scale(1.3) translateX(-10px)" : "scale(1)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* Image or Illustration */}
        <div
          className="mb-6 w-full h-48 flex items-center justify-center transition-transform duration-500 rounded-2xl overflow-hidden"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        >
          {card.image ? (
            <Image
              src={card.image}
              alt={card.title}
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            card.illustration
          )}
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h3
            className="text-2xl font-bold mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-dark)",
            }}
          >
            {card.title}
          </h3>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "var(--text-dark)", opacity: 0.7 }}
          >
            {card.description}
          </p>
        </div>

        {/* CTA Link */}
        <Link
          href={card.link}
          className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300"
          style={{
            color: "var(--primary-purple)",
          }}
        >
          {card.linkText}
          <svg
            className="w-4 h-4 transition-transform duration-300"
            style={{
              transform: isHovered ? "translateX(4px)" : "translateX(0)",
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default function Features() {
  const services: ServiceCard[] = [
    {
      title: "Real-time emotional awareness",
      description:
        "As you write, the system notices shifts in tone and intensity — helping you recognize how your feelings change in the moment.",
      link: "/session/new",
      linkText: "Start writing",
      bgColor: "#FAF5EF",
      accentColor: "#C4B5FD",
      image: "/features/journal.png",
    },
    {
      title: "Early stress detection",
      description:
        "Instead of reacting late, it gently detects patterns that suggest rising stress or overwhelm before it becomes too much.",
      link: "/session/new",
      linkText: "Try it now",
      bgColor: "#F5F5F7",
      accentColor: "#DDD6FE",
      image: "/features/stress.png",
    },
    {
      title: "Gentle supportive guidance",
      description:
        "You receive calm, non-judgmental prompts designed to help you pause, reflect, and reset when you need it most.",
      link: "/session/new",
      linkText: "Experience it",
      bgColor: "#E8E0F0",
      accentColor: "#C4B5FD",
      image: "/features/awareness.png",
    },
    {
      title: "Private by design",
      description:
        "No accounts. No tracking. Nothing stored. Your words exist only for this session and then disappear completely.",
      link: "/session/new",
      linkText: "Stay private",
      bgColor: "#CCFBF1",
      accentColor: "#0D9488",
      illustration: (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* Shield */}
          <path
            d="M100 20 L150 40 L150 90 C150 120, 100 140, 100 140 C100 140, 50 120, 50 90 L50 40 Z"
            fill="white"
            stroke="#0D9488"
            strokeWidth="3"
          />
          {/* Lock icon */}
          <rect x="80" y="70" width="40" height="35" rx="5" fill="#0D9488" />
          <path
            d="M85 70 L85 55 C85 45, 115 45, 115 55 L115 70"
            fill="none"
            stroke="#0D9488"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="100" cy="85" r="5" fill="white" />
          <rect x="98" y="85" width="4" height="10" fill="white" />
          {/* Decorative elements */}
          <circle cx="40" cy="60" r="6" fill="#99F6E4" />
          <circle cx="160" cy="55" r="6" fill="#99F6E4" />
          <circle cx="35" cy="100" r="4" fill="#5EEAD4" />
          <circle cx="165" cy="95" r="4" fill="#5EEAD4" />
          {/* Checkmarks */}
          <path
            d="M30 75 L33 78 L38 72"
            fill="none"
            stroke="#0D9488"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M162 80 L165 83 L170 77"
            fill="none"
            stroke="#0D9488"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-6 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Floating tags */}
        <div
          className="absolute top-10 right-10 pill-tag float hidden md:block"
          style={{
            background: "var(--secondary-yellow)",
            color: "var(--text-dark)",
          }}
        >
          Awareness
        </div>
        <div
          className="absolute top-32 right-32 pill-tag float-delayed hidden md:block"
          style={{ background: "var(--accent-purple)", color: "white" }}
        >
          Support
        </div>

        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--primary-purple)" }}
          >
            Features
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-dark)",
            }}
          >
            Our{" "}
            <span
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--primary-purple)",
              }}
            >
              interactive
            </span>
            <br />
            features
          </h2>
          <p style={{ color: "var(--text-dark)", opacity: 0.7 }}>
            Tools designed to help you understand and navigate your emotional
            landscape with compassion and privacy.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCardComponent key={index} card={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
