
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Blog from "./Blog";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Blog/>
      <Footer/>
    </div>
  );
}
