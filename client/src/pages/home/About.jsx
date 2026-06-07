import about_img from "@/assets/about_img.png";
import CountUp from "@/components/motion/CountUp";
import Reveal from "@/components/motion/Reveal";
import { Construction, Shapes, ShieldCheck, UserStar } from "lucide-react";

const features = [
  {
    icon: UserStar,
    title: "Licensed Engineers",
    sub: "ፈቃድ ያላቸው መሐንዲሶች",
    description:
      "Our team holds full government certifications across geotechnical, structural, and civil disciplines.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Compliance",
    sub: "የደህንነት ተጣጣሚነት",
    description:
      "Zero-incident culture backed by ISO 45001 safety standards enforced on every active project site.",
  },
  {
    icon: Shapes,
    title: "Modern Equipment",
    sub: "ዘመናዊ መሣሪያዎች",
    description:
      "We invest in the latest drilling and testing machinery to deliver precise, efficient ground investigation.",
  },
  {
    icon: Construction,
    title: "Sustainable Construction",
    sub: "ዘላቂ ግንባታ",
    description:
      "Eco-conscious building practices that reduce site waste and meet international green certification standards.",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 18, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Expert Engineers" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <section className="w-full py-10 md:py-20 px-5 bg-[#F7F6F3]" id="about">
      {/* ── Section heading ── */}
      <Reveal>
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#EE6123] bg-[#FFF0E8] border border-[#EE6123]/20 px-3 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE6123]" />
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            About <span className="text-[#EE6123]">Gefrem Engineering</span>
          </h2>
        </div>
      </Reveal>

      {/* ── Main content ── */}
      <div className="w-full max-w-6xl mx-auto flex flex-row-reverse max-md:flex-col-reverse items-center gap-10">
        {/* ── Left col: image + stats ── */}
        <div className="w-full flex flex-1 flex-col justify-between gap-y-5">
          <Reveal>
            <div className="relative">
              <img
                src={about_img}
                alt="Gefrem Engineering project site"
                className="w-full h-full object-cover object-right rounded-xl shadow-lg shadow-orange-500/10"
              />
            </div>
          </Reveal>

          {/* Stats row */}
          <Reveal>
            <div className="grid grid-cols-4 gap-3 py-4 border-y border-gray-200">
              {stats.map(({ value, suffix, label }) => (
                <div
                  key={label}
                  className="text-center flex flex-col items-center justify-center"
                >
                  <p className="text-2xl font-extrabold text-[#EE6123] flex items-baseline gap-0.5">
                    <CountUp
                      from={0}
                      to={value}
                      separator=","
                      direction="up"
                      duration={3}
                      className="count-up-text"
                      delay={0}
                    />
                    <span>{suffix}</span>
                  </p>
                  <p className="text-sm font-semibold text-gray-500 mt-1 leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Right col: text + feature cards ── */}
        <div className="flex flex-col gap-6 flex-1">
          <div>
            <Reveal>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug tracking-tight">
                Engineering the Ground{" "}
                <span className="text-[#EE6123]">Beneath Your Vision</span>
              </h3>
            </Reveal>
            <Reveal>
              <p className="text-sm font-medium text-gray-500 mt-4 leading-relaxed">
                Gefrem Engineering is a trusted geotechnical and construction
                consultancy delivering world-class site investigation,
                foundation design, and construction supervision. With a
                commitment to technical rigour, safety, and modern engineering,
                we build certainty beneath every structure — wherever in the
                world you need to build.
              </p>
            </Reveal>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, sub, description }) => (
              <Reveal>
                <div
                  key={title}
                  className="group flex flex-col gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm
                           hover:border-[#EE6123]/30 hover:shadow-md hover:shadow-orange-100 hover:-translate-y-0.5
                           transition-all duration-200 cursor-default relative overflow-hidden"
                >
                  {/* top accent bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#EE6123] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-xl" />

                  <div className="flex max-sm:flex-col gap-4 items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFF0E8] shrink-0">
                      <Icon className="text-[#EE6123]" size={20} />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold text-sm text-gray-900">{title}</p>
                      <p
                        className="text-xs text-[#EE6123] font-semibold mt-0.5"
                        lang="am"
                      >
                        {sub}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-gray-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA row */}
          <Reveal>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#EE6123] text-white text-sm font-semibold px-5 py-2.5 rounded-lg
                         hover:bg-[#C04D16] hover:-translate-y-0.5 transition-all duration-200 shadow-md shadow-orange-200"
              >
                Get in Touch
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white text-gray-700 text-sm font-medium px-5 py-2.5 rounded-lg
                         border border-gray-200 hover:border-[#EE6123]/30 hover:text-[#EE6123] hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;