import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#FFF5E5] w-full pt-28">
      {/* CTA CARDS */}
      <div className="relative max-w-7xl mx-auto px-6 -mt-40 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
          {/* Left Card */}
          <div className="bg-[#FFEBCF] p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Safety Starts With a Trusted Partner.
            </h3>
            <p className="text-gray-700 mb-6">
              We provide dependable security solutions designed to give you
              confidence, peace of mind, and reliable protection.
            </p>
            <button className="bg-[#6A4C2F] text-white px-6 py-3 rounded-md w-fit hover:opacity-90 transition">
              Request a Quote
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-[#2AA44F] p-10 flex flex-col justify-center text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Need to Talk To <br /> A Security Expert?
            </h3>
            <button className="bg-white text-[#2AA44F] px-6 py-3 rounded-md w-fit font-medium hover:opacity-90 transition">
              Book a call now
            </button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-[#E5D8C3] pb-12">
          {/* Logo & text */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/lojlogo.png" alt="Logo" width={60} height={60} />
              <span className="font-semibold text-lg">Lion of Judah</span>
            </div>
            <p className="text-gray-700">
              Dependable Security For Places & People That matter.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-gray-700">
                <li>Features</li>
                <li>Pricing</li>
                <li>Case Studies</li>
                <li>Reviews</li>
                <li>Updates</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-gray-700">
                <li>About us</li>
                <li>Contact us</li>
                <li>Careers</li>
                <li>Culture</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-gray-700">
                <li>Getting started</li>
                <li>Help center</li>
                <li>Server status</li>
                <li>Report a bug</li>
                <li>Chat support</li>
              </ul>
            </div>
          </div>

          {/* Big watermark text */}
          <div className="hidden lg:block text-[72px] font-bold text-[#E5D8C3] leading-none text-right">
            LION <br /> OF <br /> JUDAH
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-600">
          <p>Copyright © 2026 Vikstanli Multimedia | All Rights Reserved</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
            <Link href="#"><i className="fab fa-twitter"></i></Link>
            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
            <Link href="#"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
