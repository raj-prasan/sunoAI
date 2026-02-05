

export default function Blog() {
  return (
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
  )
}
