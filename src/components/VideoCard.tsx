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
    <Card className="bg-[#0f0f0f] border-none overflow-hidden group cursor-pointer hover:bg-[#272727] transition-colors duration-200">
      <div 
        className="relative aspect-video overflow-hidden"
        onClick={() => navigate(`/performance/${id}`)}
      >
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-2 right-2 bg-black/80 rounded-sm p-1">
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
        <Badge 
          variant="outline" 
          className="absolute bottom-2 left-2 bg-black/80 text-white border-none capitalize px-2 py-0.5 text-xs"
        >
          {type}
        </Badge>
      </div>
      <div className="p-3 space-y-2">
        <div>
          <h3 className="text-[14px] font-medium text-white line-clamp-2 leading-tight">
            {title}
          </h3>
          <p className="text-[13px] text-[#AAAAAA] mt-1">Performed by {performer}</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <Button 
            variant="outline"
            size="sm"
            className="h-8 bg-transparent border-[#3f3f3f] text-white hover:bg-[#272727] transition-colors"
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