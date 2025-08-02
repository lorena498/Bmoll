
import React from 'react';
import type { Product, Video, Link } from './types';

export const ARTIST_NAME = "B-MOLL";

export const BMOLL_LOGO = (
    <svg aria-label={`${ARTIST_NAME} Logo`} role="img" className="w-auto h-8" viewBox="0 0 110 30">
        <text
            x="0"
            y="25"
            fontFamily="Teko, sans-serif"
            fontSize="30"
            fontWeight="500"
            fill="white"
            letterSpacing="1.5"
        >
            B<tspan fill="#818cf8">-</tspan>MOLL
        </text>
    </svg>
);


export const products: Product[] = [
  { id: 2, name: 'Playera Logo Blanco', price: 30.00, imageUrl: 'https://picsum.photos/seed/shirt1/400/400' },
  { id: 3, name: 'Gorra Edición Limitada', price: 35.00, imageUrl: 'https://picsum.photos/seed/cap2/400/400' },
  { id: 4, name: 'Playera Gira 2024', price: 30.00, imageUrl: 'https://picsum.photos/seed/shirt2/400/400' },
];

export const videos: Video[] = [
  { id: 1, title: 'La Diabla - Xavi', description: 'Video Oficial.', thumbnailUrl: 'https://i.ytimg.com/vi/GQ4O14kqZuo/hqdefault.jpg', videoUrl: 'https://www.youtube.com/watch?v=GQ4O14kqZuo' },
  { id: 2, title: 'Nuevo Sencillo Oficial', description: 'El video oficial de nuestro más reciente lanzamiento.', thumbnailUrl: 'https://i.ytimg.com/vi/X7HmWrbk8bo/hqdefault.jpg', videoUrl: 'https://www.youtube.com/watch?v=X7HmWrbk8bo' },
  { id: 3, title: 'Live Session Acústica', description: 'Una versión íntima de nuestras canciones favoritas.', thumbnailUrl: 'https://i.ytimg.com/vi/b_0pX-MLNx4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/watch?v=b_0pX-MLNx4' },
  { id: 4, title: 'Si Me Llamas', description: 'Video Oficial.', thumbnailUrl: 'https://i.ytimg.com/vi/LncQmAuL2F4/hqdefault.jpg', videoUrl: 'https://www.youtube.com/watch?v=LncQmAuL2F4' },
  { id: 5, title: 'X (EQUIS) - Nicky Jam x J Balvin', description: 'Video Oficial.', thumbnailUrl: 'https://i.ytimg.com/vi/H5DoyCvhuHk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/watch?v=H5DoyCvhuHk' },
  { id: 6, title: 'DÁKITI - BAD BUNNY x JHAY CORTEZ', description: 'Video Oficial.', thumbnailUrl: 'https://i.ytimg.com/vi/T2urNjF5g4A/hqdefault.jpg', videoUrl: 'https://www.youtube.com/watch?v=T2urNjF5g4A' },
  { id: 7, title: 'Mora, Feid - LA INOCENTE', description: 'Video Oficial.', thumbnailUrl: 'https://i.ytimg.com/vi/bWODU2wARKE/hqdefault.jpg', videoUrl: 'https://www.youtube.com/watch?v=bWODU2wARKE' },
  { id: 8, title: 'KAROL G - PROVENZA', description: 'Video Oficial.', thumbnailUrl: 'https://i.ytimg.com/vi/b0Gvnfy4NwA/hqdefault.jpg', videoUrl: 'https://www.youtube.com/watch?v=b0Gvnfy4NwA' },
  { id: 9, title: 'Myke Towers - LALA', description: 'Video Oficial.', thumbnailUrl: 'https://i.ytimg.com/vi/sDHWUOwZTjY/hqdefault.jpg', videoUrl: 'https://www.youtube.com/watch?v=sDHWUOwZTjY' },
  { id: 10, title: 'Rauw Alejandro - SANTA', description: 'Video Oficial.', thumbnailUrl: 'https://i.ytimg.com/vi/LAY1Awj2vEI/hqdefault.jpg', videoUrl: 'https://www.youtube.com/watch?v=LAY1Awj2vEI' },
  { id: 11, title: 'ROSALÍA - BIZCOCHITO', description: 'Video Oficial.', thumbnailUrl: 'https://i.ytimg.com/vi/MExFDp0pmGc/hqdefault.jpg', videoUrl: 'https://www.youtube.com/watch?v=MExFDp0pmGc' },
  { id: 12, title: 'Quevedo || BZRP Music Sessions #52', description: 'Video Oficial.', thumbnailUrl: 'https://i.ytimg.com/vi/7hAyeIjtBNk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/watch?v=7hAyeIjtBNk' }
];

