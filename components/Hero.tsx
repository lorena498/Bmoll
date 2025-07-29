import React, { useState, useEffect } from 'react';
import { videos, ARTIST_NAME, ICONS } from '../constants';
import type { Video } from '../types';

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const heroVideos = videos.slice(0, 5); // Using first 5 videos for the hero section

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
        }, 7000); // Auto-scroll every 7 seconds
        return () => clearInterval(interval);
    }, [heroVideos.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };
    
    const activeVideo: Video = heroVideos[currentIndex];

    return (
        <section className="h-screen relative bg-black text-white flex items-center justify-center overflow-hidden">
            {/* Background Images */}
            {heroVideos.map((video, index) => (
                <div
                    key={video.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${video.thumbnailUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    aria-hidden={index !== currentIndex}
                >
                     <div className="absolute inset-0 bg-black/60"></div>
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h1 
                    className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-widest" 
                    style={{ fontFamily: "'Teko', sans-serif", textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
                    {ARTIST_NAME}
                </h1>
                <p className="mt-2 text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 transition-all duration-500">
                    {activeVideo.title}
                </p>
                <a
                    href={activeVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    {ICONS.play && React.cloneElement(ICONS.play, {className: 'h-6 w-6 mr-2 -ml-1'})}
                    Ver Video
                </a>
            </div>
            
            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {heroVideos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
                        aria-label={`Go to video ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;