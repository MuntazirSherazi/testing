import React from 'react';
import { TEAM } from '../constants';
import { Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Digital craftsmanship <br />
            <span className="text-gray-500">at its finest.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Founded in 2020, Nova started with a simple mission: to bridge the gap between aesthetic design and technical performance. Today, we are a global team of dreamers, doers, and creators.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-dark-lighter py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-dark p-8 rounded-2xl border border-white/5">
              <Target className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Precision</h3>
              <p className="text-gray-400">We don't rely on guesswork. Every pixel, line of code, and marketing dollar is placed with intent and backed by data.</p>
            </div>
            <div className="bg-dark p-8 rounded-2xl border border-white/5">
              <Users className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-gray-400">We work with you, not just for you. Your industry knowledge combined with our digital expertise creates magic.</p>
            </div>
            <div className="bg-dark p-8 rounded-2xl border border-white/5">
              <Zap className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Velocity</h3>
              <p className="text-gray-400">In the digital world, speed matters. We deploy agile methodologies to deliver value faster without compromising quality.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-white mb-12">Meet the Minds</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TEAM.map((member) => (
            <div key={member.id} className="group relative">
              <div className="overflow-hidden rounded-xl mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-primary text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Office/Vibe */}
      <div className="h-[500px] w-full relative">
        <img 
          src="https://picsum.photos/1920/600?random=99" 
          alt="Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
           <h2 className="text-4xl font-bold text-white border-b-2 border-primary pb-4">Remote First, Global Mindset</h2>
        </div>
      </div>
    </div>
  );
};

export default About;