import Image from"next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <Link href={"/"}>
                  <Image src="sunoAI.svg" alt="logo" width={110} height={80} />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="font-medium transition-colors duration-200"
                style={{
                  color: "var(--text-dark)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Home
              </a>
              <a
                href="#blog"
                className="font-medium transition-colors duration-200 hover:opacity-70"
                style={{
                  color: "var(--text-dark)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Blog
              </a>
              <a
                href="#about"
                className="font-medium transition-colors duration-200 hover:opacity-70"
                style={{
                  color: "var(--text-dark)",
                  fontFamily: "var(--font-body)",
                }}
              >
                About Us
              </a>
              <a
                href="#"
                className="font-medium transition-colors duration-200 hover:opacity-70"
                style={{
                  color: "var(--text-dark)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Content
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="font-medium"
                style={{ color: "var(--text-dark)" }}
              >
                Sign In
              </a>
              <button className="btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
  )
}
