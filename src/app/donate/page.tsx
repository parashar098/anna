'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPin, Upload } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useToast } from "@/hooks/use-toast";
import MapView from "@/components/map-view";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const formSchema = z.object({
  foodType: z.string().min(1, "Please select a food type."),
  quantity: z.string().min(1, "Quantity is required."),
  pickupAddress: z.string().min(5, "Pickup address is required."),
  expiryTime: z.date({
    required_error: "Expiry date is required.",
  }),
  image: z.any().optional(),
})

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');
const storyImage = PlaceHolderImages.find(p => p.id === 'story-2');

export default function DonateFoodPage() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            foodType: "",
            quantity: "",
            pickupAddress: "",
            image: undefined,
        },
    });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Donation Registered!",
      description: "Your food donation has been successfully registered. A volunteer will be in touch shortly.",
      variant: "default",
    });
    form.reset();
  }
    
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Make a Donation</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your contribution can make a huge difference. Thank you for helping us fight hunger.
          </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
            <Card className="shadow-2xl rounded-2xl">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold font-headline">Donation Form</CardTitle>
                    <CardDescription>Fill out the details below to schedule a food pickup.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="foodType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Food Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select what you're donating" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="prepared-meals">Prepared Meals</SelectItem>
                                  <SelectItem value="groceries">Groceries (Fruits, Veggies)</SelectItem>
                                  <SelectItem value="bakery">Bakery Items</SelectItem>
                                  <SelectItem value="canned-goods">Canned Goods</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         <FormField
                          control={form.control}
                          name="quantity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Quantity</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., 10 meals, 5 kg" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                       <FormField
                          control={form.control}
                          name="expiryTime"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Best Before / Expiry Time</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date < new Date() || date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                      <FormField
                        control={form.control}
                        name="pickupAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pickup Address</FormLabel>
                            <div className="relative">
                              <FormControl>
                                <Input placeholder="Enter your full address" {...field} />
                              </FormControl>
                              <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-1 h-8 w-8">
                                <MapPin className="h-5 w-5 text-muted-foreground" />
                              </Button>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                       <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Food Image (Optional)</FormLabel>
                            <FormControl>
                              <div className="relative border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                                <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                                <p className="mt-2 text-sm text-muted-foreground">
                                  <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                                </p>
                                <Input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => field.onChange(e.target.files)} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full rounded-full text-lg py-6 bg-accent text-accent-foreground hover:bg-accent/90">
                        Register Donation
                      </Button>
                    </form>
                  </Form>
                </CardContent>
            </Card>
        </div>
        <div className="space-y-8">
            {storyImage && (
                <Image
                    src={storyImage.imageUrl}
                    alt={storyImage.description}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg object-cover aspect-video"
                    data-ai-hint={storyImage.imageHint}
                />
            )}
            <h3 className="text-2xl font-semibold font-headline">How It Works</h3>
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
                <li><span className="font-semibold text-foreground">Fill the Form:</span> Provide details about the food you want to donate.</li>
                <li><span className="font-semibold text-foreground">Schedule Pickup:</span> Set a convenient time and location for our volunteers.</li>
                <li><span className="font-semibold text-foreground">Volunteer Collects:</span> An AnnaSewa volunteer will pick up the donation.</li>
                <li><span className="font-semibold text-foreground">Food is Distributed:</span> Your donation reaches those who need it most through our NGO partners.</li>
            </ol>
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                <MapView />
            </div>
        </div>
      </div>
    </div>
  );
}
