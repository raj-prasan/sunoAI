import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer
        className="py-12 px-6"
        style={{ background: "var(--primary-purple)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3">
              <div>
                <Link href={"/"}>
                  <Image src="sunoAI.svg" alt="logo" width={110} height={80} />
                </Link>
              </div>
            </div>
              <p className="text-purple-200 text-sm">
                Awareness, not diagnosis. Support, not surveillance
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
            © 2026 SunoAI. All rights reserved.
          </div>
        </div>
      </footer>
  )
}
