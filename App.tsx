
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Store from './components/Store';
import Videos from './components/Videos';
import Music from './components/Music';
import Links from './components/Links';
import Footer from './components/Footer';

const App: React.FC = () => {
  const videosRef = useRef<HTMLDivElement>(null);
  const storeRef = useRef<HTMLDivElement>(null);
  const musicRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-slate-900 min-h-screen text-gray-100 font-sans">
      <Header 
        onVideosClick={() => scrollTo(videosRef)}
        onStoreClick={() => scrollTo(storeRef)}
        onMusicClick={() => scrollTo(musicRef)}
        onLinksClick={() => scrollTo(linksRef)}
      />
      <main>
        <Hero />
        <div ref={videosRef}>
          <Videos />
        </div>
        <div ref={storeRef}>
          <Store />
        </div>
        <div ref={musicRef}>
          <Music />
        </div>
        <div ref={linksRef}>
          <Links />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
