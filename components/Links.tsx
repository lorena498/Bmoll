
import React from 'react';
import { links } from '../constants';
import type { Link } from '../types';

const LinkCard: React.FC<{ link: Link }> = ({ link }) => (
    <a 
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center text-center bg-slate-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-slate-700/50 hover:-translate-y-1 group"
    >
        {link.icon ? (
            <div className="text-indigo-400 group-hover:text-white transition-colors duration-300 w-12 h-12 mb-4">
              {React.cloneElement(link.icon, { className: 'w-full h-full' })}
            </div>
        ) : (
            <div className="h-12 flex items-center mb-4">
              <span className="text-2xl font-bold text-indigo-400 group-hover:text-white transition-colors duration-300 font-teko">
                  {link.name}
              </span>
            </div>
        )}
        <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">{link.name}</h3>
    </a>
);

const Links: React.FC = () => {
    return (
        <section className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-12 uppercase tracking-wider" style={{ fontFamily: "'Teko', sans-serif" }}>
                    Vínculos
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
                    {links.map(link => <LinkCard key={link.name} link={link} />)}
                </div>
            </div>
        </section>
    );
};

export default Links;
