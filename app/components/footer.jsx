export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/footerbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-5 inline-block">
              About us
              <span className="block w-8 h-[2px] bg-black mt-2"></span>
            </h4>
            <p className="text-sm text-black leading-relaxed">
              We specialize in creating stylish and functional interiors designed to elevate everyday spaces. Quality and creativity define our work
            </p>
          </div>

          {/* Open Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-5 inline-block">
              Open hours
              <span className="block w-8 h-[2px] bg-black mt-2"></span>
            </h4>
            <ul className="text-sm text-black space-y-3">
              <li>
                <span className="font-medium text-black">Monday:</span> 8am – 5pm
              </li>
              <li>
                <span className="font-medium text-black">Tue–Fri:</span> 11am – 6pm
              </li>
              <li>
                <span className="font-medium text-black">Saturday:</span> 8am – 12pm
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 inline-block">
              Quick Links
              <span className="block w-8 h-[2px] bg-black mt-2"></span>
            </h4>
            <ul className="text-sm text-black space-y-3">
              {["Home", "About", "Service", "Contact"].map((link) => (
                <li key={link} className="group w-fit cursor-pointer">
                  <span className="group-hover:text-black transition">
                    {link}
                  </span>
                  <div className="h-[1px] w-0 bg-black group-hover:w-full transition-all duration-300"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
        <div>
  <h4 className="text-lg font-semibold mb-5 inline-block">
    Contact Us
    <span className="block w-8 h-[2px] bg-black mt-2"></span>
  </h4>

  <ul className="text-sm text-black space-y-3">
    {/* Phone */}
    <li className="w-fit">
      <a
        href="tel:9012808959"
        className="hover:underline transition"
      >
       9012808959
      </a>
    </li>

    {/* Email */}
    <li className="w-fit">
      <a
        href="mailto:dreamriseinteriors@gmail.com"
        className="hover:underline transition"
      >
       dreamriseinteriors@gmail.com
      </a>
    </li>
     <li className="w-fit">
      <a
        href=""
        className="hover:underline transition"
      >
       B 149, Satguru Ram Singh Marg, Mansarovar Garden, Kirti Nagar, New Delhi 110015
      </a>
    </li>
  </ul>
</div>
</div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-6 border-t border-black flex flex-col md:flex-row items-center justify-between text-sm text-black">
          <p>© {new Date().getFullYear()} Dreamrise Interiors. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed with care</p>
        </div>
      </div>
    </footer>
  );
}
