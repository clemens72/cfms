'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const donationSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  amount: z.enum(['25', '50', '100', '250', 'custom'], {
    required_error: "Please select a donation amount",
  }),
  customAmount: z.string().optional()
    .refine(val => {
      if (val === undefined || val === '') return true;
      return !isNaN(parseFloat(val)) && parseFloat(val) > 0;
    }, {
      message: "Please enter a valid donation amount",
    }),
  recurringDonation: z.boolean().default(false),
  message: z.string().optional(),
  honorOf: z.string().optional(),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions" }),
  }),
});

type DonationFormValues = z.infer<typeof donationSchema>;

export function DonateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const defaultValues: Partial<DonationFormValues> = {
    firstName: '',
    lastName: '',
    email: '',
    amount: '25',
    customAmount: '',
    recurringDonation: false,
    message: '',
    honorOf: '',
    agreeToTerms: true,
  };

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues,
  });

  const watchAmount = form.watch('amount');

  async function onSubmit(data: DonationFormValues) {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would implement payment processing
      console.log(data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Donation successful!",
        description: "Thank you for your generous support.",
      });
      
      form.reset(defaultValues);
    } catch (error) {
      toast({
        title: "Donation failed",
        description: "There was an error processing your donation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Email <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Donation Details</h3>
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Select Donation Amount <span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                      <div className="flex items-center space-x-2 border p-3 rounded-lg">
                        <RadioGroupItem value="25" id="amount-25" />
                        <FormLabel htmlFor="amount-25" className="font-normal cursor-pointer">$25</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-lg">
                        <RadioGroupItem value="50" id="amount-50" />
                        <FormLabel htmlFor="amount-50" className="font-normal cursor-pointer">$50</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-lg">
                        <RadioGroupItem value="100" id="amount-100" />
                        <FormLabel htmlFor="amount-100" className="font-normal cursor-pointer">$100</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-lg">
                        <RadioGroupItem value="250" id="amount-250" />
                        <FormLabel htmlFor="amount-250" className="font-normal cursor-pointer">$250</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-lg md:col-span-4">
                        <RadioGroupItem value="custom" id="amount-custom" />
                        <FormLabel htmlFor="amount-custom" className="font-normal cursor-pointer flex-grow">
                          Custom Amount
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {watchAmount === 'custom' && (
              <FormField
                control={form.control}
                name="customAmount"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Enter Custom Amount <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input 
                          placeholder="Enter amount" 
                          {...field} 
                          className="pl-8"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="recurringDonation"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-6">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Make this a monthly recurring donation</FormLabel>
                    <FormDescription>
                      Your card will be charged the same amount every month.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="honorOf"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormLabel>Donate in Honor Of (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Name of person honored by this donation"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    If you'd like to make this donation in honor or memory of someone
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add a personal message or note"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Add any additional information or special instructions for your donation
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="bg-muted/30 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Payment Information</h3>
            <p className="text-muted-foreground mb-4">
              In a fully implemented donation system, secure payment processing would be integrated here.
            </p>
            <div className="border border-dashed border-muted-foreground/40 rounded-lg p-8 text-center">
              <p>Payment processing integration would be implemented here using a secure payment processor like Stripe.</p>
            </div>
          </div>

          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to the terms and conditions <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormDescription>
                    By submitting this form, you agree to our{" "}
                    <a href="/terms" className="text-primary underline">
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-primary underline">
                      privacy policy
                    </a>
                    .
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Complete Donation"}
          </Button>
        </form>
      </Form>
    </div>
  );
}