import React, { useState } from 'react';
import VideoCard from '@/components/VideoCard';
import UploadModal from '@/components/UploadModal';
import { toast } from '@/components/ui/use-toast';

// Temporary mock data - this would come from your backend
const initialPerformances = [
  {
    id: '1',
    title: 'Amazing Dance Performance',
    performer: 'John Doe',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434',
    votes: 15,
  },
  {
    id: '2',
    title: 'Singing Performance',
    performer: 'Jane Smith',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
    votes: 10,
  },
];

const Index = () => {
  const [performances, setPerformances] = useState(initialPerformances);

  const handleUpload = ({ title, performer, videoFile }: { title: string; performer: string; videoFile: File }) => {
    // In a real app, you would upload to a storage service
    const newPerformance = {
      id: String(performances.length + 1),
      title,
      performer,
      thumbnailUrl: URL.createObjectURL(videoFile), // Temporary URL for demo
      votes: 0,
    };
    
    setPerformances([newPerformance, ...performances]);
    toast({
      title: "Performance Uploaded!",
      description: "Your performance has been successfully uploaded.",
    });
  };

  const handleVote = (id: string) => {
    setPerformances(performances.map(perf => 
      perf.id === id ? { ...perf, votes: perf.votes + 1 } : perf
    ));
    toast({
      title: "Vote Recorded!",
      description: "Thank you for voting for this performance.",
    });
  };

  return (
    <div className="min-h-screen bg-stage-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 bg-stage-gold/10" />
        <div className="absolute inset-0 bg-spotlight animate-spotlight" />
        <h1 className="relative text-4xl font-bold text-white sm:text-6xl">
          Arewa Idol Season 1
        </h1>
        <p className="relative mt-4 text-lg text-gray-300">
          Showcase your talent and let Arewa vote!
        </p>
        <div className="relative mt-8">
          <UploadModal onUpload={handleUpload} />
        </div>
      </div>

      {/* Performances Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performances.map((performance) => (
            <VideoCard
              key={performance.id}
              {...performance}
              onVote={() => handleVote(performance.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;