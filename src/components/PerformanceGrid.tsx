import React from 'react';
import VideoCard from './VideoCard';
import { Badge } from "@/components/ui/badge";

interface Performance {
  id: string;
  title: string;
  performer: string;
  thumbnailUrl: string;
  votes: number;
  type: string;
  isLive?: boolean;
}

interface PerformanceGridProps {
  performances: Performance[];
  selectedType: string;
  onTypeSelect: (type: string) => void;
  onVote: (id: string) => void;
}

const PerformanceGrid = ({ performances, selectedType, onTypeSelect, onVote }: PerformanceGridProps) => {
  const filteredPerformances = selectedType === 'all' 
    ? performances 
    : performances.filter(perf => perf.type === selectedType);

  return (
    <div className="container mx-auto px-4">
      <div className="flex gap-2 mb-6">
        <Badge 
          variant={selectedType === 'all' ? 'default' : 'outline'}
          className="cursor-pointer"
          onClick={() => onTypeSelect('all')}
        >
          All
        </Badge>
        <Badge 
          variant={selectedType === 'singing' ? 'default' : 'outline'}
          className="cursor-pointer"
          onClick={() => onTypeSelect('singing')}
        >
          Singing
        </Badge>
        <Badge 
          variant={selectedType === 'dance' ? 'default' : 'outline'}
          className="cursor-pointer"
          onClick={() => onTypeSelect('dance')}
        >
          Dance
        </Badge>
        <Badge 
          variant={selectedType === 'comedy' ? 'default' : 'outline'}
          className="cursor-pointer"
          onClick={() => onTypeSelect('comedy')}
        >
          Comedy
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPerformances.map((performance) => (
          <VideoCard
            key={performance.id}
            {...performance}
            onVote={() => onVote(performance.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PerformanceGrid;