import React from 'react';
import { 
  Code2, 
  ShoppingCart, 
  Palette, 
  Search, 
  Megaphone, 
  PenTool 
} from 'lucide-react';
import { Service, Project, TeamMember, Testimonial, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Custom high-performance websites built with React or WordPress tailored to your business needs.',
    icon: <Code2 className="w-8 h-8 text-primary" />,
    features: ['React & Next.js Apps', 'Custom WordPress Themes', 'Headless CMS', 'API Integrations']
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Scalable online stores that drive sales and provide seamless shopping experiences.',
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    features: ['WooCommerce', 'Shopify', 'Custom Checkout Flows', 'Payment Gateway Setup']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centric interfaces that are visually stunning and intuitively functional.',
    icon: <Palette className="w-8 h-8 text-primary" />,
    features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
  },
  {
    id: 'seo',
    title: 'SEO & Visibility',
    description: 'Data-driven strategies to improve your ranking and drive organic traffic.',
    icon: <Search className="w-8 h-8 text-primary" />,
    features: ['Technical SEO', 'Keyword Strategy', 'Content Optimization', 'Local SEO']
  },
  {
    id: 'branding',
    title: 'Branding & Creative',
    description: 'Crafting unique brand identities that resonate with your target audience.',
    icon: <PenTool className="w-8 h-8 text-primary" />,
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Materials']
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive campaigns to generate leads and boost brand awareness.',
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    features: ['Lead Generation', 'Social Media Management', 'Email Marketing', 'PPC Ads']
  }
];

export const PORTFOLIO_ITEMS: Project[] = [
  {
    id: '1',
    title: 'Nebula Fintech',
    category: 'Development',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'A modern banking dashboard with real-time data visualization.'
  },
  {
    id: '2',
    title: 'Aura Fashion',
    category: 'E-Commerce',
    image: 'https://picsum.photos/800/600?random=2',
    description: 'Minimalist high-fashion e-commerce store built on Shopify.'
  },
  {
    id: '3',
    title: 'EcoSpace',
    category: 'Branding',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Complete brand identity for a sustainable architecture firm.'
  },
  {
    id: '4',
    title: 'Zen Health',
    category: 'UI/UX',
    image: 'https://picsum.photos/800/600?random=4',
    description: 'Mobile app design for meditation and mental wellness.'
  },
  {
    id: '5',
    title: 'TechGiant Corp',
    category: 'SEO',
    image: 'https://picsum.photos/800/600?random=5',
    description: 'Enterprise SEO strategy resulting in 200% traffic growth.'
  },
  {
    id: '6',
    title: 'Urban Coffee',
    category: 'Marketing',
    image: 'https://picsum.photos/800/600?random=6',
    description: 'Social media campaign launch for a nationwide coffee chain.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Creative Director',
    image: 'https://picsum.photos/400/400?random=10'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Lead Developer',
    image: 'https://picsum.photos/400/400?random=11'
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    role: 'Head of Strategy',
    image: 'https://picsum.photos/400/400?random=12'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Rostova',
    role: 'CEO',
    company: 'FutureTech',
    content: 'Nova transformed our digital presence completely. The attention to detail and creative direction was exactly what we needed.',
    avatar: 'https://picsum.photos/100/100?random=20'
  },
  {
    id: '2',
    name: 'James Carter',
    role: 'Marketing Director',
    company: 'Global Retail',
    content: 'The ROI from our SEO and PPC campaigns has been outstanding. They truly understand data-driven marketing.',
    avatar: 'https://picsum.photos/100/100?random=21'
  }
];

export const STATS: Stat[] = [
  { label: 'Projects Completed', value: '250+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Team Members', value: '45' },
];