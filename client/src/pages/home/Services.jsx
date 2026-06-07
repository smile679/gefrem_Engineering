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
      "Comprehensive site characterisation using borehole drilling, in-situ testing, and 3D ground modelling to define subsurface conditions for safe design.",
    highlights: ["Borehole Drilling", "In-Situ Testing", "3D Ground Modelling"],
  },
  {
    icon: Landmark,
    title: "Foundation Design & Analysis",
    amharic: "የፋውንዴሽን ዲዛይን እና ትንታኔ",
    description:
      "Deep and shallow foundation design including driven piles, bored piles, raft foundations, and ground improvement schemes for all structure types.",
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
      "Stability assessment, remediation design, and earthworks specification for embankments, cuttings, retaining structures, and landslide-prone terrain.",
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
      "On-site geotechnical supervision and testing during construction — ensuring ground conditions match design assumptions throughout the entire build.",
    highlights: ["Site Supervision", "QA / QC Testing", "Compliance Reporting"],
  },
  {
    icon: FlaskConical,
    title: "Laboratory Testing",
    amharic: "የላቦራቶሪ ሙከራ",
    description:
      "Accredited soil and rock testing covering particle size, shear strength, consolidation, compaction, and chemical analysis to ISO 17892 standards.",
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
      "Subgrade assessment, pavement design, and materials testing for road, highway, and airfield projects across all traffic loading classifications.",
    highlights: ["Subgrade Assessment", "Pavement Design", "Materials Testing"],
  },
  {
    icon: ShieldAlert,
    title: "Environmental & Contamination",
    amharic: "የአካባቢ እና የብክለት ጥናት",
    description:
      "Phase I and Phase II environmental assessments, contamination risk evaluation, and remediation strategies aligned with international standards.",
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
      "Independent technical review, dispute resolution support, and expert witness services for geotechnical claims and failure investigations.",
    highlights: [
      "Independent Review",
      "Dispute Resolution",
      "Failure Investigation",
    ],
  },
];

const Services = () => {
  return (
    <section
      className="w-full py-10 md:py-20 px-5 bg-[#EE6123] relative overflow-hidden"
      id="service"
    >
      {/* ambient texture circles */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5" />

      {/* ── Header ── */}
      <div className="text-center mb-12 relative z-10">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#EE6123] bg-white px-3 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EE6123]" />
          What We Do
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Our Services
        </h2>
        <p className="text-sm font-medium text-white/70 mt-4 max-w-xl mx-auto leading-relaxed">
          From initial site investigation through to final design sign-off,
          Gefrem Engineering delivers{" "}
          <span className="text-white font-semibold">
            full-lifecycle geotechnical
          </span>{" "}
          consultancy on every project.
        </p>
        <p className="text-base text-white/60 mt-2 font-bold" lang="am">
          ጥራት፣ አመኔታ እና ብቃት — የእኛ መሠረት ነው፡፡
        </p>
      </div>

      {/* ── Services grid ── */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {services.map(
          ({ icon: Icon, title, amharic, description, highlights }) => (
            <div
              key={title}
              className="group relative flex flex-col gap-4 p-5 rounded-xl
                       bg-white/10 border border-white/20 backdrop-blur-sm
                       hover:bg-white hover:-translate-y-1.5
                       hover:shadow-xl hover:shadow-black/20
                       transition-all duration-300 ease-out cursor-default overflow-hidden"
            >
              {/* top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-white scale-x-0 group-hover:bg-[#EE6123] group-hover:scale-x-100 transition-all duration-300 origin-left rounded-t-xl" />

              {/* Icon */}
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-white/20 border border-white/20 shrink-0 transition-all duration-300 group-hover:bg-[#FFF0E8] group-hover:border-[#EE6123]/10">
                <Icon
                  className="text-white group-hover:text-[#EE6123] transition-colors duration-300"
                  size={20}
                />
              </div>

              {/* Title */}
              <div>
                <p className="font-bold text-sm text-white group-hover:text-gray-900 leading-snug tracking-tight transition-colors duration-300">
                  {title}
                </p>
                <p
                  className="text-xs font-semibold text-white/60 group-hover:text-[#EE6123] mt-0.5 transition-colors duration-300"
                  lang="am"
                >
                  {amharic}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs font-medium text-white/60 group-hover:text-gray-400 leading-relaxed flex-1 transition-colors duration-300">
                {description}
              </p>

              {/* Highlights */}
              <ul className="flex flex-col gap-1.5 pt-3 border-t border-white/20 group-hover:border-gray-100 transition-colors duration-300">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs font-semibold text-white/70 group-hover:text-gray-500 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#EE6123] shrink-0 transition-colors duration-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ),
        )}
      </div>

      {/* ── CTA ── */}
      <div className="mt-14 text-center relative z-10">
        <p className="text-white/60 font-medium text-sm mb-5">
          Ready to start your project? ·{" "}
          <span lang="am">ፕሮጀክትዎን ለመጀመር ዝግጁ ነዎት?</span>
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-[#EE6123] font-semibold text-sm px-8 py-3 rounded-lg
                     shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95
                     transition-all duration-200"
        >
          Request a Consultation
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
      </div>
    </section>
  );
};

export default Services;