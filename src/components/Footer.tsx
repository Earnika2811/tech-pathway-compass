
import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t mt-auto">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-bold text-xl">
              <Compass className="h-5 w-5 text-tech-purple" />
              <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                TechPathway
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Navigating your technology learning journey with curated roadmaps and resources.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Pathways</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/pathways/web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/pathways/mobile-development" className="hover:text-primary transition-colors">Mobile Development</Link></li>
              <li><Link to="/pathways/data-science" className="hover:text-primary transition-colors">Data Science</Link></li>
              <li><Link to="/pathways/devops" className="hover:text-primary transition-colors">DevOps/Cloud</Link></li>
              <li><Link to="/pathways/cybersecurity" className="hover:text-primary transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/resources/courses" className="hover:text-primary transition-colors">Courses</Link></li>
              <li><Link to="/resources/books" className="hover:text-primary transition-colors">Books</Link></li>
              <li><Link to="/resources/tutorials" className="hover:text-primary transition-colors">Tutorials</Link></li>
              <li><Link to="/resources/career-info" className="hover:text-primary transition-colors">Career Info</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TechPathway. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-primary transition-colors">Twitter</Link>
            <Link to="#" className="hover:text-primary transition-colors">LinkedIn</Link>
            <Link to="#" className="hover:text-primary transition-colors">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
