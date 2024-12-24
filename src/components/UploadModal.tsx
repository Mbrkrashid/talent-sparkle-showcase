import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from 'lucide-react';

interface UploadModalProps {
  onUpload: (data: { title: string; performer: string; videoFile: File }) => void;
}

const UploadModal = ({ onUpload }: UploadModalProps) => {
  const [title, setTitle] = useState('');
  const [performer, setPerformer] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && performer && videoFile) {
      onUpload({ title, performer, videoFile });
      setTitle('');
      setPerformer('');
      setVideoFile(null);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-stage-gold text-black hover:bg-stage-gold/90">
          <Upload className="mr-2 h-4 w-4" />
          Upload Performance
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-stage-dark border-stage-gold/20">
        <DialogHeader>
          <DialogTitle className="text-white">Upload Your Performance</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-white">Performance Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-black/20 border-stage-gold/20 text-white"
              placeholder="Enter performance title"
            />
          </div>
          <div>
            <Label htmlFor="performer" className="text-white">Performer Name</Label>
            <Input
              id="performer"
              value={performer}
              onChange={(e) => setPerformer(e.target.value)}
              className="bg-black/20 border-stage-gold/20 text-white"
              placeholder="Enter performer name"
            />
          </div>
          <div>
            <Label htmlFor="video" className="text-white">Video File</Label>
            <Input
              id="video"
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
              className="bg-black/20 border-stage-gold/20 text-white"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-stage-gold text-black hover:bg-stage-gold/90"
            disabled={!title || !performer || !videoFile}
          >
            Upload Performance
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;