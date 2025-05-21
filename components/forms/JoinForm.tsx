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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const membershipSchema = z.object({
  membershipType: z.enum(['new', 'renewal'], {
    required_error: "Please select a membership type",
  }),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters",
  }),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  age: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  secondEmail: z.string().email({
    message: "Please enter a valid email address",
  }).optional().or(z.literal('')),
  bandName: z.string().optional(),
  bandWebsite: z.string().url({
    message: "Please enter a valid URL",
  }).optional().or(z.literal('')),
  membershipLevel: z.string({
    required_error: "Please select a membership level",
  }),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions" }),
  }),
});

type MembershipFormValues = z.infer<typeof membershipSchema>;

export function JoinForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const defaultValues: Partial<MembershipFormValues> = {
    membershipType: 'new',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    age: '',
    phone: '',
    email: '',
    secondEmail: '',
    bandName: '',
    bandWebsite: '',
    membershipLevel: '',
    agreeToTerms: true,
  };

  const form = useForm<MembershipFormValues>({
    resolver: zodResolver(membershipSchema),
    defaultValues,
  });

  async function onSubmit(data: MembershipFormValues) {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your backend
      console.log(data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Membership submission successful!",
        description: "Thank you for joining the Columbus Folk Music Society.",
      });
      
      form.reset(defaultValues);
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error processing your submission. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const membershipLevels = [
    { value: "individual", label: "Individual ($20)", amount: 20 },
    { value: "band", label: "Band ($25)", amount: 25 },
    { value: "household", label: "Household ($25)", amount: 25 },
    { value: "goodFriend", label: "Good Friend ($50)", amount: 50 },
    { value: "sponsor", label: "Sponsor ($100)", amount: 100 },
    { value: "silver", label: "Silver ($250)", amount: 250 },
    { value: "patron", label: "Patron ($200)", amount: 200 },
    { value: "gold", label: "Gold [Life Member] ($500)", amount: 500 },
  ];

  const ageRanges = [
    { value: "under18", label: "Under 18" },
    { value: "18-24", label: "18-24" },
    { value: "25-34", label: "25-34" },
    { value: "35-44", label: "35-44" },
    { value: "45-54", label: "45-54" },
    { value: "55-64", label: "55-64" },
    { value: "65+", label: "65+" },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Membership Type</h3>
            <FormField
              control={form.control}
              name="membershipType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="new" id="new" />
                        <FormLabel htmlFor="new" className="font-normal">New Membership</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="renewal" id="renewal" />
                        <FormLabel htmlFor="renewal" className="font-normal">Renewal</FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Street address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Zip code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age Range</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ageRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone number" {...field} />
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
                    <FormLabel>Email <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="secondEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Second Email</FormLabel>
                    <FormControl>
                      <Input placeholder="For household or band (optional)" {...field} />
                    </FormControl>
                    <FormDescription>
                      Optional for household or band membership
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Band Information (if applicable)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="bandName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Band Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Band name (if band membership)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bandWebsite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Band Website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourband.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg border">
            <h3 className="text-xl font-bold mb-4">Membership Level</h3>
            <FormField
              control={form.control}
              name="membershipLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Membership Level <span className="text-destructive">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a membership level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {membershipLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            {isSubmitting ? "Processing..." : "Submit Membership"}
          </Button>
        </form>
      </Form>
    </div>
  );
}