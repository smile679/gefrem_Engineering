import { useState } from "react";

const categories = [
  { id: "all", label: "All Projects", amharic: "ሁሉም" },
  { id: "sanitary", label: "Sanitary", amharic: "ሳኒታሪ" },
  { id: "electric", label: "Electrical", amharic: "ኤሌክትሪክ" },
  { id: "ceramic", label: "Ceramics", amharic: "ሴራሚክ" },
  { id: "aluminum", label: "Aluminum", amharic: "አሉሚኒየም" },
];

const projects = [
  {
    id: 1,
    category: "sanitary",
    title: "Luxury Hotel Bathroom Fit-Out",
    amharic: "የቅንጦት ሆቴል የሳኒታሪ ሥራ",
    location: "Addis Ababa, Ethiopia",
    year: "2024",
    description:
      "Full sanitary installation across 120 hotel rooms including concealed cisterns, wall-hung WCs, rainfall showers, and bespoke vanity units.",
    tags: ["Hotel", "Commercial", "120 Rooms"],
    accent: "#f97316",
    number: "01",
  },
  {
    id: 2,
    category: "electric",
    title: "Corporate Office Electrical Finishing",
    amharic: "የቢሮ ህንፃ የኤሌክትሪክ ሥራ",
    location: "Bole, Addis Ababa",
    year: "2024",
    description:
      "Complete electrical finishing for a 6-floor office tower — panel boards, conduit works, switch & socket installations, and LED lighting systems.",
    tags: ["Office", "6 Floors", "LED Systems"],
    accent: "#fb923c",
    number: "02",
  },
  {
    id: 3,
    category: "ceramic",
    title: "Residential Villa Floor Tiling",
    amharic: "የመኖሪያ ቪላ ሴራሚክ ንጣፍ",
    location: "CMC, Addis Ababa",
    year: "2023",
    description:
      "800m² of large-format porcelain and natural stone tiling throughout a private villa, including feature walls, bathrooms, and outdoor terraces.",
    tags: ["Residential", "800m²", "Porcelain"],
    accent: "#ea580c",
    number: "03",
  },
  {
    id: 4,
    category: "aluminum",
    title: "Shopping Mall Aluminum Facades",
    amharic: "የሾፒንግ ሞል አሉሚኒየም ፊት ለፊት",
    location: "Megenagna, Addis Ababa",
    year: "2024",
    description:
      "Structural glazing, aluminum cladding, and curtain wall systems for a 3-storey retail mall covering over 1,200m² of external facade.",
    tags: ["Commercial", "1,200m²", "Curtain Wall"],
    accent: "#c2410c",
    number: "04",
  },
  {
    id: 5,
    category: "sanitary",
    title: "Apartment Complex Sanitary Works",
    amharic: "የአፓርትመንት ሳኒታሪ ሥራ",
    location: "Sarbet, Addis Ababa",
    year: "2023",
    description:
      "Sanitary installation across 48 residential apartments including water supply, drainage systems, and full bathroom fixture fitting.",
    tags: ["Residential", "48 Units", "Full Fit-Out"],
    accent: "#f97316",
    number: "05",
  },
  {
    id: 6,
    category: "electric",
    title: "Hospital Electrical Fit-Out",
    amharic: "የሆስፒታል የኤሌክትሪክ ፍጻሜ ሥራ",
    location: "Addis Ababa",
    year: "2023",
    description:
      "Specialized electrical finishing for a private hospital — emergency lighting, nurse call systems, theatre lighting, and earthing installations.",
    tags: ["Healthcare", "Specialist", "Emergency Systems"],
    accent: "#fb923c",
    number: "06",
  },
  {
    id: 7,
    category: "ceramic",
    title: "Hotel Lobby & Corridor Tiling",
    amharic: "የሆቴል ሎቢ ሴራሚክ ሥራ",
    location: "Kazanchis, Addis Ababa",
    year: "2024",
    description:
      "Intricate marble and large-format tile laying across hotel lobbies, corridors, and feature staircases to achieve a five-star finish.",
    tags: ["Hospitality", "Marble", "5-Star"],
    accent: "#ea580c",
    number: "07",
  },
  {
    id: 8,
    category: "aluminum",
    title: "Office Tower Aluminum Windows",
    amharic: "የቢሮ ህንፃ አሉሚኒየም መስኮቶች",
    location: "Bole Road, Addis Ababa",
    year: "2023",
    description:
      "Supply and installation of thermally broken aluminum windows, curtain walls, and entrance doors across a 10-storey commercial tower.",
    tags: ["Commercial", "10 Floors", "Thermal Break"],
    accent: "#c2410c",
    number: "08",
  },
];

