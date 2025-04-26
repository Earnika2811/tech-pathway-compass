
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getPathwayBySlug } from '@/data/pathways';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PathwaySteps from '@/components/PathwaySteps';
import ResourceCard from '@/components/ResourceCard';
import { ArrowLeftIcon, Clock, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PathwayDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const pathway = getPathwayBySlug(slug || '');
  const [selectedStepId, setSelectedStepId] = useState<string | undefined>(
    pathway?.steps[0]?.id
  );
  
  if (!pathway) {
    return (
      <Layout>
        <div className="container px-4 py-16 mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Pathway Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the pathway you're looking for.</p>
          <Button asChild>
            <Link to="/pathways">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to All Pathways
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const selectedStep = pathway.steps.find(step => step.id === selectedStepId);
  const stepResources = selectedStep?.resources 
    ? pathway.resources.filter(resource => 
        selectedStep.resources?.includes(resource.id)
      )
    : [];
  
  return (
    <Layout>
      <div className="container px-4 mx-auto py-12">
        {/* Breadcrumb and Header */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Link to="/pathways" className="hover:text-foreground">
              Pathways
            </Link>
            <span className="mx-2">/</span>
            <span>{pathway.title}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-md bg-tech-light-purple text-tech-purple">
                  <pathway.icon className="h-6 w-6" />
                </div>
                <Badge variant="outline" className="text-sm">
                  {pathway.difficulty.charAt(0).toUpperCase() + pathway.difficulty.slice(1)}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold mb-2">{pathway.title}</h1>
              <p className="text-muted-foreground text-lg max-w-3xl">
                {pathway.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Start Learning
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {pathway.timeEstimate}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Key Skills */}
        <div className="mb-10">
          <h2 className="text-lg font-medium mb-3">Key Skills You'll Learn</h2>
          <div className="flex flex-wrap gap-2">
            {pathway.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Main Content Tabs */}
        <Tabs defaultValue="roadmap" className="space-y-8">
          <TabsList className="grid w-full md:w-auto grid-cols-3 md:inline-grid">
            <TabsTrigger value="roadmap">Learning Roadmap</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="careers">Career Paths</TabsTrigger>
          </TabsList>
          
          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="sticky top-20">
                  <h3 className="font-medium text-lg mb-4">Learning Path Steps</h3>
                  <PathwaySteps 
                    steps={pathway.steps.map(step => ({...step, completed: false}))} 
                    currentStep={selectedStepId}
                    onStepClick={(stepId) => setSelectedStepId(stepId)}
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                {selectedStep ? (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">{selectedStep.title}</h2>
                      <p className="text-muted-foreground">{selectedStep.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Estimated Time: {selectedStep.timeEstimate}</span>
                      </div>
                    </div>
                    
                    {selectedStep.skills?.length > 0 && (
                      <div>
                        <h3 className="font-medium mb-2">Skills Covered</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedStep.skills.map((skill) => (
                            <Badge key={skill} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {selectedStep.prerequisites?.length > 0 && (
                      <div>
                        <h3 className="font-medium mb-2">Prerequisites</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {selectedStep.prerequisites.map((prereq) => {
                            const prereqStep = pathway.steps.find(step => step.id === prereq);
                            return prereqStep ? (
                              <li key={prereq}>{prereqStep.title}</li>
                            ) : null;
                          })}
                        </ul>
                      </div>
                    )}
                    
                    {stepResources.length > 0 && (
                      <div>
                        <h3 className="font-medium mb-4">Recommended Resources</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {stepResources.map((resource) => (
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
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center p-12 border rounded-lg">
                    <p>Select a step to view details</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          {/* Resources Tab */}
          <TabsContent value="resources">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Learning Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pathway.resources.map((resource) => (
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
              </div>
            </div>
          </TabsContent>
          
          {/* Career Paths Tab */}
          <TabsContent value="careers">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Career Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pathway.jobRoles.map((role, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>{role.title}</CardTitle>
                          <Badge variant={role.demandLevel === 'high' ? 'default' : 'outline'}>
                            {role.demandLevel === 'high' ? 'High Demand' : role.demandLevel === 'medium' ? 'Medium Demand' : 'Low Demand'}
                          </Badge>
                        </div>
                        <CardDescription>{role.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Salary Range</h4>
                          <p className="text-muted-foreground">{role.salaryRange}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Required Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {role.requiredSkills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PathwayDetail;
