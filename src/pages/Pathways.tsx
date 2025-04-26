
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { pathways } from '@/data/pathways';
import PathwayCard from '@/components/PathwayCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Search } from 'lucide-react';

type DifficultyFilter = 'all' | 'beginner' | 'intermediate' | 'advanced' | 'expert';

const Pathways = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  
  const filteredPathways = pathways.filter((pathway) => {
    const matchesSearch = pathway.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pathway.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pathway.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDifficulty = difficultyFilter === 'all' || pathway.difficulty === difficultyFilter;
    
    return matchesSearch && matchesDifficulty;
  });
  
  return (
    <Layout>
      <div className="container px-4 mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Technology Learning Pathways</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover structured learning paths for various technology domains. Each pathway includes step-by-step guidance, resources, and career insights.
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search pathways or skills..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select 
              value={difficultyFilter} 
              onValueChange={(value) => setDifficultyFilter(value as DifficultyFilter)}
            >
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPathways.length} {filteredPathways.length === 1 ? 'pathway' : 'pathways'}
          </p>
        </div>
        
        {/* Pathways Grid */}
        {filteredPathways.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPathways.map((pathway) => (
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
        ) : (
          <div className="text-center py-16 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">No pathways found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
            <Button onClick={() => {
              setSearchQuery('');
              setDifficultyFilter('all');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Pathways;
