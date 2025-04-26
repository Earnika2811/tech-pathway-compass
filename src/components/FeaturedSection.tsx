
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Compass, Book, File, Layers, User } from 'lucide-react';

const features = [
  {
    title: 'Personalized Learning Paths',
    description: 'Tailored roadmaps based on your goals and experience level.',
    icon: <Compass className="h-6 w-6 text-tech-purple" />,
  },
  {
    title: 'Curated Resources',
    description: 'Handpicked courses, books, and tutorials for each skill level.',
    icon: <Book className="h-6 w-6 text-tech-purple" />,
  },
  {
    title: 'Progress Tracking',
    description: 'Track your learning journey with interactive progress indicators.',
    icon: <Layers className="h-6 w-6 text-tech-purple" />,
  },
  {
    title: 'Career Insights',
    description: 'Explore job roles and required skills for each tech pathway.',
    icon: <User className="h-6 w-6 text-tech-purple" />,
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose TechPathway</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Navigate your technology learning journey with our comprehensive roadmaps and resources tailored for every skill level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border bg-card text-card-foreground hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="mb-4 w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
