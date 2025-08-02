
import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Store from './components/Store';
import Videos from './components/Videos';
import Links from './components/Links';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Chatbot from './components/Chatbot';
import { products as defaultProducts, videos as defaultVideos } from './constants';
import type { Product, Video } from './types';


const App: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>(() => {
    try {
      const storedVideos = localStorage.getItem('b-moll-videos');
      return storedVideos ? JSON.parse(storedVideos) : defaultVideos;
    } catch (error) {
      console.error("Error parsing videos from localStorage", error);
      return defaultVideos;
    }
  });

  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const storedProducts = localStorage.getItem('b-moll-products');
      return storedProducts ? JSON.parse(storedProducts) : defaultProducts;
    } catch (error) {
      console.error("Error parsing products from localStorage", error);
      return defaultProducts;
    }
  });

  const [view, setView] = useState('main');

  useEffect(() => {
    localStorage.setItem('b-moll-videos', JSON.stringify(videos));
  }, [videos]);

  useEffect(() => {
    localStorage.setItem('b-moll-products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/admin') {
        setView('admin');
      } else {
        setView('main');
      }
    };
    window.addEventListener('hashchange', handleHashChange, false);
    handleHashChange();
    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);

  const videosRef = useRef<HTMLDivElement>(null);
  const storeRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  if (view === 'admin') {
    return <Admin 
              videos={videos} 
              products={products}
              setVideos={setVideos} 
              setProducts={setProducts} 
           />;
  }

  return (
    <div className="bg-slate-900 min-h-screen text-gray-100 font-sans">
      <Header 
        onVideosClick={() => scrollTo(videosRef)}
        onStoreClick={() => scrollTo(storeRef)}
        onLinksClick={() => scrollTo(linksRef)}
        onChatbotClick={() => scrollTo(chatbotRef)}
      />
      <main>
        <Hero videos={videos} />
        <div ref={videosRef}>
          <Videos videos={videos} />
        </div>
        <div ref={storeRef}>
          <Store products={products} />
        </div>
        <div ref={linksRef}>
          <Links />
        </div>
        <div ref={chatbotRef}>
          <Chatbot />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;