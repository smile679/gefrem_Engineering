import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

// Replace with your actual images
import project1 from "@/assets/bg_01.png";
import project2 from "@/assets/cons11.png";
import project3 from "@/assets/cons33.png";

const projects = [
  {
    title: "Commercial Tower Foundation Study",
    category: "Geotechnical Investigation",
    image: project1,
    description:
      "Comprehensive geotechnical investigation and foundation design for a multi-storey commercial development, including borehole drilling and laboratory testing.",
    tags: ["Borehole Drilling", "Soil Testing", "Foundation Design"],
  },
  {
    title: "Regional Highway Engineering",
    category: "Road & Pavement Engineering",
    image: project2,
    description:
      "Subgrade investigation, pavement design, and materials testing for a major highway infrastructure project.",
    tags: ["Road Design", "CBR Testing", "Pavement Analysis"],
  },
  {
    title: "Slope Stabilisation Project",
    category: "Slope Stability",
    image: project3,
    description:
      "Assessment and remediation design for unstable terrain, including retaining structures and drainage improvements.",
    tags: ["Slope Analysis", "Earthworks", "Retaining Walls"],
  },
];

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="w-full py-16 md:py-24 px-5 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <span
              className="
                inline-flex items-center gap-2
                px-4 py-1.5
                rounded-full
                bg-[#FFF0E8]
                text-[#EE6123]
                text-xs
                font-bold
                uppercase
                tracking-widest
              "
            >
              <span className="w-2 h-2 rounded-full bg-[#EE6123]" />
              Featured Projects
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Engineering Success
              <span className="text-[#EE6123]"> Across Every Project</span>
            </h2>

            <p className="mt-5 text-gray-500 leading-relaxed">
              Explore selected projects demonstrating our expertise in
              geotechnical investigation, foundation engineering, construction
              supervision, and infrastructure development.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="font-bold text-[#EE6123]">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </div>

            <button
              onClick={scrollPrev}
              className="
                w-12 h-12
                rounded-full
                border border-gray-200
                flex items-center justify-center
                hover:border-[#EE6123]
                hover:text-[#EE6123]
                transition-all
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={scrollNext}
              className="
                w-12 h-12
                rounded-full
                border border-gray-200
                flex items-center justify-center
                hover:border-[#EE6123]
                hover:text-[#EE6123]
                transition-all
              "
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {projects.map((project, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div
                  className="
                    bg-white
                    rounded-3xl
                    border border-gray-200
                    overflow-hidden
                    shadow-sm
                  "
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-[300px] md:h-[450px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute top-5 left-5">
                        <span
                          className="
                            px-4 py-2
                            rounded-full
                            bg-white/95
                            text-[#EE6123]
                            text-xs
                            font-bold
                          "
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <span className="text-[#EE6123] font-semibold text-sm">
                        Project Showcase
                      </span>

                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 leading-tight">
                        {project.title}
                      </h3>

                      <p className="mt-6 text-gray-500 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mt-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              px-4 py-2
                              rounded-full
                              bg-gray-100
                              text-gray-600
                              text-sm
                              font-medium
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-10">
                        <a
                          href="#contact"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            bg-[#EE6123]
                            text-white
                            px-6 py-3
                            rounded-xl
                            font-semibold
                            hover:-translate-y-1
                            transition-all
                          "
                        >
                          Discuss Similar Project
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  selectedIndex === index
                    ? "w-10 bg-[#EE6123]"
                    : "w-2 bg-gray-300"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;