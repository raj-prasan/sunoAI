import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-50">
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
                fontFamily: "var(--font-heading)",
              }}
            >
              Home
            </a>
            <a
              href="#blog"
              className="font-medium transition-colors duration-200 hover:opacity-70"
              style={{
                color: "var(--text-dark)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Blog
            </a>
            <a
              href="#about"
              className="font-medium transition-colors duration-200 hover:opacity-70"
              style={{
                color: "var(--text-dark)",
                fontFamily: "var(--font-heading)",
              }}
            >
              About Us
            </a>
            <a
              href="#"
              className="font-medium transition-colors duration-200 hover:opacity-70"
              style={{
                color: "var(--text-dark)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Content
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:1800-599-0019">
              <Button className="bg-red-500 text-white">Get Immediate Help</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
