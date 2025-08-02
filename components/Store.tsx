
import React from 'react';
import { ICONS } from '../constants';
import type { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    if (product.videoUrl) {
        return (
            <a href={product.videoUrl} target="_blank" rel="noopener noreferrer" className="block bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 group">
                <div className="relative">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white/80 group-hover:text-white group-hover:scale-110 transition-transform duration-300">
                            {ICONS.play}
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-400 text-sm">Haz clic para ver el video</p>
                </div>
            </a>
        );
    }

    return (
        <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 group">
            <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-indigo-400 text-2xl font-semibold mb-4">${product.price!.toFixed(2)}</p>
                <button className="w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                    {ICONS.cart}
                    Añadir al Carrito
                </button>
            </div>
        </div>
    );
};

interface StoreProps {
  products: Product[];
}

const Store: React.FC<StoreProps> = ({ products }) => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 uppercase tracking-wider" style={{ fontFamily: "'Teko', sans-serif" }}>
          Nuestra Tienda
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map(product => <ProductCard key={product.id} product={product} />)
          ) : (
            <p className="col-span-full text-center text-gray-400">La tienda está vacía por ahora. ¡Vuelve pronto!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Store;
