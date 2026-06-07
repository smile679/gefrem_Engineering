// import Hero from "@/src/pages/home/Hero";

import About from "@/pages/home/About";
import Hero from "@/pages/home/Hero";
import Services from "@/pages/home/Services";
import Projects from "@/pages/home/Projects";
import Featured from "@/pages/home/Featured";
// import Hero2 from "@/pages/home/Hero2";


const Home = () => {
   
    return <>
        <section className="w-full">
          <Hero/>
          {/* <Hero2 /> */}
          <About />
          <Services />
          {/* <Featured /> */}
          <Projects />
        </section>
    </>
}


export default Home;