
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Hero/>
      <About/>

      {/* Interactive Features Section */}
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

      {/* Blog Section */}
      <section
        id="blog"
        className="py-20 px-6 relative overflow-hidden"
        style={{ background: "var(--bg-lavender)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute bottom-10 right-10 w-32 h-32 blob-yellow float opacity-30"></div>

          <div className="mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-dark)",
              }}
            >
              Read our{" "}
              <span
                className="underline-script"
                style={{
                  fontFamily: "var(--font-script)",
                  color: "var(--primary-purple)",
                }}
              >
                blog
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div
                className="h-48"
                style={{
                  background:
                    "linear-gradient(135deg, #DDD6FE 0%, #A78BFA 100%)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  📖
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-dark)",
                  }}
                >
                  Learning with Games? Why not?
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-dark)", opacity: 0.7 }}
                >
                  Explore fun games that boost learning and keep kids engaged.
                </p>
                <button
                  className="flex items-center gap-2 font-semibold"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div
                className="h-48"
                style={{
                  background:
                    "linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  🎨
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-dark)",
                  }}
                >
                  10 Learning Game Ideas
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-dark)", opacity: 0.7 }}
                >
                  Discover fun and educational activities for your kids.
                </p>
                <button
                  className="flex items-center gap-2 font-semibold"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div
                className="h-48"
                style={{
                  background:
                    "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  🎯
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-dark)",
                  }}
                >
                  Fun Activities for Kids
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-dark)", opacity: 0.7 }}
                >
                  Learn how to keep kids active and happy with these ideas.
                </p>
                <button
                  className="flex items-center gap-2 font-semibold"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6"
        style={{ background: "var(--primary-purple)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <span
                    className="font-bold text-xl"
                    style={{ color: "var(--primary-purple)" }}
                  >
                    W
                  </span>
                </div>
                <span
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  WonderKids
                </span>
              </div>
              <p className="text-purple-200 text-sm">
                Making learning fun and engaging for every child.
              </p>
            </div>
            <div>
              <h4
                className="font-bold mb-4 text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Product
              </h4>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Activities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Games
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className="font-bold mb-4 text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Resources
              </h4>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className="font-bold mb-4 text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Legal
              </h4>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-600 pt-8 text-center text-purple-200 text-sm">
            © 2026 WonderKids. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
