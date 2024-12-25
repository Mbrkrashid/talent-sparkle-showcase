import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import PerformanceGrid from '@/components/PerformanceGrid';
import JudgesPanel from '@/components/JudgesPanel';
import LiveStream from '@/components/LiveStream';
import SponsoredVideoAd from '@/components/SponsoredVideoAd';
import PaymentModal from '@/components/PaymentModal';
import { toast } from '@/components/ui/use-toast';

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
    videoUrl: 'https://example.com/sponsor-video.mp4',
    sponsorLink: 'https://example.com',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81'
  }
];

const Index = () => {
  const [performances, setPerformances] = useState(initialPerformances);
  const [selectedType, setSelectedType] = useState<string>('all');

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
      <HeroSection />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-end mb-4">
          <PaymentModal />
        </div>
        <JudgesPanel />
      </div>

      <div className="container mx-auto px-4 py-6">
        <LiveStream />
      </div>

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

      <PerformanceGrid
        performances={performances}
        selectedType={selectedType}
        onTypeSelect={setSelectedType}
        onVote={handleVote}
      />
    </div>
  );
};

export default Index;