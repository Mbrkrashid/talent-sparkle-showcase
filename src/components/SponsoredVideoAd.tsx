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
    <div className="bg-stage-dark border border-stage-gold/20 rounded-lg overflow-hidden mb-8">
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
          className="absolute top-2 right-2 bg-black/60 text-white"
        >
          Sponsored
        </Badge>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white font-semibold">Sponsored by {sponsorName}</p>
            <p className="text-gray-400 text-sm">Support local talent</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-stage-gold/50 hover:border-stage-gold text-stage-gold"
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