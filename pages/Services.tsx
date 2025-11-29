import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-dark-lighter py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to modernize your business and drive tangible results.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col md:flex-row gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-12 h-12 text-primary" })}
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {service.description} We dive deep into your specific needs to create a solution that not only looks great but performs exceptionally well in your market.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-green-500/20 p-1 rounded-full">
                      <Check size={14} className="text-green-500" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary rounded-2xl rotate-6 opacity-20 group-hover:rotate-3 transition-transform duration-500"></div>
                <img 
                  src={`https://picsum.photos/600/400?random=${100 + index}`} 
                  alt={service.title} 
                  className="relative rounded-2xl shadow-2xl w-full object-cover border border-white/10"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-primary py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl font-bold text-dark mb-4">Need a custom solution?</h2>
           <p className="text-dark/80 mb-8 text-lg">We understand every business is unique. Let's discuss your specific requirements.</p>
           <button className="bg-dark text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-dark transition-colors">
             Contact Sales
           </button>
        </div>
      </div>
    </div>
  );
};

export default Services;