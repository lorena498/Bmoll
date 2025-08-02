
import React, { useState, useEffect } from 'react';
import { BMOLL_LOGO, ICONS, socialLinks } from '../constants';

interface HeaderProps {
    onVideosClick: () => void;
    onStoreClick: () => void;
    onLinksClick: () => void;
    onChatbotClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onVideosClick, onStoreClick, onLinksClick, onChatbotClick }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' });}} className="transition-transform duration-300 hover:scale-105 group">
                        <div className="group-hover:[filter:drop-shadow(0_0_3px_rgba(129,140,248,0.7))] transition-all duration-300">
                            {BMOLL_LOGO}
                        </div>
                    </a>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <button onClick={onVideosClick} className="text-gray-300 hover:text-white transition-colors duration-200 uppercase tracking-widest text-sm">Videos</button>
                    <button onClick={onStoreClick} className="text-gray-300 hover:text-white transition-colors duration-200 uppercase tracking-widest text-sm">Tienda</button>
                    <button onClick={onLinksClick} className="text-gray-300 hover:text-white transition-colors duration-200 uppercase tracking-widest text-sm">Vínculos</button>
                    <button onClick={onChatbotClick} className="text-gray-300 hover:text-white transition-colors duration-200 uppercase tracking-widest text-sm">AI Chat</button>
                </nav>
                <div className="flex items-center space-x-4">
                    <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">{ICONS.tiktok}</a>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">{ICONS.instagram}</a>
                    <a href={socialLinks.soundcloud} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">{ICONS.soundcloud}</a>
                    <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">{ICONS.youtube}</a>
                </div>
            </div>
        </header>
    );
};

export default Header;