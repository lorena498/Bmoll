
import React from 'react';
import { ICONS } from '../constants';
import type { Video } from '../types';

const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
    return (
        <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="block bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 group">
            <div className="relative">
                <img src={video.thumbnailUrl} alt={video.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white/80 group-hover:text-white group-hover:scale-110 transition-transform duration-300">
                        {ICONS.play}
                    </div>
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-gray-400 text-sm">{video.description}</p>
            </div>
        </a>
    );
};

interface VideosProps {
    videos: Video[];
}

const Videos: React.FC<VideosProps> = ({ videos }) => {
    return (
        <section className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-12 uppercase tracking-wider" style={{ fontFamily: "'Teko', sans-serif" }}>
                    Videos Recientes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {videos.length > 0 ? (
                        videos.map(video => <VideoCard key={video.id} video={video} />)
                    ) : (
                        <p className="col-span-full text-center text-gray-400">No hay videos disponibles por el momento.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Videos;
