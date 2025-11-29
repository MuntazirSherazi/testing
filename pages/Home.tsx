import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, PORTFOLIO_ITEMS, STATS, TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const growthData = [
  { name: 'Q1', growth: 20 },
  { name: 'Q2', growth: 45 },
  { name: 'Q3', growth: 60 },
  { name: 'Q4', growth: 95 },
];

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6">
                Award Winning Digital Agency
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-6">
                Elevate Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Digital Presence
                </span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                We craft world-class websites, impactful branding, and data-driven marketing strategies to help your business grow exponentially.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-primary hover:bg-white hover:text-dark text-dark font-bold py-4 px-8 rounded-full transition-all duration-300 text-center">
                  Start a Project
                </Link>
                <Link to="/portfolio" className="border border-white/20 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2">
                  View Work <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-dark-lighter border border-white/10 p-6 rounded-2xl shadow-2xl">
                <img 
                  src="https://picsum.photos/600/400?random=50" 
                  alt="Agency Dashboard" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-dark border border-white/10 p-4 rounded-xl shadow-xl max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <TrendingUp className="text-green-500 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Total Growth</div>
                      <div className="font-bold text-white text-lg">+128%</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-20 bg-dark-lighter border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-primary text-sm md:text-base uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Snippet */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">We Don't Just Build, We Evolve.</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Nova isn't just another agency. We are your strategic growth partner. We combine technical expertise with creative intuition to deliver products that stand out in a crowded digital landscape.
            </p>
            <ul className="space-y-4 mb-8">
              {['User-Centric Approach', 'Data-Driven Decisions', 'Agile Methodology', '24/7 Support'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-primary w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all">
              Learn More About Us <ChevronRight size={18} />
            </Link>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 opacity-20 rounded-2xl transform rotate-3"></div>
             <img src="https://picsum.photos/600/500?random=60" alt="Team meeting" className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* 4. Services Overview */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Expertise</h2>
             <p className="text-gray-400">We offer a full suite of digital services designed to take your business to the next level.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-dark p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
                <div className="mb-6 p-4 bg-dark-lighter inline-block rounded-xl group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-white text-sm font-semibold flex items-center gap-2 group-hover:text-primary transition-colors">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client ROI / Charts (Data Visualization) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">Proven Results</h2>
              <p className="text-gray-400 mb-8">
                Our clients see an average of 95% growth in digital engagement within the first 6 months of working with us.
              </p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis dataKey="name" stroke="#666" tickLine={false} axisLine={false} />
                    <YAxis stroke="#666" tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="growth" fill="#BD9BFF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="space-y-6">
               <div className="bg-dark border border-white/10 p-6 rounded-xl flex items-start gap-4">
                 <div className="bg-green-500/10 p-3 rounded-lg text-green-400">
                    <TrendingUp size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-bold text-lg">Revenue Growth</h4>
                    <p className="text-gray-400 text-sm">Consistent revenue increase for e-commerce partners through optimized funnels.</p>
                 </div>
               </div>
               <div className="bg-dark border border-white/10 p-6 rounded-xl flex items-start gap-4">
                 <div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
                    <CheckCircle2 size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-bold text-lg">Conversion Rate</h4>
                    <p className="text-gray-400 text-sm">UI/UX improvements leading to 3x better conversion rates on landing pages.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Portfolio Highlights */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Selected Works</h2>
              <p className="text-gray-400">Showcasing our finest digital creations.</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-white hover:text-primary transition-colors font-semibold">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-xl cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-100 flex flex-col justify-end p-6">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/portfolio" className="btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-16">What Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-dark border border-white/5 p-8 rounded-2xl relative">
              <div className="absolute -top-4 -left-4 text-6xl text-primary opacity-30 font-serif">"</div>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed italic relative z-10">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready to transform your brand?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's build something extraordinary together. Schedule a free consultation call with our strategy team.
          </p>
          <Link to="/contact" className="inline-block bg-white text-dark hover:bg-primary transition-colors font-bold text-lg py-4 px-10 rounded-full shadow-lg shadow-white/5">
            Get Your Free Proposal
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;