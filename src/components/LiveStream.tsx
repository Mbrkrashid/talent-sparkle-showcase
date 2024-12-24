import React from 'react';
import { Button } from "@/components/ui/button";
import { Video, Users } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const LiveStream = () => {
  const [isLive, setIsLive] = React.useState(false);
  const [viewerCount, setViewerCount] = React.useState(0);

  React.useEffect(() => {
    // Simulate random viewer count for demo
    if (isLive) {
      const interval = setInterval(() => {
        setViewerCount(Math.floor(Math.random() * 1000) + 100);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isLive]);

  return (
    <div className="bg-stage-dark border border-stage-gold/20 rounded-lg overflow-hidden">
      <div className="aspect-video bg-black relative">
        {isLive ? (
          <div className="w-full h-full flex items-center justify-center text-white">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
            >
              <source src="/placeholder-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-4 right-4 flex gap-2">
              <Badge variant="destructive" className="animate-pulse">
                LIVE
              </Badge>
              <Badge variant="secondary">
                <Users className="w-4 h-4 mr-1" />
                {viewerCount}
              </Badge>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-white gap-4">
            <Video className="w-12 h-12" />
            <p>Start Live Stream</p>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Judge Live Session</h3>
          <Button
            variant={isLive ? "destructive" : "default"}
            onClick={() => setIsLive(!isLive)}
          >
            {isLive ? "End Stream" : "Go Live"}
          </Button>
        </div>
        {isLive && (
          <div className="mt-4">
            <p className="text-gray-400">
              Live streaming to participants and audience. Chat functionality coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveStream;