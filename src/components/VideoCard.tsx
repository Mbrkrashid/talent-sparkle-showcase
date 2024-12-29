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
    <Card className="bg-transparent border-none overflow-hidden group cursor-pointer transition-transform duration-200 hover:-translate-y-1">
      <div 
        className="relative aspect-video rounded-xl overflow-hidden mb-3"
        onClick={() => navigate(`/performance/${id}`)}
      >
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-black/80 rounded-full p-3">
            <Play className="w-6 h-6 text-white" fill="white" />
          </div>
        </div>
        {isLive && (
          <Badge 
            variant="destructive" 
            className="absolute top-2 right-2 animate-pulse bg-red-600 hover:bg-red-600"
          >
            LIVE
          </Badge>
        )}
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded-md text-xs text-white">
          {type}
        </div>
      </div>

      <div className="px-1 space-y-2">
        <div>
          <h3 className="text-[14px] font-medium text-white line-clamp-2 leading-tight hover:text-gray-300 transition-colors">
            {title}
          </h3>
          <p className="text-[13px] text-[#AAAAAA] mt-1 hover:text-white transition-colors">
            {performer}
          </p>
        </div>
        
        <div className="flex justify-between items-center gap-2">
          <Button 
            variant="outline"
            size="sm"
            className="h-8 bg-[#272727] border-none text-white hover:bg-[#3f3f3f] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onVote();
            }}
          >
            <Heart className="mr-2 h-4 w-4" />
            {votes}
          </Button>
          <div className="flex-shrink-0">
            <SocialShareButtons url={shareUrl} title={`Check out ${performer}'s performance: ${title}`} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;