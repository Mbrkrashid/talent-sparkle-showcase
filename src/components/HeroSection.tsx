import React from 'react';
import UploadModal from './UploadModal';
import SignupModal from './SignupModal';

const HeroSection = () => {
  return (
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
        <UploadModal onUpload={() => {}} />
        <SignupModal />
      </div>
    </div>
  );
};

export default HeroSection;