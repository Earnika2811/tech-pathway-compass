
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export type PathwayCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  timeEstimate: string;
  slug: string;
};

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-blue-100 text-blue-800',
  advanced: 'bg-purple-100 text-purple-800',
  expert: 'bg-red-100 text-red-800',
};

const PathwayCard = ({ title, description, icon, skills, difficulty, timeEstimate, slug }: PathwayCardProps) => {
  return (
    <Card className="tech-card animate-fade-in overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="p-2 rounded-md bg-tech-light-purple text-tech-purple">
            {icon}
          </div>
          <Badge variant="outline" className={`${difficultyColors[difficulty]} border-none`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
        <CardTitle className="text-xl mt-2">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2 mt-2 mb-4">
          {skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="font-normal">
              {skill}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="outline" className="font-normal">
              +{skills.length - 3} more
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">Est. Time: {timeEstimate}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/pathways/${slug}`}>View Roadmap</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PathwayCard;
