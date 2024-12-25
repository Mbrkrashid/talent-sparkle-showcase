import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Play } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import SocialShareButtons from './SocialShareButtons';

interface VideoCardProps {
  id: string;
  title: string;
  performer: string;
  thumbnailUrl: string;
  votes: number;
  type: string;
  isLive?: boolean;
  onVote: () => void;
}

const VideoCard = ({ id, title, performer, thumbnailUrl, votes, type, isLive, onVote }: VideoCardProps) => {
  const navigate = useNavigate();
  const shareUrl = `${window.location.origin}/performance/${id}`;

  return (
    <Card className="overflow-hidden bg-stage-dark border-stage-gold/20 hover:border-stage-gold/40 transition-all duration-300 group hover:shadow-lg hover:shadow-stage-gold/5">
      <div 
        className="relative cursor-pointer aspect-video overflow-hidden"
        onClick={() => navigate(`/performance/${id}`)}
      >
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
            <Play className="w-12 h-12 text-white" />
          </div>
        </div>
        {isLive && (
          <Badge 
            variant="destructive" 
            className="absolute top-2 right-2 animate-pulse"
          >
            LIVE
          </Badge>
        )}
        <Badge 
          variant="outline" 
          className="absolute top-2 left-2 bg-black/60 text-white border-none capitalize"
        >
          {type}
        </Badge>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white line-clamp-1 group-hover:text-stage-gold transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm">Performed by {performer}</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <Button 
            variant="outline"
            size="sm"
            className="border-stage-gold/50 hover:border-stage-gold text-stage-gold hover:bg-stage-gold/10 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onVote();
            }}
          >
            <Heart className="mr-2 h-4 w-4" />
            {votes} votes
          </Button>
          <SocialShareButtons url={shareUrl} title={`Check out ${performer}'s performance: ${title}`} />
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;