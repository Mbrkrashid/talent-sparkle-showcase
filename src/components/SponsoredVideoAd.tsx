import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

interface SponsoredVideoAdProps {
  adUrl: string;
  sponsorName: string;
  sponsorLink: string;
}

const SponsoredVideoAd = ({ adUrl, sponsorName, sponsorLink }: SponsoredVideoAdProps) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="bg-[#272727] rounded-xl overflow-hidden mb-6 relative group">
      <div className="relative">
        <video
          className="w-full aspect-video object-cover"
          autoPlay={isPlaying}
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={adUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Badge 
          variant="secondary" 
          className="absolute top-2 right-2 bg-[#272727]/90 text-white px-2 py-1"
        >
          Advertisement
        </Badge>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white font-medium">{sponsorName}</p>
            <p className="text-[#AAAAAA] text-sm">Sponsored Content</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#272727] border-none text-white hover:bg-[#3f3f3f] transition-colors"
            onClick={() => window.open(sponsorLink, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SponsoredVideoAd;