export default function Features() {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Floating tags */}
        <div
          className="absolute top-10 right-10 pill-tag float"
          style={{
            background: "var(--secondary-yellow)",
            color: "var(--text-dark)",
          }}
        >
          Family
        </div>
        <div
          className="absolute top-32 right-32 pill-tag float-delayed"
          style={{ background: "var(--accent-purple)", color: "white" }}
        >
          Engage
        </div>

        <div className="mb-12">
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
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature 1 - Real-time emotional awareness */}
          <div
            className="card-feature wave-shape"
            style={{ background: "var(--light-purple)" }}
          >
            <div className="mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "rgba(255, 255, 255, 0.6)" }}
              >
                <span className="text-3xl">📝</span>
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-dark)",
                }}
              >
                Real-time emotional awareness
              </h3>
              <p style={{ color: "var(--text-dark)", opacity: 0.8 }}>
                As you write, the system notices shifts in tone and intensity —
                helping you recognize how your feelings change in the moment.
              </p>
            </div>
          </div>

          {/* Feature 2 - Early stress detection */}
          <div
            className="card-feature relative overflow-hidden"
            style={{ background: "var(--primary-purple)" }}
          >
            {/* Wave decoration */}
            <div
              className="absolute top-0 right-0 w-32 h-32"
              style={{
                background: "var(--accent-purple)",
                borderRadius: "0 0 0 100%",
              }}
            ></div>

            <div className="relative z-10 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "rgba(255, 255, 255, 0.2)" }}
              >
                <span className="text-3xl">✨</span>
              </div>
              <h3
                className="text-2xl font-bold mb-3 text-white"
                style={{ fontFamily: "var(--font-script)" }}
              >
                Early stress detection
              </h3>
              <p className="text-purple-100">
                Instead of reacting late, it gently detects patterns that
                suggest rising stress or overwhelm.
              </p>
            </div>
          </div>

          {/* Feature 3 - Gentle supportive guidance */}
          <div
            className="card-feature relative overflow-hidden"
            style={{ background: "var(--secondary-yellow)" }}
          >
            <div className="absolute top-4 right-4 w-20 h-20 dotted-pattern rounded-full"></div>

            <div className="mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "rgba(255, 255, 255, 0.6)" }}
              >
                <span className="text-3xl">💫</span>
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-dark)",
                }}
              >
                Gentle supportive guidance
              </h3>
              <p style={{ color: "var(--text-dark)", opacity: 0.8 }}>
                You receive calm, non-judgmental prompts designed to help you
                pause, reflect, and reset.
              </p>
            </div>
          </div>

          {/* Feature 4 - Private by design */}
          <div
            className="card-feature relative overflow-hidden"
            style={{ background: "var(--primary-purple)" }}
          >
            <div className="absolute top-4 right-4 w-20 h-20 dotted-pattern rounded-full opacity-30"></div>
            <div
              className="absolute top-0 right-0 w-32 h-32"
              style={{
                background: "var(--accent-purple)",
                borderRadius: "0 0 0 100%",
              }}
            ></div>
            <div className="relative z-10 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "rgba(255, 255, 255, 0.2)" }}
              >
                <span className="text-3xl">🔒</span>
              </div>
              <h3
                className="text-2xl font-bold mb-3 text-white"
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                Private by design
              </h3>
              <p className="text-purple-100">
                No accounts. No tracking. Nothing stored. Your words exist only
                for this session and then disappear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