const categoryColors = {
  sanitary: "bg-blue-100 text-blue-700",
  electric: "bg-yellow-100 text-yellow-700",
  ceramic: "bg-stone-100 text-stone-700",
  aluminum: "bg-slate-100 text-slate-700",
};

const Projects = () => {
  const [active, setActive] = useState("all");
  const [hovered, setHovered] = useState(null);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      className="w-full py-10 md:py-20 px-5"
      id="projects"
      // style={{
      //   background:
      //     "linear-gradient(135deg, #fff7ed 0%, #ffedd5 60%, #fed7aa 100%)",
      // }}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-sm font-black uppercase tracking-widest text-orange-400 mb-2">
          Our Work · የእኛ ሥራዎች
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900">
          Featured Projects
        </h2>
        <p className="text-base font-semibold text-gray-600 mt-4 max-w-xl mx-auto leading-relaxed">
          A selection of our finest{" "}
          <span className="text-orange-500 font-black">Level 5</span> finishing
          projects across Ethiopia — delivered with precision and pride.
        </p>
        <p className="text-sm text-orange-500 mt-2 font-bold" lang="am">
          በኢትዮጵያ ውስጥ ካጠናቀቅናቸው ምርጥ ፕሮጀክቶቻችን መካከል።
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-5 py-2 rounded-full text-sm font-black border-2 transition-all duration-200
              ${
                active === cat.id
                  ? "bg-orange-500 border-orange-500 text-white shadow-md scale-105"
                  : "bg-white border-orange-200 text-gray-700 hover:border-orange-400 hover:text-orange-500"
              }`}
          >
            {cat.label}
            <span
              className={`ml-1.5 text-xs font-bold ${active === cat.id ? "text-orange-100" : "text-orange-400"}`}
              lang="am"
            >
              · {cat.amharic}
            </span>
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
            className="group relative flex flex-col rounded-2xl border-2 border-orange-100 bg-white shadow-sm
              hover:shadow-2xl hover:border-orange-400 hover:-translate-y-3
              transition-all duration-300 ease-out cursor-pointer overflow-hidden"
          >
            {/* Top color band with project number */}
            <div
              className="relative flex items-center justify-between px-5 py-4 transition-all duration-300"
              style={{
                background:
                  hovered === project.id
                    ? `linear-gradient(135deg, ${project.accent}, #fed7aa)`
                    : "linear-gradient(135deg, #ffedd5, #fff7ed)",
              }}
            >
              <span
                className="text-4xl font-black transition-colors duration-300"
                style={{
                  color:
                    hovered === project.id
                      ? "rgba(255,255,255,0.3)"
                      : "#fed7aa",
                }}
              >
                {project.number}
              </span>
              <span
                className={`text-xs font-black px-2.5 py-1 rounded-full capitalize ${categoryColors[project.category]}`}
              >
                {project.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-5 flex-1">
              {/* Title */}
              <div>
                <p className="font-black text-sm text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                  {project.title}
                </p>
                <p
                  className="text-xs font-bold text-orange-400 mt-0.5 group-hover:text-orange-500 transition-colors duration-300"
                  lang="am"
                >
                  {project.amharic}
                </p>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-1 text-xs font-bold text-gray-400">
                <span>📍</span>
                <span>{project.location}</span>
                <span className="ml-auto bg-orange-50 text-orange-500 px-2 py-0.5 rounded-full font-black">
                  {project.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs font-semibold text-gray-500 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-orange-100">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-black px-2 py-0.5 rounded-full bg-orange-50 text-orange-500
                      group-hover:bg-orange-500 group-hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <p className="text-gray-600 font-bold text-sm mb-4">
          Want to see your project here? · የእርስዎ ፕሮጀክት እዚህ ይታይ?
        </p>
        <a
          href="#contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-black text-sm px-10 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          Start Your Project · ፕሮጀክትዎን ይጀምሩ
        </a>
      </div>
    </section>
  );
};

export default Projects;