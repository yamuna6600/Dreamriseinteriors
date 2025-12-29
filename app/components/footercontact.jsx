import Link from "next/link";

export default function FooterContact() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        
        {/* Heading */}
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
        Searching for an interior <br />
design partner to elevate <br />
your space?
        </h1>

        {/* CTA Button */}
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block border border-white text-white px-8 py-4 text-sm font-semibold hover:bg-white hover:text-black transition"
          >
            Book a Call
          </Link>
        </div>

        {/* Email */}
        <p className="mt-8 text-sm text-gray-300">
          You can also send us an email 😊{" "}
          <a
            href="mailto:dreamriseinteriors@gmail.com"
            className="text-white underline hover:text-gray-300 transition"
          >
           dreamriseinteriors@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
