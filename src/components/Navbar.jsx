import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Menu, X } from 'lucide-react';

function NavLink({ to, children }) {
  return (
    <Link 
      to={to} 
      className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Stethoscope className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-800">HealthCare</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/benefits">Benefits</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link 
              to="/signin" 
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-light transition-colors ml-4"
            >
              Sign In
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/benefits">Benefits</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link 
              to="/signin"
              className="block w-full bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-light transition-colors mt-4 text-center"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}