export const ICONS = {
  youtube: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>,
  instagram: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281-.073-1.689-.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 6.162c-3.205 0-5.838 2.633-5.838 5.838s2.633 5.838 5.838 5.838 5.838-2.633 5.838-5.838-2.633-5.838-5.838-5.838zm0 9.662c-2.121 0-3.838-1.717-3.838-3.838s1.717-3.838 3.838-3.838 3.838 1.717 3.838 3.838-1.717 3.838-3.838-3.838zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>,
  soundcloud: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.533 11.021c.01-.005 3.59-1.995 3.59-1.995.882-.473 1.092.202.234.68l-3.56 1.997s-1.075.596-1.075-1.005c0-1.601.816-.677.811.323zm10.931 1.218c-1.334 2.895-4.896 4.733-8.159 4.733-4.882 0-7.306-3.125-7.306-6.425 0-3.958 3.235-6.577 6.463-6.577 2.76 0 4.024.935 4.024 2.438 0 1.25-1.02 1.638-1.02 1.638s-2.18.737-2.18 2.062c0 1.45 2.193.925 2.193.925s3.525-.338 3.525-3.325c0-2.463-1.638-4.025-4.575-4.025-4.588 0-8.238 3.638-8.238 8.163 0 4.163 3.387 7.737 8.3 7.737 5.175 0 9.075-3.85 9.075-8.875 0-2.225-.9-3.887-2.438-3.887s-2.075.975-2.075 2.25c0 1.138.813 1.925 1.875 1.925 1.225 0 1.55-.913 1.55-1.263z"/></svg>,
  spotify: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.75 13.92c-.24.41-.77.53-1.18.29-3.1-1.85-6.93-2.29-11.45-1.26-.48.1-.97-.18-1.08-.66s.18-.97.66-1.08c4.95-1.12 9.17-.63 12.63 1.48.41.24.53.77.29 1.18zm1.22-2.73c-.29.49-0.88.64-1.37.35-3.23-1.95-8.12-2.52-12.2-1.39-.58.16-1.17-.2-1.32-.78s.2-1.17.78-1.32c4.6-1.24 9.94-.58 13.62 2.2.49.29.64.88.35 1.37zM19.1 11.8c-.35.58-1.02.76-1.6.41-3.6-2.16-9.42-2.73-13.2-1.5-.66.21-1.35-.17-1.56-.83s.17-1.35.83-1.56c4.27-1.34 10.53-.72 14.62 1.77.58.35.76 1.02.41 1.6z"/></svg>,
  tiktok: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02c1.31-.02 2.63-.01 3.94 0 .34.01.68.02.93.22.25.2.4.48.45.77.05.29.02.58.01.87-.01 2.93-.01 5.86-.02 8.79-.01 1.47-.86 2.58-2.18 2.92-1.33.34-2.67.24-3.95-.23-.3-.11-.56-.3-.78-.54-.22-.24-.4-.52-.52-.81-.12-.3-.17-.61-.16-.93.01-2.92.01-5.85.01-8.77 0-.41.22-.72.59-.87.37-.15.76-.14 1.14-.14h.01zM16.96 8.7c.01-.9.01-1.79.02-2.69 0-.36.25-.62.61-.71.36-.09.73-.03 1.09.08.36.11.62.36.78.67.16.31.23.64.23.98v9.1c0 1.02-.32 1.95-1.02 2.68-.7.73-1.62 1.1-2.67 1.1-1.3 0-2.48-.52-3.38-1.52c-.9-1-1.36-2.2-1.36-3.56 0-1.7.67-3.18 1.81-4.29s2.6-1.68 4.3-1.5z"/></svg>,
  apple: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M15.59,13.25c-1.33,0-2.48,0.7-3.52,0.73c-1.05,0.03-2.03-0.7-3.29-0.7c-2.25,0-4.14,1.82-4.14,4.25c0,2.44,1.83,3.75,3.95,3.75c1.23,0,2.33-0.73,3.46-0.73c1.13,0,2.1,0.73,3.43,0.73c2.16,0,3.92-1.42,3.92-3.75C19.85,14.86,17.75,13.25,15.59,13.25z M14.65,9.41c0.82-1,1.33-2.31,1.26-3.71c-1.33,0.09-2.69,0.85-3.52,1.83c-0.74,0.88-1.46,2.22-1.31,3.58C12.43,11.2,13.82,10.4,14.65,9.41z" /></svg>,
  amazon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16.27,11.23C14.79,10.06,12.24,9.1,9.3,9.1c-4.48,0-8.11,3.63-8.11,8.11c0,4.48,3.63,8.11,8.11,8.11c2.61,0,4.92-1.24,6.44-3.15c0.16-0.2,0.18-0.48,0.05-0.71c-0.13-0.23-0.38-0.35-0.63-0.35h-1.63c-0.37,0-0.69,0.27-0.75,0.64c-0.7,3.6-4.04,6.3-7.98,5.55c-3.12-0.59-5.5-3.32-5.41-6.52c0.04-1.49,0.6-2.89,1.55-3.99c1.27-1.45,3.02-2.33,4.94-2.33c1.1,0,2.14,0.23,3.06,0.65c0.23,0.1,0.5-0.03,0.59-0.26l1.23-2.96c0.09-0.22,0.01-0.48-0.18-0.62C17.5,11.63,16.89,11.4,16.27,11.23z M22.81,0.65C22.2-0.02,21.03-0.23,20.06,0.24L5.8,7.72C5.32,7.96,5,8.47,5,9.03c0,0.18,0.05,0.36,0.14,0.52L11,19.34c0.24,0.41,0.72,0.66,1.22,0.66c0.16,0,0.32-0.03,0.48-0.09c0.66-0.25,1.1-0.88,1.03-1.58l-1.62-10.74l10.34-5.23C23.04,2.09,23.42,1.31,22.81,0.65z"/></svg>,
  threads: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.1,8.73c-1.38,0.23-2.5,1-3.14,2.2c-0.42,0.8-0.6,1.69-0.57,2.6c0.03,0.91,0.3,1.79,0.78,2.54c0.75,1.17,1.96,1.93,3.36,2.05c1.86,0.16,3.53-0.86,4.35-2.52c0.26-0.52,0.42-1.08,0.48-1.66h-2.1c-0.19,0.38-0.48,0.7-0.84,0.89c-0.57,0.3-1.25,0.29-1.82-0.02c-0.52-0.29-0.9-0.78-1.07-1.35c-0.16-0.57-0.11-1.18,0.14-1.71c0.29-0.61,0.82-1.07,1.46-1.28c0.57-0.19,1.18-0.13,1.71,0.14c0.24,0.12,0.46,0.28,0.65,0.47h2.12c-0.34-0.9-0.89-1.69-1.63-2.27C15.84,8.81,14.95,8.6,14.1,8.73z M3.5,12c0,3.51,2.11,6.54,5.1,7.84V4.16C5.61,5.46,3.5,8.49,3.5,12z" /></svg>,
  snapchat: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.2,2.01c-5.2,0.01-6.73,2.37-6.84,2.53c-0.28,0.4-0.12,0.95,0.33,1.19c0.21,0.11,0.46,0.13,0.68,0.06c0.11-0.03,0.3-0.15,0.63-0.44c0.22-0.2,0.6-0.46,1.18-0.65c1.37-0.46,2.67-0.18,3.7,0.29c0.28,0.13,0.61,0.04,0.8-0.21c0.19-0.25,0.2-0.59,0.01-0.86c-0.47-0.65-1.1-1.2-1.84-1.56C12.8,2.06,12.5,2.01,12.2,2.01z M19.49,5.73c-0.11-0.23-0.32-0.39-0.56-0.44c-3.13-0.64-6.3-0.1-8.8,1.21c-2.29,1.2-4,3.2-4.57,5.56c-0.27,1.11-0.3,2.25-0.1,3.35c0.07,0.36,0.35,0.64,0.71,0.68c0.06,0.01,0.11,0.01,0.17,0.01c0.29,0,0.57-0.17,0.69-0.45c0.18-0.43,0.58-2.25,2.16-3.69c1.07-0.97,2.33-1.57,3.68-1.74c0.1,0,0.19-0.01,0.29-0.01c1.86,0,3.56,0.85,4.72,2.21c0.55,0.64,0.9,1.38,1.1,2.19c0.07,0.3,0.31,0.53,0.61,0.57c0.06,0.01,0.11,0.01,0.17,0.01c0.29,0,0.57-0.17,0.69-0.45c0.23-0.56,0.38-1.15,0.43-1.75c0.19-2.2-0.53-4.38-1.99-6.04C21.09,7.47,20.35,6.53,19.49,5.73z" /></svg>,
  deezer: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.083,7.5H6.333V9.25H2.083V7.5z M2.083,11.25H6.333V13H2.083V11.25z M2.083,15H6.333V16.75H2.083V15z M8.417,15H12.667V16.75H8.417V15z M8.417,11.25H12.667V13H8.417V11.25z M8.417,7.5H12.667V9.25H8.417V7.5z M8.417,3.75H12.667V5.5H8.417V3.75z M14.75,11.25H19V13H14.75V11.25z M14.75,7.5H19V9.25H14.75V7.5z M14.75,3.75H19V5.5H14.75V3.75z M14.75,15H19V16.75H14.75V15z M21.083,3.75H25.333V5.5H21.083V3.75z M21.083,7.5H25.333V9.25H21.083V7.5z M21.083,11.25H25.333V13H21.083V11.25z M21.083,15H25.333V16.75H21.083V15z M21.083,18.75H25.333V20.5H21.083V18.75z"/></svg>,
  cart: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.922.778h10.428a1 1 0 00.922-.778l.305-1.222H17a1 1 0 100-2H3zM16.172 7l-1.391 5.564A2 2 0 0112.89 14H7.11a2 2 0 01-1.89-1.436L3.828 7h12.344zM5 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM15 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" /></svg>,
  play: <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
};


