
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export type ResourceType = 'course' | 'book' | 'tutorial' | 'documentation' | 'video' | 'article';

export interface ResourceCardProps {
  title: string;
  description: string;
  type: ResourceType;
  link: string;
  free: boolean;
  tags: string[];
  provider?: string;
}

const resourceTypeIcons: Record<ResourceType, string> = {
  course: '🎓',
  book: '📚',
  tutorial: '📝',
  documentation: '📋',
  video: '🎥',
  article: '📰',
};

const ResourceCard = ({ title, description, type, link, free, tags, provider }: ResourceCardProps) => {
  return (
    <Card className="tech-card">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{resourceTypeIcons[type]}</span>
            <Badge variant={free ? 'outline' : 'default'}>
              {free ? 'Free' : 'Paid'}
            </Badge>
          </div>
        </div>
        <CardTitle className="text-lg mt-2">{title}</CardTitle>
        {provider && <p className="text-sm text-muted-foreground">By {provider}</p>}
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-muted-foreground mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Resource
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
