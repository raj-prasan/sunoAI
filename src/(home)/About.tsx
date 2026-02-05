

export default function About() {
  return (
    <section
        id="about"
        className="relative py-20 px-6 overflow-hidden"
        style={{ background: "var(--primary-purple)" }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Decorative yellow blob */}
          <div className="absolute -top-10 -left-10 w-40 h-40 blob-yellow opacity-40"></div>

          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We aim to help children{" "}
              <span
                style={{
                  fontFamily: "var(--font-script)",
                  color: "var(--secondary-yellow)",
                }}
              >
                discover the joy of creative
              </span>
              <br />
              learning and grow into well-rounded individuals.
            </h2>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div
                className="w-28 h-28 mx-auto circle-frame mb-3"
                style={{
                  background:
                    "linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  👨‍🏫
                </div>
              </div>
              <h4
                className="text-white font-bold mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Kratos Watson
              </h4>
              <p className="text-purple-200 text-sm">Creative Director</p>
            </div>
            <div className="text-center">
              <div
                className="w-28 h-28 mx-auto circle-frame mb-3"
                style={{
                  background:
                    "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  👩‍🏫
                </div>
              </div>
              <h4
                className="text-white font-bold mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Annie Wilson
              </h4>
              <p className="text-purple-200 text-sm">Growing Teacher</p>
            </div>
            <div className="text-center">
              <div
                className="w-28 h-28 mx-auto circle-frame mb-3"
                style={{
                  background:
                    "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  👨‍💻
                </div>
              </div>
              <h4
                className="text-white font-bold mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Jacob Jones
              </h4>
              <p className="text-purple-200 text-sm">Math Wizard</p>
            </div>
            <div className="text-center">
              <div
                className="w-28 h-28 mx-auto circle-frame mb-3"
                style={{
                  background:
                    "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  👩‍🎨
                </div>
              </div>
              <h4
                className="text-white font-bold mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Savannah Nguyen
              </h4>
              <p className="text-purple-200 text-sm">Reading Teacher</p>
            </div>
          </div>
        </div>
      </section>
  )
}
