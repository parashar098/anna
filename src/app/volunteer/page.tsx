'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Badge } from '@/components/ui/badge';
import MapView from '@/components/map-view';
import { MapPin, Route, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


const donations = [
    { id: 1, foodType: 'Prepared Meals', quantity: '25 meals', from: 'Green Leaf Cafe', distance: '2.5 km' },
    { id: 2, foodType: 'Bakery Items', quantity: '10 boxes', from: 'The Corner Bakery', distance: '3.1 km' },
    { id: 3, foodType: 'Groceries', quantity: '5 bags', from: 'Urban Farms', distance: '4.8 km' },
];

const topVolunteersData = [
  { name: 'Alice', pickups: 32, fill: 'hsl(var(--chart-1))' },
  { name: 'Bob', pickups: 28, fill: 'hsl(var(--chart-2))' },
  { name: 'Charlie', pickups: 25, fill: 'hsl(var(--chart-1))' },
  { name: 'Diana', pickups: 21, fill: 'hsl(var(--chart-2))' },
  { name: 'Eve', pickups: 18, fill: 'hsl(var(--chart-1))' },
];

const chartConfig = {
    pickups: { label: 'Pickups' },
}

export default function VolunteerPage() {
    const { toast } = useToast();

    const handleAcceptPickup = (donationId: number) => {
        const donation = donations.find(d => d.id === donationId);
        if (donation) {
            toast({
                title: "Pickup Accepted!",
                description: `You have accepted the pickup for ${donation.quantity} of ${donation.foodType} from ${donation.from}.`,
            });
        }
    };
    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                    {/* Active Donations */}
                    <section>
                        <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8">Active Donations</h1>
                        <div className="space-y-6">
                            {donations.map(donation => (
                                <Card key={donation.id} className="shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <CardTitle>{donation.foodType}</CardTitle>
                                        <Badge variant="secondary">{donation.quantity}</Badge>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">From: <span className="font-semibold text-foreground">{donation.from}</span></p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <MapPin className="h-4 w-4" />
                                                <span>{donation.distance} away</span>
                                            </div>
                                            <Button className="rounded-full bg-primary/90 hover:bg-primary" onClick={() => handleAcceptPickup(donation.id)}>
                                                <Route className="mr-2 h-4 w-4"/>
                                                Accept Pickup
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Map Preview */}
                     <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-headline mb-6">Live Donation Map</h2>
                        <Card className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                           <MapView />
                        </Card>
                    </section>
                </div>

                <div className="lg:col-span-1 space-y-12">
                     {/* Volunteer Registration */}
                    <section>
                         <Card className="shadow-lg rounded-2xl">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Become a Volunteer</CardTitle>
                                <CardDescription>Join our team and start making a difference today.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>
                                <Button className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">Register</Button>
                            </CardContent>
                        </Card>
                    </section>

                     {/* Leaderboard */}
                     <section>
                        <Card className="shadow-lg rounded-2xl">
                             <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                                    <Star className="text-accent" />
                                    Top Volunteers
                                </CardTitle>
                                <CardDescription>This month's pickup leaders.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig} className="h-64 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={topVolunteersData} layout="vertical" margin={{ left: -10, right: 30 }}>
                                            <CartesianGrid horizontal={false} />
                                            <XAxis type="number" hide />
                                            <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} />
                                            <ChartTooltip content={<ChartTooltipContent />} />
                                            <Bar dataKey="pickups" layout="vertical" radius={5}>
                                                {topVolunteersData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
}
