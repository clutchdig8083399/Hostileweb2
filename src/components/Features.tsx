import React from 'react';
import { Smartphone, LayoutGrid, Zap, Users, Shield, BarChart, Globe, Settings } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Smartphone size={24} />,
      title: 'Fully Responsive',
      description: 'Looks great on any device, from mobiles to desktops.'
    },
    {
      icon: <LayoutGrid size={24} />,
      title: 'Modular Components',
      description: 'Build pages quickly with our reusable components.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Lightning Fast',
      description: 'Optimized for speed with next-gen performance.'
    },
    {
      icon: <Users size={24} />,
      title: 'User-Centric',
      description: 'Designed with the user experience as the top priority.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure by Design',
      description: 'Built with security best practices from the ground up.'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Analytics Ready',
      description: 'Easy integration with popular analytics platforms.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Ready',
      description: 'Internationalization support for global audiences.'
    },
    {
      icon: <Settings size={24} />,
      title: 'Easy Customization',
      description: 'Tailor the design to match your brand identity.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Modern Web
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to build stunning, high-performance websites
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#testimonials"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            See what our customers say
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;