
import React from 'react';
import { Check } from 'lucide-react';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';

export type PathwayStep = {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  completed?: boolean;
};

interface PathwayStepsProps {
  steps: PathwayStep[];
  currentStep?: string;
  onStepClick?: (stepId: string) => void;
}

const PathwaySteps = ({ steps, currentStep, onStepClick }: PathwayStepsProps) => {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const isActive = currentStep === step.id;
        const isCompleted = step.completed;
        
        return (
          <React.Fragment key={step.id}>
            <div 
              className={cn(
                "relative flex items-start p-4 rounded-md transition-all cursor-pointer",
                isActive ? "bg-accent" : "hover:bg-muted",
                isCompleted && "bg-accent/50"
              )}
              onClick={() => onStepClick && onStepClick(step.id)}
            >
              <div className="mr-4 mt-0.5">
                <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border text-center",
                  isCompleted ? "bg-primary border-primary" : "border-muted-foreground",
                  isActive && !isCompleted && "border-primary"
                )}>
                  {isCompleted ? (
                    <Check className="h-4 w-4 text-primary-foreground" />
                  ) : (
                    <span className={cn(
                      "text-sm",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}>
                      {index + 1}
                    </span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-4 top-12 h-[calc(100%-2rem)] w-px translate-x-[15px] bg-border" />
                )}
              </div>
              <div className="space-y-1">
                <div className="font-medium leading-none">{step.title}</div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                <p className="text-xs text-muted-foreground">Estimated time: {step.timeEstimate}</p>
              </div>
            </div>
            {index < steps.length - 1 && <Separator className="hidden" />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default PathwaySteps;
