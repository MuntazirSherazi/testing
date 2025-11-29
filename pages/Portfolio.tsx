import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const categories = ['All', 'Development', 'E-Commerce', 'Branding', 'UI/UX', 'SEO', 'Marketing'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20">
      <div className="bg-dark-lighter py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our Work</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            A selection of projects where we helped our partners innovate and grow.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-primary border-primary text-dark' 
                  : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
                     <ArrowUpRight className="text-white w-8 h-8" />
                  </div>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                   <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                   <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 border border-gray-800 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;