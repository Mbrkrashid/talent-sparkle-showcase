import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart } from 'lucide-react';

const PerformanceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, fetch performance details from your backend
  const performance = {
    id,
    title: 'Amazing Dance Performance',
    performer: 'John Doe',
    videoUrl: 'https://example.com/video.mp4', // This would be a real video URL
    votes: 15,
    description: 'An incredible dance performance that will leave you speechless!',
  };

  return (
    <div className="min-h-screen bg-stage-dark p-6">
      <Button 
        variant="ghost" 
        className="text-white mb-6"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Performances
      </Button>

      <div className="container mx-auto max-w-4xl">
        <div className="bg-black/20 rounded-lg overflow-hidden">
          <div className="aspect-video bg-black">
            {/* This would be your video player component */}
            <div className="w-full h-full flex items-center justify-center text-white">
              Video Player Placeholder
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-3xl font-bold text-white">{performance.title}</h1>
          <p className="text-gray-400 mt-2">Performed by {performance.performer}</p>
          
          <div className="flex items-center mt-4">
            <Button variant="outline" className="border-stage-gold/50 text-stage-gold">
              <Heart className="mr-2 h-4 w-4" />
              {performance.votes} votes
            </Button>
          </div>

          <p className="mt-6 text-gray-300">{performance.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDetails;