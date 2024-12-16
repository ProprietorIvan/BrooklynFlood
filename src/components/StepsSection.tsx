import React from 'react';
import Image from 'next/image';

const StepsSection = () => {
  const metrics = [
    {
      value: "500+",
      label: "ROOFS INSTALLED"
    },
    {
      value: "25+",
      label: "YEARS EXPERIENCE"
    },
    {
      value: "4.9",
      label: "AVERAGE RATING"
    },
    {
      value: "20",
      label: "CERTIFIED ROOFERS"
    }
  ];

  const projects = [
    {
      id: 1,
      imgUrl: "/photos/examples/1.jpg",
      alt: "Modern asphalt shingle installation"
    },
    {
      id: 2,
      imgUrl: "/photos/examples/2.jpg",
      alt: "Commercial flat roof project"
    },
    {
      id: 3,
      imgUrl: "/photos/examples/3.jpg",
      alt: "Cedar shake roof replacement"
    },
    {
      id: 4,
      imgUrl: "/photos/examples/4.jpg",
      alt: "Metal roofing installation"
    },
    {
      id: 5,
      imgUrl: "/photos/examples/5.jpg",
      alt: "Emergency roof repair project"
    },
    {
      id: 6,
      imgUrl: "/photos/examples/2.jpg",
      alt: "Residential roof replacement"
    }
  ];

  return (
    <div className="w-full">
      <div className="w-full bg-gradient-to-b from-[#2C3E50] to-[#1a2530] py-20">      
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2">OUR ACHIEVEMENTS</h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-[#E74C3C]"></div>
              <p className="text-[#BDC3C7] mx-4">Building Trust Through Excellence</p>
              <div className="h-px w-12 bg-[#E74C3C]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:bg-[#34495E]">
                  <div className="text-5xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="h-px w-12 bg-[#E74C3C] mb-4 group-hover:w-16 transition-all duration-300"></div>
                  <div className="text-sm text-[#BDC3C7] tracking-wider">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 px-5 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2 text-[#2C3E50]">FEATURED PROJECTS</h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-[#E74C3C]"></div>
              <p className="mx-4 text-[#5D6D7E]">Excellence in Every Project</p>
              <div className="h-px w-12 bg-[#E74C3C]"></div>
            </div>
            <p className="mt-6 text-lg text-[#5D6D7E] max-w-3xl mx-auto">
              Explore our portfolio of successful roofing projects across Vancouver. 
              From residential replacements to commercial installations, each project 
              showcases our commitment to quality and craftsmanship.
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
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2C3E50]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-center">{project.alt}</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 h-16 w-16 bg-[#E74C3C] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepsSection;