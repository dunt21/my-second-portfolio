import Image from "next/image";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import About from "./components/About";
import Service from "./components/Service";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Head />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