export const socialLinks = {
  instagram: 'https://instagram.com/bmoll_24',
  spotify: 'https://open.spotify.com/artist/0aD8QCpjYBYZDKxdJPv4jR',
  appleMusic: 'https://music.apple.com/mx/artist/b-moll/1756715437',
  audiomack: 'https://audiomack.com/b-moll',
  amazonMusic: 'https://music.amazon.com.mx/artists/B0D96LQ24V',
  tidal: 'https://tidal.com/browse/artist/49003641',
  trebel: 'https://trebel.io/artist?id=39668444',
  soundcloud: 'https://on.soundcloud.com/3Tgkd7FNepE5QBv17',
  deezer: 'https://dzr.page.link/w7eNWcRDpNXaRUvN6',
  tiktok: 'https://tiktok.com/@bmoll_24',
  threads: 'https://threads.net/@bmoll_24',
  snapchat: 'https://snapchat.com/add/b-moll',
  likee: 'https://share.like-video.com/e/g/0cpR8py4Ub9/-MX',
  kwai: 'https://kwai-video.com/u/@B-moll_24/n1Ca143I',
  youtube: 'https://www.youtube.com/channel/UCbFcSCNcKPquqraQUNygK-w',
};

export const links: Link[] = [
    { name: 'Instagram', url: socialLinks.instagram, icon: ICONS.instagram },
    { name: 'Spotify', url: socialLinks.spotify, icon: ICONS.spotify },
    { name: 'Apple Music', url: socialLinks.appleMusic, icon: ICONS.apple },
    { name: 'TikTok', url: socialLinks.tiktok, icon: ICONS.tiktok },
    { name: 'SoundCloud', url: socialLinks.soundcloud, icon: ICONS.soundcloud },
    { name: 'Amazon Music', url: socialLinks.amazonMusic, icon: ICONS.amazon },
    { name: 'Deezer', url: socialLinks.deezer, icon: ICONS.deezer },
    { name: 'Threads', url: socialLinks.threads, icon: ICONS.threads },
    { name: 'Snapchat', url: socialLinks.snapchat, icon: ICONS.snapchat },
    { name: 'Audiomack', url: socialLinks.audiomack },
    { name: 'TIDAL', url: socialLinks.tidal },
    { name: 'Trebel', url: socialLinks.trebel },
    { name: 'Likee', url: socialLinks.likee },
    { name: 'Kwai', url: socialLinks.kwai },
];