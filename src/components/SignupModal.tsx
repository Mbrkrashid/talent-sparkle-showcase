import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Mail, UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SignupFormData {
  name: string;
  email: string;
  bio: string;
  profileImage: string;
}

const SignupModal = () => {
  const form = useForm<SignupFormData>();

  const onSubmit = (data: SignupFormData) => {
    console.log('Signup data:', data);
    // TODO: Implement actual signup logic
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-stage-gold text-stage-dark hover:bg-stage-gold/90">
          <UserPlus className="mr-2 h-4 w-4" />
          Join as Participant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-stage-dark border-stage-gold/20">
        <DialogHeader>
          <DialogTitle className="text-white">Join Arewa Idol</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} className="bg-stage-dark/50 border-stage-gold/20 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} className="bg-stage-dark/50 border-stage-gold/20 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Bio</FormLabel>
                  <FormControl>
                    <Input placeholder="Tell us about yourself" {...field} className="bg-stage-dark/50 border-stage-gold/20 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-4">
              <Button type="submit" className="w-full bg-stage-gold text-stage-dark hover:bg-stage-gold/90">
                Sign Up
              </Button>
              <Button type="button" variant="outline" className="w-full border-stage-gold/50 text-stage-gold hover:bg-stage-gold/10">
                <Mail className="mr-2 h-4 w-4" />
                Continue with Gmail
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;