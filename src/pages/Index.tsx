
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import PathwayCard from '@/components/PathwayCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getPopularPathways } from '@/data/pathways';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const popularPathways = getPopularPathways(3);
  
  return (
    <Layout>
      <HeroSection />
      
      <FeaturedSection />
      
      {/* Popular Pathways Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold">Popular Learning Pathways</h2>
              <p className="text-muted-foreground mt-2">Start your journey with our most popular tech pathways</p>
            </div>
            
            <Button asChild variant="ghost">
              <Link to="/pathways" className="flex items-center">
                View All Pathways
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPathways.map((pathway) => (
              <PathwayCard
                key={pathway.id}
                title={pathway.title}
                description={pathway.description}
                icon={<pathway.icon className="h-6 w-6" />}
                skills={pathway.skills}
                difficulty={pathway.difficulty}
                timeEstimate={pathway.timeEstimate}
                slug={pathway.slug}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get personalized guidance and track your progress as you learn new tech skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="animated-gradient text-white">
              <Link to="/pathways">
                Explore All Pathways
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/assessment">
                Take Skill Assessment
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
