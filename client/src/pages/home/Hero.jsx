import { Button } from "@/components/ui/button";
import SplitText from "@/components/motion/splitText";

const Hero = () => {

  //  const handleAnimationComplete = () => {
  //    console.log("All letters have animated!");
  //  };
   

    return (
      <>
        <section
          id="home"
          className="min-h-screen w-full bg-[url(@/assets/000.png)] bg-no-repeat bg-cover bg-right"
        >
          <div className="w-full max-w-6xl mx-auto h-full flex max-sm:flex-col items-center justify-center px-5 pt-30 md:pb-10">
            <div className="w-full h-full flex md:flex-1 flex-col justify-between text-white">
              <h3 className="w-fit text-sm flex justify-center items-center h-0.5 text-center bg-orange-200 text-gray-900 rounded-lg leading-none py-3 px-2">
                Geotechnical Investigation & Consultancy
              </h3>
              <h1 className=" text-shadow-gray-900 text-shadow-sm leading-tight m-0 p-0">
                <SplitText
                  text="Engineering"
                  className="text-6xl sm:text-7xl font-bold leading-tight text-gray-900 max-sm:text-white"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="start"
                  // onLetterAnimationComplete={handleAnimationComplete}
                  showCallback
                />
              </h1>
              <h1 className="text-shadow-orange-700 text-shadow-sm">
                <SplitText
                  text="Confidence."
                  className="text-6xl sm:text-7xl font-bold leading-tight text-orange-500"
                  delay={50}
                  duration={1.25}
                  ease="bounce.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="start"
                  // onLetterAnimationComplete={handleAnimationComplete}
                  showCallback
                />
              </h1>
              <h1 className=" text-shadow-gray-900 text-shadow-sm">
                <SplitText
                  text="Building Futures."
                  className="text-6xl sm:text-6xl font-bold leading-tight text-gray-900 max-sm:text-white"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="start"
                  // onLetterAnimationComplete={handleAnimationComplete}
                  showCallback
                />
              </h1>
              <p
                className="w-full md:max-w-md my-3 text-xl md:text-md text-center font-bold max-sm:tracking-widest
               max-sm:text-white text-gray-900 leading-relaxed max-sm:text-shadow-gray-600 max-sm:text-shadow-sm"
              >
                We provide reliable geotechnical investigations, soil testing,
                and professional engineering consultancy services that help
                projects start on strong foundations.
              </p>
              <div className="w-full flex max-sm:flex-col items-center gap-5 my-5">
                <Button className="max-sm:w-full px-10 py-5 bg-orange-400 text-white hover:bg-orange-500 cursor-pointer transition-all duration-300 rounded-md">
                  Projects
                </Button>
                <Button
                  variant="outline"
                  className="max-sm:w-full px-10 py-5 bg-transparent font-bold text-white border-[2px] backdrop-blur-sm border-white cursor-pointer transition-all duration-300 rounded-md"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="hidden relative w-full md:flex md:flex-1 justify-center items-center">
              <div className="absolute top-0 -left-5 lg:-left-10 bg-white shadow-xl rounded-2xl p-3 hidden md:block">
                <p className="text-sm text-gray-500">Soil Investigation</p>
                <h4 className="font-bold text-xl text-gray-900">
                  Professional Testing
                </h4>
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-10 right-0 bg-white shadow-xl rounded-2xl p-3 hidden md:block">
                <p className="text-sm text-gray-500">Engineering Consultancy</p>
                <h4 className="font-bold text-xl text-[#EE6123]">
                  Trusted Solutions
                </h4>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero;