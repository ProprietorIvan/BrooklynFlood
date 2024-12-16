import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import { Phone, ArrowRight, Paintbrush, Ruler, Clock, CheckCircle2, Shield, Wrench } from 'lucide-react';
import Image from 'next/image';

const DrywallPaintServices = () => {
  const [customerType, setCustomerType] = useState<'homeowner' | 'business' | null>(null);

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+17182345678';
  };

  const serviceFeatures = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Expert Craftsmanship",
      description: "Master technicians with 15+ years of experience in drywall and painting"
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Premium Materials",
      description: "High-grade materials and premium paints for lasting results"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Efficient Service",
      description: "Precise scheduling and timely completion of every project"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "5-Year Warranty",
      description: "Full warranty coverage on all workmanship and materials"
    }
  ];

  const serviceTypes = [
    {
      title: "Drywall Installation",
      points: [
        "New construction installation",
        "Precise cutting and fitting",
        "Seamless joint finishing",
        "Texture matching"
      ]
    },
    {
      title: "Drywall Repair",
      points: [
        "Hole and crack repair",
        "Water damage restoration",
        "Perfect patch matching",
        "Structural reinforcement"
      ]
    },
    {
      title: "Interior Painting",
      points: [
        "Premium paint application",
        "Expert color matching",
        "Trim and detail work",
        "Complete surface prep"
      ]
    },
    {
      title: "Specialty Finishes",
      points: [
        "Custom textures",
        "Decorative finishes",
        "Accent walls",
        "Cabinet refinishing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-stone-100 to-[#F5F4F0]">
        <div className="absolute inset-0 bg-grid-stone-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center py-16">
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-[#8B2635] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Professional Drywall & Paint Specialists
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1C1917]">
                Expert
                <span className="block text-[#8B2635]">Drywall & Paint Services</span>
              </h1>
              <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                Transform your space with master craftsmanship. From flawless drywall installation to perfect paint finishes, we deliver exceptional results that stand the test of time.
              </p>
              
              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Schedule Your Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/api/placeholder/800/600"
                  alt="Professional Drywall and Painting"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">The Master Craftsman Difference</h2>
            <p className="text-lg text-[#44403C]">Unmatched expertise in drywall and painting services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="bg-stone-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#8B2635] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#44403C]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">Comprehensive Services</h2>
            <p className="text-lg text-[#44403C]">Expert solutions for all your drywall and painting needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#1C1917]">{type.title}</h3>
                <ul className="space-y-3">
                  {type.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8B2635]" />
                      <span className="text-[#44403C]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#1C1917]">Superior Results</h2>
              <p className="text-lg text-[#44403C] mb-6 leading-relaxed">
                With over 1,000 successful projects completed, our master craftsmen deliver flawless results that transform spaces and exceed expectations.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert preparation and execution",
                  "Premium materials and finishes",
                  "Meticulous attention to detail",
                  "Long-lasting, durable results"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B2635]" />
                    <span className="text-[#44403C] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/api/placeholder/800/600"
                alt="Drywall and Paint Results"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C1917]">Transform Your Space</h2>
            <p className="text-lg text-[#44403C]">Professional service • Expert craftsmanship</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              {/* Customer Type Selection */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => setCustomerType('homeowner')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    customerType === 'homeowner'
                      ? 'border-[#8B2635] bg-[#8B2635]/5'
                      : 'border-stone-200 hover:border-[#8B2635]'
                  }`}
                >
                  <h3 className={`text-lg font-semibold mb-1 ${
                    customerType === 'homeowner' ? 'text-[#8B2635]' : 'text-[#1C1917]'
                  }`}>
                    Homeowner
                  </h3>
                  <p className="text-sm text-[#44403C]">Residential projects</p>
                </button>

                <button
                  onClick={() => setCustomerType('business')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    customerType === 'business'
                      ? 'border-[#8B2635] bg-[#8B2635]/5'
                      : 'border-stone-200 hover:border-[#8B2635]'
                  }`}
                >
                  <h3 className={`text-lg font-semibold mb-1 ${
                    customerType === 'business' ? 'text-[#8B2635]' : 'text-[#1C1917]'
                  }`}>
                    Business
                  </h3>
                  <p className="text-sm text-[#44403C]">Commercial property</p>
                </button>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1C1917] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1917] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1C1917] mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                  required
                />
              </div>

              {/* Business-specific fields */}
              {customerType === 'business' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">
                      Project Type
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="new">New Construction</option>
                      <option value="renovation">Renovation</option>
                      <option value="repair">Repair Work</option>
                      <option value="painting">Painting Only</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">
                      Project Size (sq ft) - Approximate
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-[#1C1917] mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                  placeholder="Tell us about your drywall or painting project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B2635] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#7A2230] transition-colors duration-300"
              >
                Schedule Your Professional Service
              </button>

              <p className="text-sm text-[#44403C] text-center">
                Expert consultation • Premium materials • Professional results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#8B2635]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Transform Your Space with Expert Craftsmanship
          </h2>
          <p className="text-xl mb-8 text-stone-200">
            Professional drywall and painting services with guaranteed results.
          </p>
          <button
            onClick={handleEmergencyCall}
            className="group inline-flex items-center justify-center gap-3 bg-white text-[#8B2635] px-8 py-4 rounded-full text-xl font-bold hover:bg-stone-100 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Call For Expert Service</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DrywallPaintServices;