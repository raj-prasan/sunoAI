import Image from "next/image";


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
              <Image
                src="/blog1.png"
                alt="Blog Post 1"
                width={500}
                height={300}
              />
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-dark)",
                  }}
                >
                  Why sadness doesn’t always mean depression
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-dark)", opacity: 0.7 }}
                >
                  Why It Matters & How to Tell Them Apart
                </p>
                <a href="https://blog.opencounseling.com/depression-vs-sadness/" target="_blank" rel="noopener noreferrer">
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
                </a>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/blog2.webp"
                alt="Blog Post 1"
                width={500}
                height={300}
              />
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-dark)",
                  }}
                >
                  Social media and comparison fatigue
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-dark)", opacity: 0.7 }}
                >
                  Signs, Symptoms, and How to Overcome It
                </p>
                <a href="https://medium.com/@mariaisquixotic/social-media-fatigue-signs-symptoms-and-how-to-overcome-it-4e91eb80a642" target="_blank" rel="noopener noreferrer">
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
                </a>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/blog3.webp"
                alt="Blog Post 1"
                width={500}
                height={300}
              />
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-dark)",
                  }}
                >
                  When should you seek professional help?
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-dark)", opacity: 0.7 }}
                >
                  Why is it important to seek help?
                </p>
                <a href="https://mpowerminds.com/blog/When-is-the-right-time-to-seek-help-Why-is-it-important-to-seek-help#:~:text=The%20American%20Psychological%20Association%20suggests,ourselves%20or%20others%20in%20anyway">
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
