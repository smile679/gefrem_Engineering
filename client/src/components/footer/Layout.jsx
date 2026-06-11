import {
  MapPin,
  Phone,
  Mail,
  CircleFadingPlus,
  ScanFace,
  Link,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* COMPANY INFO */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              <span className="text-[#EE6123]">Gefrem</span> Engineering
            </h2>

            <p className="text-slate-400 mt-5 leading-relaxed">
              Building excellence through innovative engineering, quality
              construction, and reliable project delivery across Ethiopia.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-6">
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EE6123] transition">
                <ScanFace size={18} />
              </a>

              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EE6123] transition">
                <CircleFadingPlus size={18} />
              </a>

              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EE6123] transition">
                <Link size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#home" className="hover:text-[#EE6123] transition-all scroll-auto">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#EE6123] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#service" className="hover:text-[#EE6123] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#EE6123] transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#EE6123] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Services</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Commercial Construction</li>
              <li>Industrial Projects</li>
              <li>Renovation & Remodeling</li>
              <li>Project Management</li>
              <li>Structural Engineering</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Info</h3>

            <div className="space-y-5 text-slate-400">
              <div className="flex gap-3">
                <MapPin className="text-[#EE6123] shrink-0" size={20} />
                <p>Addis Ababa, Ethiopia</p>
              </div>

              <div className="flex gap-3">
                <Phone className="text-[#EE6123] shrink-0" size={20} />
                <p>+251 900 000 000</p>
              </div>

              <div className="flex gap-3">
                <Mail className="text-[#EE6123] shrink-0" size={20} />
                <p>info@gefremengineering.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2026 Gefrem Engineering. All rights reserved.
          </p>

          <p className="text-slate-600 text-sm">
            Designed & Developed by Samison Gidey
          </p>
        </div>
      </div>
    </footer>
  );
}
