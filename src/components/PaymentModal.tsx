import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loadStripe } from '@stripe/stripe-js';
import { CreditCard } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const PaymentModal = () => {
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    try {
      // In a real app, you would:
      // 1. Call your backend to create a Stripe payment intent
      // 2. Use Stripe.js to handle the payment
      // 3. Show success/error message
      toast({
        title: "Payment Successful",
        description: "Thank you for supporting our talent!",
      });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-stage-gold text-stage-dark hover:bg-stage-gold/90">
          <CreditCard className="mr-2 h-4 w-4" />
          Support Talent
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-stage-dark border-stage-gold/20">
        <DialogHeader>
          <DialogTitle className="text-white">Support Your Favorite Talent</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="amount" className="text-white">Amount (USD)</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-black/20 border-stage-gold/20 text-white"
              placeholder="Enter amount"
            />
          </div>
          <Button 
            onClick={handlePayment}
            className="w-full bg-stage-gold text-stage-dark hover:bg-stage-gold/90"
          >
            Pay Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;