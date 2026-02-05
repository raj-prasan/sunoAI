import { ButtonColorful } from "@/components/ui/button-colorful";
import createSession from "../../hooks/createSession";
export default function Hero() {
  return (
    <section
      className="relative py-16 px-6 overflow-hidden"
      style={{ background: "var(--bg-lavender)" }}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-10 w-64 h-64 blob-purple float opacity-20"></div>
        <div className="absolute bottom-0 left-10 w-48 h-48 blob-yellow float-delayed opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 blob-lavender float opacity-40"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <h1
              className="text-5xl lg:text-6xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-dark)",
              }}
            >
              A{" "}
              <span
                className="underline-script"
                style={{
                  fontFamily: "var(--font-script)",
                  color: "var(--primary-purple)",
                }}
              >
                quiet place
              </span>{" "}
              to{" "}
              <span
                className="underline-script"
                style={{
                  fontFamily: "var(--font-script)",
                  color: "var(--secondary-yellow)",
                }}
              >
                write and understand
              </span>
              <br />
              yourself
            </h1>
            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-dark)",
                opacity: 1.0,
              }}
            >
              Understand your thoughts before they overwhelm you.
            </p>

            {/* CTA Button */}
            <div>
              <ButtonColorful
                label="Enter your private space"
                onClick={createSession}
              />
            </div>
          </div>

          {/* Right: Calming Visual Elements */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Lotus Meditation */}
            <div
              className="absolute top-10 left-10 w-36 h-36 circle-frame float"
              style={{
                background:
                  "linear-gradient(135deg, rgba(221, 214, 254, 0.5) 0%, rgba(167, 139, 250, 0.3) 100%)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 70C50 70 30 60 30 40C30 25 40 20 50 20C60 20 70 25 70 40C70 60 50 70 50 70Z"
                    fill="#7C3AED"
                    opacity="0.7"
                  />
                  <path
                    d="M50 70C50 70 35 55 35 40C35 28 42 23 50 23C58 23 65 28 65 40C65 55 50 70 50 70Z"
                    fill="#A78BFA"
                  />
                  <circle cx="50" cy="40" r="8" fill="#FCD34D" />
                  <path
                    d="M25 65C25 65 35 60 50 60C65 60 75 65 75 65"
                    stroke="#7C3AED"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </div>

            {/* Journal/Writing */}
            <div
              className="absolute top-5 right-5 w-32 h-32 circle-frame float-delayed"
              style={{
                background:
                  "linear-gradient(135deg, rgba(252, 211, 77, 0.4) 0%, rgba(251, 191, 36, 0.3) 100%)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="25"
                    y="20"
                    width="45"
                    height="60"
                    rx="3"
                    fill="#7C3AED"
                    opacity="0.7"
                  />
                  <rect
                    x="28"
                    y="23"
                    width="39"
                    height="54"
                    rx="2"
                    fill="white"
                  />
                  <line
                    x1="35"
                    y1="35"
                    x2="60"
                    y2="35"
                    stroke="#FCD34D"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="35"
                    y1="45"
                    x2="55"
                    y2="45"
                    stroke="#A78BFA"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="35"
                    y1="55"
                    x2="58"
                    y2="55"
                    stroke="#DDD6FE"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path d="M60 60L75 75L72 78L57 63Z" fill="#FCD34D" />
                </svg>
              </div>
            </div>

            {/* Breathing Circle */}
            <div
              className="absolute bottom-20 left-5 w-40 h-40 circle-frame float"
              style={{
                background:
                  "linear-gradient(135deg, rgba(167, 139, 250, 0.3) 0%, rgba(124, 58, 237, 0.2) 100%)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="#7C3AED"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="28"
                    stroke="#A78BFA"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="20"
                    stroke="#DDD6FE"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <circle cx="50" cy="50" r="12" fill="#FCD34D" opacity="0.7">
                    <animate
                      attributeName="r"
                      values="12;16;12"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.7;0.9;0.7"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            </div>

            {/* Peace/Mindfulness Symbol */}
            <div
              className="absolute bottom-10 right-10 w-36 h-36 circle-frame float-delayed"
              style={{
                background:
                  "linear-gradient(135deg, rgba(252, 211, 77, 0.3) 0%, rgba(167, 139, 250, 0.3) 100%)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 20C50 20 40 35 40 50C40 65 50 80 50 80"
                    stroke="#7C3AED"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                  <path
                    d="M50 20C50 20 60 35 60 50C60 65 50 80 50 80"
                    stroke="#7C3AED"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                  <path
                    d="M25 45C25 45 35 48 50 48C65 48 75 45 75 45"
                    stroke="#FCD34D"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="32"
                    stroke="#A78BFA"
                    strokeWidth="3"
                    opacity="0.5"
                  />
                  <path
                    d="M35 35Q50 25 65 35"
                    stroke="#DDD6FE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </div>

            {/* Decorative gentle ripples */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="w-24 h-24 rounded-full"
                style={{
                  border: "2px solid var(--accent-purple)",
                  opacity: 0.2,
                }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
                style={{
                  border: "2px solid var(--light-purple)",
                  opacity: 0.15,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
