import React from 'react';
import { Layers } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center space-x-2">
      <Layers className="w-8 h-8 text-blue-600" />
      <span className="text-xl font-bold text-gray-900 dark:text-white">Horizon</span>
    </a>
  );
};

export default Logo;