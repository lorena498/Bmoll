
import React, { useState } from 'react';
import type { Product, Video } from '../types';

interface AdminProps {
  videos: Video[];
  products: Product[];
  setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Admin: React.FC<AdminProps> = ({ videos, products, setVideos, setProducts }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const ADMIN_PASSWORD = 'admin'; // For demonstration purposes. In a real app, this should be handled securely.

  const [newVideo, setNewVideo] = useState({ title: '', description: '', thumbnailUrl: '', videoUrl: '' });
  const [newProduct, setNewProduct] = useState({ name: '', price: 0, imageUrl: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
      setPassword('');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (dataUrl: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVideo.title || !newVideo.videoUrl || !newVideo.thumbnailUrl) {
        alert("Por favor, rellena el título, la URL del video y sube una miniatura.");
        return;
    }
    const videoToAdd: Video = { ...newVideo, id: Date.now() };
    setVideos(current => [videoToAdd, ...current]);
    setNewVideo({ title: '', description: '', thumbnailUrl: '', videoUrl: '' });
     (e.target as HTMLFormElement).reset();
  };

  const handleDeleteVideo = (id: number) => {
    if (window.confirm('¿Seguro que quieres eliminar este video?')) {
        setVideos(current => current.filter(v => v.id !== id));
    }
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.imageUrl) {
        alert("Por favor, rellena el nombre, el precio y sube una imagen.");
        return;
    }
    const productToAdd: Product = { ...newProduct, id: Date.now() };
    setProducts(current => [productToAdd, ...current]);
    setNewProduct({ name: '', price: 0, imageUrl: '' });
    (e.target as HTMLFormElement).reset();
  };

  const handleDeleteProduct = (id: number) => {
    if (window.confirm('¿Seguro que quieres eliminar este producto?')) {
      setProducts(current => current.filter(p => p.id !== id));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-slate-900 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm p-8 bg-slate-800 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-white font-teko">Panel de Administración</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full px-4 py-2 mb-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Password"
            />
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen text-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold font-teko uppercase tracking-wider">Administrador de Contenido</h1>
           <a href="#/" className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Volver al Sitio
            </a>
        </div>
        
        {/* Manage Videos */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-3xl font-bold font-teko mb-6">Gestionar Videos</h2>
          <form onSubmit={handleAddVideo} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input type="text" placeholder="Título del Video" value={newVideo.title} onChange={e => setNewVideo({...newVideo, title: e.target.value})} className="col-span-1 md:col-span-2 bg-slate-700 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="text" placeholder="URL del Video (YouTube, etc.)" value={newVideo.videoUrl} onChange={e => setNewVideo({...newVideo, videoUrl: e.target.value})} className="bg-slate-700 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="text" placeholder="Descripción" value={newVideo.description} onChange={e => setNewVideo({...newVideo, description: e.target.value})} className="bg-slate-700 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Miniatura (subir imagen)</label>
                <input type="file" accept="image/*" onChange={e => handleFileChange(e, url => setNewVideo({...newVideo, thumbnailUrl: url}))} className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"/>
            </div>
            <button type="submit" className="col-span-1 md:col-span-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">Añadir Video</button>
          </form>
          <div className="space-y-4">
            {videos.map(video => (
              <div key={video.id} className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                <img src={video.thumbnailUrl} alt={video.title} className="w-20 h-12 object-cover rounded-md mr-4"/>
                <span className="flex-grow text-white">{video.title}</span>
                <button onClick={() => handleDeleteVideo(video.id)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm">Eliminar</button>
              </div>
            ))}
          </div>
        </div>

        {/* Manage Products */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold font-teko mb-6">Gestionar Tienda</h2>
           <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input type="text" placeholder="Nombre del Producto" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="col-span-1 md:col-span-2 bg-slate-700 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="number" placeholder="Precio" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: parseFloat(e.target.value) || 0})} className="bg-slate-700 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
             <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Imagen del Producto</label>
                <input type="file" accept="image/*" onChange={e => handleFileChange(e, url => setNewProduct({...newProduct, imageUrl: url}))} className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"/>
            </div>
            <button type="submit" className="col-span-1 md:col-span-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">Añadir Producto</button>
          </form>
          <div className="space-y-4">
            {products.map(product => (
              <div key={product.id} className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                 <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover rounded-md mr-4"/>
                <span className="flex-grow text-white">{product.name} - ${product.price.toFixed(2)}</span>
                <button onClick={() => handleDeleteProduct(product.id)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm">Eliminar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
