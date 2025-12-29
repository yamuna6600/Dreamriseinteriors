"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function GallerySection() {
  const sectionRef = useRef(null); // ✅ JSX: no TypeScript generic

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUpVisible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const targets = sectionRef.current?.querySelectorAll(".slide-up-target");
    targets?.forEach((el) => observer.observe(el));

    return () => {
      targets?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      className="bg-white py-8 overflow-hidden"
      id="gallery"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
      
           <h2 className="md:text-5xl text-2xl text-black font-medium  tracking-wide">
  OUR <span className="italic font-serif text-black font-normal">GALLERY</span>
</h2>
        <p className="text-black ">
         Explore & Experience: Bespoke Interior Designs Shaping Timeless Living
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          <div className="slide-up-target opacity-0 translate-y-[50px] transition-transform duration-700 ease-out delay-[0ms]">
            <Image
              src="/images/gallery1.jpg"
              alt="Salon interior 1"
              width={800}
              height={900}
              className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          </div>

          <div className="flex flex-col gap-4 h-full">
            <div className="flex-1 slide-up-target opacity-0 translate-y-[50px] transition-transform duration-700 ease-out delay-[150ms]">
              <Image
                src="/images/gallery2.jpg"
                alt="Salon mirror area"
                width={400}
                height={450}
                className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            </div>

            <div className="flex gap-4 flex-1">
              <div className="w-1/2 slide-up-target opacity-0 translate-y-[50px] transition-transform duration-700 ease-out delay-[300ms]">
                <Image
                  src="/images/gallery3.jpg"
                  alt="Salon entrance"
                  width={400}
                  height={450}
                  className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              </div>
              <div className="w-1/2 slide-up-target opacity-0 translate-y-[50px] transition-transform duration-700 ease-out delay-[450ms]">
                <Image
                  src="/images/gallery4.jpg"
                  alt="Waiting area"
                  width={400}
                  height={450}
                  className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>

          <div className="slide-up-target opacity-0 translate-y-[50px] transition-transform duration-700 ease-out delay-[600ms]">
            <Image
              src="/images/gallery5.jpg"
              alt="Product shelf"
              width={800}
              height={900}
              className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideUpVisible {
          animation: slideUp 0.9s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
