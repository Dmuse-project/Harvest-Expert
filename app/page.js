// import Image from "next/image";
// import styles from "./page.module.css";

import Hero from "@/components/hero";
import Services from "@/components/service";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

 

export default function Home () {

  return <>
  <main>
    <Navbar />
    <Hero />
    <Services />
    <About />
    <Testimonials />
    <CTA />
    <Footer />
  </main>
  
  </>
}