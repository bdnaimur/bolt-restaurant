import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ShoppingBag, User, MessageCircle } from 'lucide-react';

const Header = ({ cartItemCount, toggleChat }) => {
  return (
    <header className="bg-orange-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <ChefHat size={32} />
          <h1 className="text-2xl font-bold">TastyBites</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/checkout" className="hover:text-orange-200 transition-colors duration-200 flex items-center">
                <ShoppingBag size={20} className="mr-1" />
                Cart ({cartItemCount})
              </Link>
            </li>
            <li>
              <button onClick={toggleChat} className="hover:text-orange-200 transition-colors duration-200 flex items-center">
                <MessageCircle size={20} className="mr-1" />
                Chat
              </button>
            </li>
            <li>
              <a href="#" className="hover:text-orange-200 transition-colors duration-200 flex items-center">
                <User size={20} className="mr-1" />
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;