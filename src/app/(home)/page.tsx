
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Blog from "./Blog";
import Footer from "./Footer";
import Steps from "./Steps";
import FloatingChatButton from "../session/[id]/FloatingChatButton";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Steps/>
      <Blog/>
      <Footer/>
      <FloatingChatButton userId="SUNO AI" userAvatar="https://res.cloudinary.com/dby6qs2rb/image/upload/v1770360777/output-onlinepngtools_q6qbpp.png" />
    </div>
  );
}
