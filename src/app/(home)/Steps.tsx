"use client";

export default function Steps() {
  const steps = [
    {
      number: "1",
      title: "Write your thoughts",
      description:
        "Open your private journal and express how you're feeling today. No judgment, just you.",
    },
    {
      number: "2",
      title: "Get real-time insights",
      description:
        "Our AI analyzes your emotions as you type, giving you instant awareness of your feelings.",
    },
    {
      number: "3",
      title: "Track your journey",
      description:
        "Watch your emotional patterns evolve over time and gain deeper self-understanding.",
    },
  ];

  return (
    <section
      className="py-20 px-6 md:px-12"
      style={{
        background:
          "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p
          className="text-sm font-medium tracking-widest uppercase mb-4"
          style={{ color: "var(--secondary-yellow)" }}
        >
          How it works
        </p>

        {/* Main Heading */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 max-w-2xl leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Understand your emotions with a{" "}
          <span style={{ color: "var(--secondary-yellow)" }}>
            journal that listens.
          </span>
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {/* Large Background Number */}
              <span
                className="absolute top-4 left-6 text-8xl md:text-9xl font-bold select-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "rgba(255, 255, 255, 0.06)",
                  lineHeight: 1,
                }}
              >
                {step.number}
              </span>

              {/* Content */}
              <div className="relative z-10 mt-20">
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255, 255, 255, 0.6)" }}
                >
                  {step.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 60%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="/session/new"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--secondary-yellow)",
              color: "var(--text-dark)",
            }}
          >
            Enter your space
            <svg
              className="w-5 h-5"
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
          </a>
        </div>
      </div>
    </section>
  );
}
