
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Compass, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-tech-light-purple rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-tech-light-blue rounded-full blur-3xl opacity-40"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Navigate Your Tech Learning Journey
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Discover structured learning paths, curated resources, and skills tracking for your technology career.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="animated-gradient text-white">
                <Link to="/pathways">
                  <Compass className="mr-2 h-5 w-5" />
                  Explore Pathways
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/assessment">
                  <Search className="mr-2 h-5 w-5" />
                  Find Your Path
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-gradient-to-br from-tech-blue to-tech-purple p-1 rounded-xl shadow-xl">
                <div className="bg-background rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="Technology Learning Path" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-tech-light-purple rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
