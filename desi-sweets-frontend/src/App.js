import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navbar */}
      <nav className="bg-white/80 dark:bg-gray-900/80 shadow flex items-center justify-between px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-pink-700 dark:text-yellow-300">Desi Sweets</span>
        </div>
        <div className="flex gap-4">
          <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-pink-600">Home</a>
          <a href="#shop" className="text-gray-700 dark:text-gray-200 hover:text-pink-600">Shop</a>
          <a href="#categories" className="text-gray-700 dark:text-gray-200 hover:text-pink-600">Categories</a>
          <a href="#blog" className="text-gray-700 dark:text-gray-200 hover:text-pink-600">Blog</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-pink-600">Contact</a>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-1 rounded bg-pink-600 text-white hover:bg-pink-700">Login</button>
          <button className="px-4 py-1 rounded bg-yellow-400 text-gray-900 hover:bg-yellow-500">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-pink-700 dark:text-yellow-300 mb-4">Welcome to Desi Sweets</h1>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl">Discover the authentic taste of tradition. Shop the finest local sweets, delivered fresh to your door.</p>
        <a href="#shop" className="inline-block px-8 py-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 font-semibold text-lg transition">Shop Now</a>
      </header>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-900/80 text-center py-4 mt-auto shadow-inner">
        <p className="text-gray-600 dark:text-gray-300">&copy; {new Date().getFullYear()} Desi Sweets. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
