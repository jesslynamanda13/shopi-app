import React from 'react';
import IconSearch from './SearchIcon';

const Navbar = () => {
  return (
    <nav className="bg-slate-900">
      <div className="max-w-screen-xl flex flex-wrap mx-auto px-6 py-6 justify-between items-center">
        <span className="text-purple-300 text-4xl font-bold italic">*Shopi</span>
        <div className="flex items-center space-x-8">
          <div className="search-bar relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-6">
                  <IconSearch />
              </span>
              <input class="bg-green-950 h-12 pl-12 w-64 rounded-xl text-base focus:outline-none border border-green-400 border-spacing-2 custom-input"
                type="search" name="search" placeholder="Search"/>
          </div>
            <a href="/about" className="text-lg text-gray-500">About</a>
            <a href="#" className="text-lg text-gray-500">Contact Us</a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
