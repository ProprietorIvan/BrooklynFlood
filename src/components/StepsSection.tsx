  import React from 'react';
  import Image from 'next/image';

  const StepsSection = () => {
    const metrics = [
      {
        value: "500+",
        label: "PROPERTIES RESTORED"
      },
      {
        value: "60min",
        label: "RESPONSE TIME"
      },
      {
        value: "24/7",
        label: "EMERGENCY SERVICE"
      },
      {
        value: "100%",
        label: "SATISFACTION RATE"
      }
    ];

    const projects = [
      {
        id: 1,
        imgUrl: "/photos/examples/basement-flood.jpg",
        alt: "Basement flood restoration"
      },
      {
        id: 2,
        imgUrl: "/photos/examples/storm-damage.jpg",
        alt: "Storm damage cleanup"
      },
      {
        id: 3,
        imgUrl: "/photos/examples/water-extraction.jpg",
        alt: "Commercial water extraction"
      },
      {
        id: 4,
        imgUrl: "/photos/examples/mold-remediation.jpg",
        alt: "Post-flood mold remediation"
      },
      {
        id: 5,
        imgUrl: "/photos/examples/residential-drying.jpg",
        alt: "Residential drying process"
      },
      {
        id: 6,
        imgUrl: "/photos/examples/equipment-setup.jpg",
        alt: "Professional drying equipment"
      }
    ];

    return (
      <div className="w-full">
        <div className="w-full bg-gradient-to-b from-[#8B2635] to-[#6B1D29] py-20">      
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-2">BY THE NUMBERS</h2>
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-white"></div>
                <p className="text-stone-300 mx-4">Fast Response, Reliable Results</p>
                <div className="h-px w-12 bg-white"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center group">
                  <div className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:bg-[#7A2230]">
                    <div className="text-5xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="h-px w-12 bg-white mb-4 group-hover:w-16 transition-all duration-300"></div>
                    <div className="text-sm text-stone-300 tracking-wider">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="py-16 px-5 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2 text-[#1C1917]">RECENT PROJECTS</h2>
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-[#8B2635]"></div>
                <p className="mx-4 text-[#44403C]">Results That Speak Volumes</p>
                <div className="h-px w-12 bg-[#8B2635]"></div>
              </div>
              <p className="mt-6 text-lg text-[#44403C] max-w-3xl mx-auto">
                See our recent flood restoration projects across Brooklyn neighborhoods. 
                From basement flooding to storm damage recovery, each project demonstrates 
                our commitment to swift response and thorough restoration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
                  <div className="relative h-64 w-full">
                    <Image 
                      src={project.imgUrl}
                      alt={project.alt}
                      fill
                      className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1917]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white text-center">{project.alt}</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 h-16 w-16 bg-[#8B2635] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default StepsSection;