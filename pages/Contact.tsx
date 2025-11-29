import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', service: 'Website Development', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left Info Panel */}
        <div className="bg-dark-lighter p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Let's build the future together.</h1>
          <p className="text-gray-400 text-lg mb-12">
            Have a project in mind? We'd love to hear about it. Fill out the form or reach out directly.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-dark border border-white/10 rounded-lg">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Email Us</h3>
                <p className="text-gray-400">hello@novaagency.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-dark border border-white/10 rounded-lg">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-dark border border-white/10 rounded-lg">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Visit Us</h3>
                <p className="text-gray-400">123 Innovation Ave, Suite 400<br />San Francisco, CA 94103</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-dark">
          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg w-full mx-auto">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-dark-lighter border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-dark-lighter border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="john@company.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Interested In</label>
              <select 
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full bg-dark-lighter border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              >
                <option>Website Development</option>
                <option>E-Commerce Solutions</option>
                <option>UI/UX Design</option>
                <option>Branding</option>
                <option>SEO & Marketing</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-dark-lighter border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-primary hover:bg-white text-dark font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              {status === 'idle' && <Send size={18} />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;