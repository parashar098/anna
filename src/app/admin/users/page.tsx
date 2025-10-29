
'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, UserCheck, UserX, Eye, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GradientText from "@/components/ui/gradient-text";

const users = [
  { id: 'USR001', name: 'Alex Johnson', email: 'alex@example.com', role: 'Donor', status: 'Active', avatar: 'https://picsum.photos/seed/user1/100/100' },
  { id: 'USR002', name: 'Good NGO', email: 'contact@goodngo.org', role: 'NGO', status: 'Approved', avatar: 'https://picsum.photos/seed/user2/100/100' },
  { id: 'USR003', name: 'Maria Garcia', email: 'maria@example.com', role: 'Volunteer', status: 'Active', avatar: 'https://picsum.photos/seed/user3/100/100' },
  { id: 'USR004', name: 'Community Helpers', email: 'info@communityhelpers.org', role: 'NGO', status: 'Pending', avatar: 'https://picsum.photos/seed/user4/100/100' },
  { id: 'USR005', name: 'Sam Chen', email: 'sam@example.com', role: 'Volunteer', status: 'Blocked', avatar: 'https://picsum.photos/seed/user5/100/100' },
];

const statusVariant: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
  'Active': 'default',
  'Approved': 'default',
  'Pending': 'secondary',
  'Blocked': 'destructive',
};

export default function UsersPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold font-headline">
              <GradientText>User Management</GradientText>
            </h1>
            
            <Card className="shadow-lg rounded-2xl">
                <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <CardTitle>All Users</CardTitle>
                            <CardDescription>Manage all registered donors, volunteers, and NGOs.</CardDescription>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <Input placeholder="Search by name or email..." className="w-full md:w-64"/>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Filter by role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Roles</SelectItem>
                                    <SelectItem value="donor">Donor</SelectItem>
                                    <SelectItem value="volunteer">Volunteer</SelectItem>
                                    <SelectItem value="ngo">NGO</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={user.avatar} />
                                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            {user.name}
                                        </div>
                                    </TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                      <Badge variant={statusVariant[user.status]} className={user.status === 'Active' || user.status === 'Approved' ? 'bg-primary/20 text-primary-foreground' : ''}>
                                        {user.status}
                                      </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem><Eye className="mr-2 h-4 w-4"/>View Profile</DropdownMenuItem>
                                                <DropdownMenuItem><UserCheck className="mr-2 h-4 w-4"/>Approve User</DropdownMenuItem>
                                                <DropdownMenuItem><UserX className="mr-2 h-4 w-4"/>Block User</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4"/>Delete User</DropdownMenuItem>
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
