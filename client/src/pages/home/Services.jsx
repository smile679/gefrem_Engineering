import Reveal from "@/components/motion/Reveal";
import {
  Microscope,
  Layers,
  MountainSnow,
  HardHat,
  FlaskConical,
  FileSearch,
  ShieldAlert,
  Landmark,
} from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Geotechnical Investigation",
    amharic: "የጂኦቴክኒካል ምርመራ",
    description:
      "Comprehensive site investigation using borehole drilling, field testing, and subsurface analysis.",
    highlights: ["Borehole Drilling", "In-Situ Testing", "3D Ground Modelling"],
  },
  {
    icon: Landmark,
    title: "Foundation Design & Analysis",
    amharic: "የፋውንዴሽን ዲዛይን እና ትንታኔ",
    description:
      "Design and assessment of shallow and deep foundations for all structure types.",
    highlights: [
      "Driven & Bored Piles",
      "Raft Foundations",
      "Ground Improvement",
    ],
  },
  {
    icon: MountainSnow,
    title: "Slope Stability & Earthworks",
    amharic: "የኮረብታ መረጋጋት እና የምድር ሥራ",
    description:
      "Engineering solutions for slopes, retaining systems, embankments, and landslide-prone areas.",
    highlights: [
      "Stability Assessment",
      "Retaining Structures",
      "Embankment Design",
    ],
  },
  {
    icon: HardHat,
    title: "Construction Monitoring",
    amharic: "የግንባታ ክትትል",
    description:
      "Site supervision and quality control to ensure construction meets engineering requirements.",
    highlights: ["Site Supervision", "QA / QC Testing", "Compliance Reporting"],
  },
  {
    icon: FlaskConical,
    title: "Laboratory Testing",
    amharic: "የላቦራቶሪ ሙከራ",
    description:
      "Professional soil and rock testing services following international standards.",
    highlights: [
      "Shear Strength Tests",
      "Consolidation Tests",
      "Chemical Analysis",
    ],
  },
  {
    icon: Layers,
    title: "Pavement & Road Engineering",
    amharic: "የመንገድ እና ፓቬምንት ምህንድስና",
    description:
      "Road and pavement design supported by materials testing and subgrade evaluation.",
    highlights: ["Subgrade Assessment", "Pavement Design", "Materials Testing"],
  },
  {
    icon: ShieldAlert,
    title: "Environmental & Contamination",
    amharic: "የአካባቢ እና የብክለት ጥናት",
    description:
      "Environmental assessments, contamination studies, and remediation planning.",
    highlights: [
      "Phase I & II Assessments",
      "Risk Evaluation",
      "Remediation Design",
    ],
  },
  {
    icon: FileSearch,
    title: "Expert Witness & Advisory",
    amharic: "የቴክኒክ አማካሪ አገልግሎት",
    description:
      "Independent technical review and specialist advisory services for complex projects.",
    highlights: [
      "Independent Review",
      "Dispute Resolution",
      "Failure Investigation",
    ],
  },
];

const Services = () => {
  return (
    <section id="service" className="w-full px-5 bg-[#F7F6F3]">
      <div className="max-w-6xl mx-auto">
        {/* Featured Service */}
        <div className="mb-10">
          <Reveal>
            <div className="bg-[#EE6123] border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-[#FFF0E8] flex items-center justify-center shrink-0">
                  <Microscope size={30} className="text-[#EE6123]" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Core Service
                  </span>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">
                    Geotechnical Investigation
                  </h3>

                  <p className="text-white mt-4 leading-relaxed max-w-3xl">
                    We provide comprehensive site investigations using advanced
                    drilling, field testing, and subsurface analysis to deliver
                    reliable ground data for safe and cost-effective engineering
                    design.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-5">
                    {[
                      "Borehole Drilling",
                      "In-Situ Testing",
                      "Ground Investigation",
                      "Site Characterisation",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full bg-[#FFF0E8] text-[#EE6123] text-sm font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
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
              Our Expertise
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Engineering Solutions From
              <span className="text-[#EE6123]"> Ground Investigation</span> to
              Construction Delivery
            </h2>

            <p className="mt-5 text-gray-500 leading-relaxed">
              Delivering geotechnical investigations, foundation engineering,
              laboratory testing, construction supervision, and technical
              consultancy services for projects of every scale.
            </p>

            <p className="mt-3 text-sm font-semibold text-[#EE6123]" lang="am">
              ጥራት፣ አመኔታ እና ብቃት — የእኛ መሠረት ነው።
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
          {services.map(
            ({ icon: Icon, title, amharic, description, highlights }) => (
              <Reveal>
                <div
                  key={title}
                  className="
                  group
                  bg-white
                  rounded-2xl
                  border
                  border-gray-200
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:border-[#EE6123]/30
                "
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div
                        className="
                      w-14 h-14
                      shrink-0
                      rounded-xl
                      bg-[#FFF0E8]
                      flex items-center justify-center
                    "
                      >
                        <Icon size={26} className="text-[#EE6123]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 leading-tight">
                          {title}
                        </h3>

                        <p
                          lang="am"
                          className="text-xs text-[#EE6123] font-semibold mt-1"
                        >
                          {amharic}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="w-full flex-1">
                        <p className="text-sm text-gray-500 leading-relaxed mt-3">
                          {description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {highlights.map((item) => (
                            <span
                              key={item}
                              className="
                            px-3 py-1
                            rounded-full
                            bg-gray-100
                            text-gray-600
                            text-xs
                            font-medium
                          "
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ),
          )}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-20">
            <div className="bg-[#EE6123] rounded-3xl p-10 md:p-14 text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white">
                Ready to Build on a Solid Foundation?
              </h3>

              <p className="text-white/80 mt-4 max-w-2xl mx-auto">
                Partner with Gefrem Engineering for reliable site
                investigations, foundation solutions, construction supervision,
                and engineering consultancy tailored to your project.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="#contact"
                  className="
                  bg-white
                  text-[#EE6123]
                  px-6 py-3
                  rounded-xl
                  font-semibold
                  hover:-translate-y-1
                  transition-all
                "
                >
                  Request Consultation
                </a>

                <a
                  href="#projects"
                  className="
                  border
                  border-white/30
                  text-white
                  px-6 py-3
                  rounded-xl
                  font-semibold
                  hover:bg-white/10
                  transition-all
                "
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
