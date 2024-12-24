import React, { useState } from 'react';
import VideoCard from '@/components/VideoCard';
import UploadModal from '@/components/UploadModal';
import { toast } from '@/components/ui/use-toast';
import { Badge } from "@/components/ui/badge";
import SignupModal from '@/components/SignupModal';
import JudgesPanel from '@/components/JudgesPanel';
import LiveStream from '@/components/LiveStream';
import SponsoredVideoAd from '@/components/SponsoredVideoAd';

const initialPerformances = [
  {
    id: '1',
    title: 'Amazing Dance Performance',
    performer: 'John Doe',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434',
    votes: 15,
    type: 'dance',
    isLive: false,
  },
  {
    id: '2',
    title: 'Stand-up Comedy Night',
    performer: 'Sarah Johnson',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
    votes: 20,
    type: 'comedy',
    isLive: true,
  },
  {
    id: '3',
    title: 'Singing Performance',
    performer: 'Jane Smith',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
    votes: 10,
    type: 'singing',
    isLive: false,
  },
];

const sponsoredAds = [
  {
    id: 'ad1',
    title: 'Sponsor Message',
    company: 'TechCorp Nigeria',
    content: 'Supporting local talent across Arewa',
    videoUrl: 'https://example.com/sponsor-video.mp4', // Replace with actual video URL
    sponsorLink: 'https://example.com',
  }
];

const Index = () => {
  const [performances, setPerformances] = useState(initialPerformances);
  const [selectedType, setSelectedType] = useState<string>('all');

  const handleUpload = ({ title, performer, videoFile, type }: { title: string; performer: string; videoFile: File; type: string }) => {
    // In a real app, you would upload to a storage service
    const newPerformance = {
      id: String(performances.length + 1),
      title,
      performer,
      thumbnailUrl: URL.createObjectURL(videoFile), // Temporary URL for demo
      votes: 0,
      type,
      isLive: false,
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

  const filteredPerformances = selectedType === 'all' 
    ? performances 
    : performances.filter(perf => perf.type === selectedType);

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
        <div className="relative mt-8 flex justify-center gap-4">
          <UploadModal onUpload={handleUpload} />
          <SignupModal />
        </div>
      </div>

      {/* Judges Panel */}
      <div className="container mx-auto px-4 py-6">
        <JudgesPanel />
      </div>

      {/* Live Stream Section */}
      <div className="container mx-auto px-4 py-6">
        <LiveStream />
      </div>

      {/* Sponsored Video Ad */}
      <div className="container mx-auto px-4 py-6">
        {sponsoredAds.map(ad => (
          <SponsoredVideoAd
            key={ad.id}
            adUrl={ad.videoUrl}
            sponsorName={ad.company}
            sponsorLink={ad.sponsorLink}
          />
        ))}
      </div>

      {/* Performance Type Filter */}
      <div className="container mx-auto px-4">
        <div className="flex gap-2 mb-6">
          <Badge 
            variant={selectedType === 'all' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedType('all')}
          >
            All
          </Badge>
          <Badge 
            variant={selectedType === 'singing' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedType('singing')}
          >
            Singing
          </Badge>
          <Badge 
            variant={selectedType === 'dance' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedType('dance')}
          >
            Dance
          </Badge>
          <Badge 
            variant={selectedType === 'comedy' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedType('comedy')}
          >
            Comedy
          </Badge>
        </div>
      </div>

      {/* Sponsored Ad Section */}
      {sponsoredAds.length > 0 && (
        <div className="container mx-auto px-4 py-6">
          <div className="bg-stage-dark border border-stage-gold/30 rounded-lg p-4 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <Badge variant="secondary" className="mb-2">Sponsored</Badge>
                <h3 className="text-white text-lg font-semibold">{sponsoredAds[0].title}</h3>
                <p className="text-gray-400">{sponsoredAds[0].content}</p>
                <p className="text-stage-gold text-sm mt-2">Presented by {sponsoredAds[0].company}</p>
              </div>
              <img 
                src={sponsoredAds[0].thumbnailUrl} 
                alt="Sponsor" 
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Performances Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPerformances.map((performance) => (
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