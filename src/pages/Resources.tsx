
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ResourceCard, { ResourceType } from '@/components/ResourceCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Collect all resources from all pathways
import { pathways } from '@/data/pathways';
const allResources = pathways.flatMap(pathway => pathway.resources);

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [freeFilter, setFreeFilter] = useState<string>('all');
  
  const filteredResources = allResources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = typeFilter === 'all' || resource.type === typeFilter;
    const matchesFree = freeFilter === 'all' || 
                       (freeFilter === 'free' && resource.free) || 
                       (freeFilter === 'paid' && !resource.free);
    
    return matchesSearch && matchesType && matchesFree;
  });
  
  // Group by type for the tabs
  const courseResources = filteredResources.filter(r => r.type === 'course');
  const tutorialResources = filteredResources.filter(r => r.type === 'tutorial');
  const bookResources = filteredResources.filter(r => r.type === 'book');
  const otherResources = filteredResources.filter(r => !['course', 'tutorial', 'book'].includes(r.type));
  
  return (
    <Layout>
      <div className="container px-4 mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover curated resources to help you master technical skills. We've collected the best courses, tutorials, books, and more.
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search resources..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select 
              value={typeFilter} 
              onValueChange={setTypeFilter}
            >
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Resource Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="course">Courses</SelectItem>
                <SelectItem value="tutorial">Tutorials</SelectItem>
                <SelectItem value="book">Books</SelectItem>
                <SelectItem value="documentation">Documentation</SelectItem>
                <SelectItem value="video">Videos</SelectItem>
                <SelectItem value="article">Articles</SelectItem>
              </SelectContent>
            </Select>
            
            <Select 
              value={freeFilter} 
              onValueChange={setFreeFilter}
            >
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Resources</SelectItem>
                <SelectItem value="free">Free Only</SelectItem>
                <SelectItem value="paid">Paid Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
          </p>
        </div>
        
        {/* Resources by Type */}
        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="flex justify-center w-full">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="courses">Courses ({courseResources.length})</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials ({tutorialResources.length})</TabsTrigger>
            <TabsTrigger value="books">Books ({bookResources.length})</TabsTrigger>
            <TabsTrigger value="other">Other ({otherResources.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    link={resource.link}
                    free={resource.free}
                    tags={resource.tags}
                    provider={resource.provider}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">No resources found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
                <Button onClick={() => {
                  setSearchQuery('');
                  setTypeFilter('all');
                  setFreeFilter('all');
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  link={resource.link}
                  free={resource.free}
                  tags={resource.tags}
                  provider={resource.provider}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tutorials">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorialResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  link={resource.link}
                  free={resource.free}
                  tags={resource.tags}
                  provider={resource.provider}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="books">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  link={resource.link}
                  free={resource.free}
                  tags={resource.tags}
                  provider={resource.provider}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="other">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  link={resource.link}
                  free={resource.free}
                  tags={resource.tags}
                  provider={resource.provider}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Resources;
