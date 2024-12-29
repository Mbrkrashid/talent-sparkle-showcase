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
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <Badge 
          variant={selectedType === 'all' ? 'default' : 'outline'}
          className="cursor-pointer bg-[#272727] hover:bg-[#3f3f3f] text-white border-none px-3 py-1 rounded-full whitespace-nowrap"
          onClick={() => onTypeSelect('all')}
        >
          All
        </Badge>
        <Badge 
          variant={selectedType === 'singing' ? 'default' : 'outline'}
          className="cursor-pointer bg-[#272727] hover:bg-[#3f3f3f] text-white border-none px-3 py-1 rounded-full whitespace-nowrap"
          onClick={() => onTypeSelect('singing')}
        >
          Singing
        </Badge>
        <Badge 
          variant={selectedType === 'dance' ? 'default' : 'outline'}
          className="cursor-pointer bg-[#272727] hover:bg-[#3f3f3f] text-white border-none px-3 py-1 rounded-full whitespace-nowrap"
          onClick={() => onTypeSelect('dance')}
        >
          Dance
        </Badge>
        <Badge 
          variant={selectedType === 'comedy' ? 'default' : 'outline'}
          className="cursor-pointer bg-[#272727] hover:bg-[#3f3f3f] text-white border-none px-3 py-1 rounded-full whitespace-nowrap"
          onClick={() => onTypeSelect('comedy')}
        >
          Comedy
        </Badge>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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