
'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bar, BarChart, Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MapView from "@/components/map-view";
import { MoreHorizontal, Ban, CheckCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const totalDonationsData = [
  { month: 'Jan', total: 1200 }, { month: 'Feb', total: 1500 }, { month: 'Mar', total: 1300 },
  { month: 'Apr', total: 1800 }, { month: 'May', total: 2100 }, { month: 'Jun', total: 2500 },
];
const chartConfig = { total: { label: 'Donations' } };

const cityDistributionData = [
    { city: 'Mumbai', donations: 450 }, { city: 'Delhi', donations: 380 }, { city: 'Bangalore', donations: 520 },
    { city: 'Chennai', donations: 310 }, { city: 'Kolkata', donations: 280 }, { city: 'Pune', donations: 410 },
];
const cityChartConfig = { donations: { label: 'Donations' } };

const users = [
    { id: 1, name: 'Good NGO', role: 'NGO', status: 'Approved' },
    { id: 2, name: 'Suspicious User', role: 'Donor', status: 'Pending' },
    { id: 3, 'name': 'Active Volunteer', role: 'Volunteer', status: 'Approved' },
    { id: 4, 'name': 'Fake Account', role: 'NGO', status: 'Blocked' },
];

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                 <Card>
                    <CardHeader><CardTitle>Total Donations</CardTitle></CardHeader>
                    <CardContent><p className="text-3xl font-bold">10,480</p></CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>Active Volunteers</CardTitle></CardHeader>
                    <CardContent><p className="text-3xl font-bold">1,532</p></CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>Partner NGOs</CardTitle></CardHeader>
                    <CardContent><p className="text-3xl font-bold">215</p></CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>Pending Approvals</CardTitle></CardHeader>
                    <CardContent><p className="text-3xl font-bold">12</p></CardContent>
                </Card>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card className="rounded-2xl">
                    <CardHeader>
                        <CardTitle>Total Donations Over Time</CardTitle>
                        <CardDescription>Monthly donation trends for this year.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={totalDonationsData}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                                    <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                                    <Tooltip content={<ChartTooltipContent />} />
                                    <Line type="monotone" dataKey="total" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>
                 <Card className="rounded-2xl">
                    <CardHeader>
                        <CardTitle>City-wise Food Distribution</CardTitle>
                        <CardDescription>Breakdown of donations across major cities.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={cityChartConfig} className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={cityDistributionData}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis dataKey="city" tickLine={false} axisLine={false} tickMargin={8} />
                                    <YAxis tickLine={false} axisLine={false} hide/>
                                    <Tooltip content={<ChartTooltipContent />} />
                                    <Bar dataKey="donations" fill="hsl(var(--accent))" radius={4} />
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 lg:grid-cols-5">
                <Card className="lg:col-span-3 rounded-2xl">
                    <CardHeader><CardTitle>User Management</CardTitle></CardHeader>
                    <CardContent>
                         <div className="overflow-x-auto">
                            <Table>
                                <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Role</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
                                <TableBody>
                                    {users.map(user => (
                                        <TableRow key={user.id}>
                                            <TableCell className="font-medium">{user.name}</TableCell>
                                            <TableCell>{user.role}</TableCell>
                                            <TableCell><Badge variant={user.status === 'Approved' ? 'default' : user.status === 'Blocked' ? 'destructive' : 'secondary'} className={user.status === 'Approved' ? 'bg-primary/20 text-primary-foreground' : ''}>{user.status}</Badge></TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                        <DropdownMenuItem><CheckCircle className="mr-2 h-4 w-4"/>Approve</DropdownMenuItem>
                                                        <DropdownMenuItem className="text-destructive"><Ban className="mr-2 h-4 w-4"/>Block User</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
                <Card className="lg:col-span-2 rounded-2xl">
                    <CardHeader><CardTitle>Live Donation Map</CardTitle></CardHeader>
                    <CardContent className="h-80 p-0 overflow-hidden">
                        <MapView />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
