
import React from 'react';
import { tracks } from '../constants';
import type { Track } from '../types';

const TrackItem: React.FC<{ track: Track }> = ({ track }) => (
    <div className="flex items-center bg-slate-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-slate-700/50">
        <img src={track.albumArtUrl} alt={track.title} className="w-20 h-20 rounded-md object-cover mr-4" />
        <div className="flex-grow">
            <h3 className="text-lg font-bold text-white">{track.title}</h3>
            <p className="text-gray-400">{track.artist}</p>
        </div>
        <a 
            href={track.streamUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 text-sm whitespace-nowrap">
            Listen
        </a>
    </div>
);

const Music: React.FC = () => {
    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-12 uppercase tracking-wider" style={{ fontFamily: "'Teko', sans-serif" }}>
                    Música
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {tracks.map(track => <TrackItem key={track.id} track={track} />)}
                </div>
            </div>
        </section>
    );
};

export default Music;