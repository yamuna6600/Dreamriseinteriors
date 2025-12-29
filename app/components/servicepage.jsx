export default function ServicesPage() {
  const services = [
    {
      title: "Wooden Flooring",
      description:
        "Add warmth and elegance to your space with premium wooden flooring solutions. Designed for durability and timeless appeal, they enhance both comfort and aesthetics. Perfect for homes and commercial interiors seeking a refined finish.",
      icon: <HouseIcon />,
    },
    {
      title: "Wall Paper",
      description:
        "Transform your walls with stylish wallpapers that add character and depth. From modern patterns to classic textures, our designs suit every interior style. Easy to maintain and crafted for lasting beauty.",
      icon: <BuildingIcon />,
    },
    {
      title: "Wall Panel",
      description:
        "Elevate interiors with decorative wall panels that create striking visual impact. Ideal for feature walls, they add texture, dimension, and sophistication. Designed to blend seamlessly with modern and luxury spaces.",
      icon: <OfficeIcon />,
    },
    {
      title: "Blinds",
      description:
        "Enhance privacy and light control with elegant blinds tailored to your interiors. Available in a variety of styles and finishes, they combine functionality with contemporary design. Perfect for homes and offices alike.",
      icon: <RestaurantIcon />,
    },
    {
      title: "Vertical Garden",
      description:
        "Bring nature indoors with beautifully designed vertical gardens. These green installations enhance ambiance while optimizing wall space. A refreshing design element for modern residential and commercial interiors.",
      icon: <CommercialIcon />,
    },
    {
      title: "Glass Film",
      description:
        "Improve privacy and aesthetics with high-quality glass film solutions. Ideal for windows and partitions, they reduce glare while enhancing visual appeal. A smart and stylish solution for both residential and commercial spaces.",
      icon: <IndustrialIcon />,
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-gray-500 mb-3">
            WHAT WE’RE OFFERING
          </p>
          <h1 className="text-4xl md:text-5xl text-[#9a3f13] font-extrabold">
            PROFESSIONAL SERVICES
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                p-8
                min-h-[260px]
                flex
                flex-col
                justify-between
                bg-gray-50
                transition-all
                duration-300
                hover:bg-[#9a3f13]
              "
            >
              <div>
                <h3
                  className="
                    font-bold
                    text-lg
                    mb-4
                    text-black
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-gray-600
                    transition-colors
                    duration-300
                    group-hover:text-gray-300
                  "
                >
                  {service.description}
                </p>
              </div>

              <div className="flex items-end justify-between mt-6">
                {/* <span
                  className="
                    text-xs
                    font-semibold
                    underline
                    underline-offset-4
                    text-black
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  READ MORE
                </span> */}

                {/* <div
                  className="
                    w-10
                    h-10
                    text-black
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {service.icon}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

/* Icons */

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3l9 8h-3v10h-5v-6H11v6H6V11H3l9-8z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 22h16V2H8v4H4v16zm4-2H6v-2h2v2zm0-4H6v-2h2v2zm6 4h-2v-2h2v2zm0-4h-2v-2h2v2z" />
    </svg>
  );
}

function OfficeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 22h18v-2H3v2zm3-4h4V7H6v11zm6 0h6V3h-6v15z" />
    </svg>
  );
}

function RestaurantIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2v20h2V2H7zm8 0h2v9a4 4 0 01-4 4v7h-2v-7a4 4 0 014-4V2z" />
    </svg>
  );
}

function CommercialIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 21h18v-2H3v2zM6 17h4V7H6v10zm6 0h6V3h-6v14z" />
    </svg>
  );
}

function IndustrialIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 22h20v-2H2v2zm2-4h16V8l-4 4-4-4-4 4-4-4v10z" />
    </svg>
  );
}
