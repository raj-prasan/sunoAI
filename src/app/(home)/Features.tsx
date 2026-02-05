

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

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 - Fun Quiz */}
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
                  Fun Quiz
                </h3>
                <p style={{ color: "var(--text-dark)", opacity: 0.8 }}>
                  Test your understanding with a short but fun quizzes!
                </p>
              </div>
            </div>

            {/* Feature 2 - Creative Activities */}
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
                  Creative Activities
                </h3>
                <p className="text-purple-100">
                  Discover enjoyable activities such as coloring, running, and
                  playing games.
                </p>
              </div>
            </div>

            {/* Feature 3 - Learn with Games */}
            <div
              className="card-feature relative"
              style={{ background: "var(--secondary-yellow)" }}
            >
              <div className="absolute top-4 right-4 w-20 h-20 dotted-pattern rounded-full"></div>

              <div className="mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(255, 255, 255, 0.6)" }}
                >
                  <span className="text-3xl">🎮</span>
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-dark)",
                  }}
                >
                  Learn with Games
                </h3>
                <p style={{ color: "var(--text-dark)", opacity: 0.8 }}>
                  Learn something new while your kids playing games.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
