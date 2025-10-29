'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Truck, MapPin } from 'lucide-react';
import MapView from '@/components/map-view';

const nearbyDonations = [
  { id: 1, type: 'Groceries', from: 'City Supermarket', status: 'Available' },
  { id: 2, type: 'Prepared Meals', from: 'Downtown Restaurant', status: 'Available' },
  { id: 3, type: 'Bakery Items', from: 'The Corner Bakery', status: 'Pickup Pending' },
];

const deliveryHistory = [
  { date: '2024-05-15', from: 'Green Leaf Cafe', items: '30 meals', status: 'Completed' },
  { date: '2024-05-12', from: 'Urban Farms', items: '15kg Vegetables', status: 'Completed' },
  { date: '2024-05-10', from: 'Downtown Restaurant', items: '50 meals', status: 'Completed' },
];

export default function NGOPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 space-y-12">
                    {/* Nearby Donations Map */}
                    <section>
                        <h1 className="text-3xl md:text-4xl font-bold font-headline mb-6">Nearby Donations</h1>
                         <Card className="h-[400px] rounded-2xl overflow-hidden shadow-lg">
                           <MapView />
                        </Card>
                    </section>

                    {/* Delivery History */}
                    <section>
                         <h2 className="text-2xl md:text-3xl font-bold font-headline mb-6">Delivery History</h2>
                        <Card className="shadow-md rounded-2xl">
                            <CardContent className="p-0">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Date</TableHead>
                                            <TableHead>From</TableHead>
                                            <TableHead>Items</TableHead>
                                            <TableHead className="text-right">Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {deliveryHistory.map((delivery, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{delivery.date}</TableCell>
                                                <TableCell className="font-medium">{delivery.from}</TableCell>
                                                <TableCell>{delivery.items}</TableCell>
                                                <TableCell className="text-right">
                                                     <Badge variant={delivery.status === 'Completed' ? 'default' : 'secondary'} className="bg-primary/20 text-primary-foreground">
                                                        <CheckCircle className="mr-1 h-3 w-3"/>
                                                        {delivery.status}
                                                    </Badge>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </section>
                </div>
                <div className="lg:col-span-2 space-y-12">
                     {/* NGO Registration */}
                    <section>
                        <Card className="shadow-lg rounded-2xl">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Register your NGO</CardTitle>
                                <CardDescription>Join our network to receive food donations for your community.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="ngo-name">NGO Name</Label>
                                    <Input id="ngo-name" placeholder="Helping Hands Foundation" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="reg-id">Registration ID</Label>
                                    <Input id="reg-id" placeholder="Your official registration number" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input id="address" placeholder="Your NGO's address" />
                                </div>
                                <Button className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">Submit for Verification</Button>
                            </CardContent>
                        </Card>
                    </section>
                    
                    {/* Nearby Donations List */}
                    <section>
                        <Card className="shadow-lg rounded-2xl">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Available Pickups</CardTitle>
                                <CardDescription>Donations available in your area.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                {nearbyDonations.map(donation => (
                                    <div key={donation.id} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                                        <div>
                                            <p className="font-semibold">{donation.type}</p>
                                            <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" />{donation.from}</p>
                                        </div>
                                        <Button size="sm" className="rounded-full">
                                            <Truck className="h-4 w-4 mr-2" />
                                            Request
                                        </Button>
                                    </div>
                                ))}
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </div>
        </div>
    );
}
