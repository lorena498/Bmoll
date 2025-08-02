
import React from 'react';
import { ARTIST_NAME, ICONS, socialLinks } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/80 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
          &copy; {currentYear} {ARTIST_NAME}. Todos los derechos reservados.
          <a href="#/admin" className="ml-4 text-gray-500 hover:text-indigo-400 transition-colors">Admin</a>
        </div>
        <div className="flex items-center space-x-6">
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">{ICONS.tiktok}</a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">{ICONS.instagram}</a>
            <a href={socialLinks.soundcloud} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">{ICONS.soundcloud}</a>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">{ICONS.youtube}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;