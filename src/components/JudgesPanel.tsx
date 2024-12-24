import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const judges = [
  {
    id: 1,
    name: "Judge Sarah",
    role: "Music Expert",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: 2,
    name: "Judge Michael",
    role: "Dance Professional",
    avatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
  },
  {
    id: 3,
    name: "Judge David",
    role: "Comedy Specialist",
    avatar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
];

const JudgesPanel = () => {
  return (
    <div className="bg-stage-dark border border-stage-gold/20 rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">Meet Our Judges</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {judges.map((judge) => (
          <div key={judge.id} className="flex flex-col items-center space-y-3">
            <Avatar className="w-24 h-24 border-2 border-stage-gold">
              <AvatarImage src={judge.avatar} alt={judge.name} />
              <AvatarFallback>{judge.name[0]}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">{judge.name}</h3>
              <p className="text-gray-400">{judge.role}</p>
              <div className="flex justify-center mt-2">
                <Star className="h-5 w-5 text-stage-gold" fill="currentColor" />
                <Star className="h-5 w-5 text-stage-gold" fill="currentColor" />
                <Star className="h-5 w-5 text-stage-gold" fill="currentColor" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JudgesPanel;