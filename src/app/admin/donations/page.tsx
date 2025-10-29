
'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Truck, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import GradientText from "@/components/ui/gradient-text";

const donations = [
  { id: 'DN001', donor: 'Good Food Restaurant', type: 'Prepared Meals', quantity: '50 meals', status: 'Delivered', date: '2024-05-20' },
  { id: 'DN002', donor: 'Fresh Mart', type: 'Groceries', quantity: '25 kg', status: 'Pickup Pending', date: '2024-05-21' },
  { id: 'DN003', donor: 'Daily Breads', type: 'Bakery Items', quantity: '15 boxes', status: 'In Transit', date: '2024-05-21' },
  { id: 'DN004', donor: 'Canned Goodies Inc.', type: 'Canned Goods', quantity: '100 cans', status: 'Delivered', date: '2024-05-19' },
  { id: 'DN005', donor: 'FarmFresh Organics', type: 'Groceries', quantity: '50 kg', status: 'Cancelled', date: '2024-05-20' },
];

const statusVariant: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
  'Delivered': 'default',
  'Pickup Pending': 'secondary',
  'In Transit': 'outline',
  'Cancelled': 'destructive',
};

export default function DonationsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold font-headline">
              <GradientText>Manage Donations</GradientText>
            </h1>
            
            <Card className="shadow-lg rounded-2xl">
                <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <CardTitle>All Donations</CardTitle>
                            <CardDescription>View, track, and manage all food donations.</CardDescription>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <Input placeholder="Search by donor or type..." className="w-full md:w-64"/>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Filter by status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="delivered">Delivered</SelectItem>
                                    <SelectItem value="pending">Pickup Pending</SelectItem>
                                    <SelectItem value="transit">In Transit</SelectItem>
                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Donation ID</TableHead>
                                <TableHead>Donor</TableHead>
                                <TableHead>Food Type</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {donations.map(donation => (
                                <TableRow key={donation.id}>
                                    <TableCell className="font-medium">{donation.id}</TableCell>
                                    <TableCell>{donation.donor}</TableCell>
                                    <TableCell>{donation.type}</TableCell>
                                    <TableCell>{donation.quantity}</TableCell>
                                    <TableCell>{donation.date}</TableCell>
                                    <TableCell>
                                      <Badge variant={statusVariant[donation.status]} className={donation.status === 'Delivered' ? 'bg-primary/20 text-primary-foreground' : ''}>
                                        {donation.status}
                                      </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem><Eye className="mr-2 h-4 w-4"/>View Details</DropdownMenuItem>
                                                <DropdownMenuItem><Truck className="mr-2 h-4 w-4"/>Track Shipment</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
