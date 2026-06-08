import {
  MapPin,
  Phone,
  Mail,
  CircleFadingPlus,
  University,
  Cable,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#EE6123]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          {/* Company Info */}
          <div>
            <h2 className=" text-2xl font-bold tracking-wide">
              Gefrem<span className="text-white pl-2">Engineering</span>
            </h2>

            <p className="text-white mt-5 leading-relaxed">
              Trusted Level 5 construction company delivering modern commercial,
              industrial, and infrastructure solutions with precision and
              quality.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300"
              >
                <CircleFadingPlus size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300"
              >
                <University size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300"
              >
                <Cable size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-black">
              <li>
                <a href="#" className="text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="text-white transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="text-white transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#" className="text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Services</h3>

            <ul className="space-y-3 text-white">
              <li>Commercial Construction</li>
              <li>Industrial Projects</li>
              <li>Renovation & Remodeling</li>
              <li>Project Management</li>
              <li>Structural Engineering</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Info</h3>

            <div className="space-y-5 text-white">
              <div className="flex gap-3">
                <MapPin className="text-white shrink-0" size={20} />
                <p>Addis Ababa, Ethiopia</p>
              </div>

              <div className="flex gap-3">
                <Phone className="text-white shrink-0" size={20} />
                <p>+251 900 000 000</p>
              </div>

              <div className="flex gap-3">
                <Mail className="text-white shrink-0" size={20} />
                <p>info@buildcore.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-4">
          <p className="text-white text-sm text-center md:text-left">
            © 2026 BuildCore Construction. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-black">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}