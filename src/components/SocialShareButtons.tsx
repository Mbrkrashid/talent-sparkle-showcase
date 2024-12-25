import React from 'react';
import { Button } from "@/components/ui/button";
import { Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShareButtons = ({ url, title }: SocialShareProps) => {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={shareOnFacebook}>
        <Facebook className="h-4 w-4 mr-2" />
        Share
      </Button>
      <Button variant="outline" size="sm" onClick={shareOnTwitter}>
        <Twitter className="h-4 w-4 mr-2" />
        Tweet
      </Button>
      <Button variant="outline" size="sm" onClick={shareOnLinkedIn}>
        <Linkedin className="h-4 w-4 mr-2" />
        Post
      </Button>
    </div>
  );
};

export default SocialShareButtons;