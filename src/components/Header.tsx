
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Compass, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-30">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
          <Compass className="h-6 w-6 text-tech-purple" />
          <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            TechPathway
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/pathways" className="text-sm font-medium hover:text-tech-purple transition-colors">
            Explore Pathways
          </Link>
          <Link to="/resources" className="text-sm font-medium hover:text-tech-purple transition-colors">
            Resources
          </Link>
          <Link to="/community" className="text-sm font-medium hover:text-tech-purple transition-colors">
            Community
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-tech-purple transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button className="bg-tech-purple hover:bg-tech-blue" size="sm">
            <User className="h-4 w-4 mr-2" />
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
