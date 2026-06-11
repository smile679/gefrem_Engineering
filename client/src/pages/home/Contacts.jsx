import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-15 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gray-900 font-bold uppercase tracking-wider">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-amber-600">
            Let's Build Something Great Together
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Whether you're planning a construction project, engineering
            consultation, or infrastructure development, our team is ready to
            help turn your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-xl transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-xl">
                <MapPin className="text-amber-600" size={24} />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">Office Address</h4>
                <p className="text-slate-600 mt-1">
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-xl">
                <Phone className="text-amber-600" size={24} />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">Phone Number</h4>
                <p className="text-slate-600 mt-1">
                  +251 XXX XXX XXX
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-xl">
                <Mail className="text-amber-600" size={24} />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">Email Address</h4>
                <p className="text-slate-600 mt-1">
                  info@gefremengineering.com
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-xl">
                <Clock className="text-amber-600" size={24} />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Working Hours
                </h4>
                <p className="text-slate-600 mt-1">
                  Monday - Saturday
                </p>
                <p className="text-slate-600">
                  8:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Trust Box */}
            <div className="bg-slate-900 text-white rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-3">
                Ready to Start Your Project?
              </h3>

              <p className="text-slate-300">
                Our team is committed to delivering quality engineering and
                construction solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;