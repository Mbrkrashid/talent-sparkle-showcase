import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface VideoCardProps {
  id: string;
  title: string;
  performer: string;
  thumbnailUrl: string;
  votes: number;
  onVote: () => void;
}

const VideoCard = ({ id, title, performer, thumbnailUrl, votes, onVote }: VideoCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden bg-stage-dark border-stage-gold/20 hover:border-stage-gold/40 transition-all duration-300">
      <div 
        className="relative cursor-pointer group"
        onClick={() => navigate(`/performance/${id}`)}
      >
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-lg">Watch Performance</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">Performed by {performer}</p>
        <div className="flex justify-between items-center">
          <Button 
            variant="outline"
            size="sm"
            className="border-stage-gold/50 hover:border-stage-gold text-stage-gold"
            onClick={(e) => {
              e.stopPropagation();
              onVote();
            }}
          >
            <Heart className="mr-2 h-4 w-4" />
            {votes} votes
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;