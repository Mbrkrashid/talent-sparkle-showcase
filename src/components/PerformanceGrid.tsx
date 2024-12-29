import React from 'react';
import VideoCard from './VideoCard';
import { Badge } from "@/components/ui/badge";
import SponsoredVideoAd from './SponsoredVideoAd';

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

  // Insert an ad after every 4 videos
  const performancesWithAds = filteredPerformances.reduce((acc: (Performance | 'ad')[], curr, idx) => {
    acc.push(curr);
    if ((idx + 1) % 4 === 0) {
      acc.push('ad');
    }
    return acc;
  }, []);

  return (
    <div className="w-full bg-[#0f0f0f] min-h-screen">
      <div className="container mx-auto px-4">
        {/* Top Ad Section */}
        <div className="mb-6">
          <SponsoredVideoAd
            adUrl="/sponsored-video.mp4"
            sponsorName="Premium Sponsor"
            sponsorLink="https://example.com"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide sticky top-0 z-10 bg-[#0f0f0f] pt-4">
          <Badge 
            variant={selectedType === 'all' ? 'default' : 'outline'}
            className="cursor-pointer bg-[#272727] hover:bg-[#3f3f3f] text-white border-none px-4 py-1.5 rounded-full whitespace-nowrap text-sm"
            onClick={() => onTypeSelect('all')}
          >
            All
          </Badge>
          <Badge 
            variant={selectedType === 'singing' ? 'default' : 'outline'}
            className="cursor-pointer bg-[#272727] hover:bg-[#3f3f3f] text-white border-none px-4 py-1.5 rounded-full whitespace-nowrap text-sm"
            onClick={() => onTypeSelect('singing')}
          >
            Singing
          </Badge>
          <Badge 
            variant={selectedType === 'dance' ? 'default' : 'outline'}
            className="cursor-pointer bg-[#272727] hover:bg-[#3f3f3f] text-white border-none px-4 py-1.5 rounded-full whitespace-nowrap text-sm"
            onClick={() => onTypeSelect('dance')}
          >
            Dance
          </Badge>
          <Badge 
            variant={selectedType === 'comedy' ? 'default' : 'outline'}
            className="cursor-pointer bg-[#272727] hover:bg-[#3f3f3f] text-white border-none px-4 py-1.5 rounded-full whitespace-nowrap text-sm"
            onClick={() => onTypeSelect('comedy')}
          >
            Comedy
          </Badge>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {performancesWithAds.map((item, index) => (
            item === 'ad' ? (
              <div key={`ad-${index}`} className="col-span-full">
                <SponsoredVideoAd
                  adUrl="/sponsored-video.mp4"
                  sponsorName="Featured Sponsor"
                  sponsorLink="https://example.com"
                />
              </div>
            ) : (
              <VideoCard
                key={item.id}
                {...item}
                onVote={() => onVote(item.id)}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceGrid;