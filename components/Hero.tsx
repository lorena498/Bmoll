
import React, { useState, useEffect } from 'react';
import { ARTIST_NAME } from '../constants';
import type { Video } from '../types';

interface HeroProps {
    videos: Video[];
}

const Hero: React.FC<HeroProps> = ({ videos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const heroVideos = videos.slice(0, 5);

    useEffect(() => {
        if (heroVideos.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
        }, 7000); // Auto-scroll every 7 seconds
        return () => clearInterval(interval);
    }, [heroVideos.length]);
    
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    if (heroVideos.length === 0) {
        return (
            <section className="h-screen relative bg-black text-white flex items-center justify-center overflow-hidden">
                <div className="relative z-10 text-center px-4">
                    <h1 
                        className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-widest" 
                        style={{ fontFamily: "'Teko', sans-serif", textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
                        {ARTIST_NAME}
                    </h1>
                    <p className="mt-2 text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
                        Contenido Próximamente.
                    </p>
                </div>
            </section>
        );
    }

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
                <a href={activeVideo.videoUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-indigo-600/80 hover:bg-indigo-500/80 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm uppercase tracking-widest text-lg shadow-lg">
                    Ver Video
                </a>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {heroVideos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
