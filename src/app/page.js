import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="mt-30">
  <Hero />
  <About/>
  <Projects/>
  <Contact/>
</div>
  );
}
