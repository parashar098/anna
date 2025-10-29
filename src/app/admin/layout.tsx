'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BarChart2, Home, Package, Shield, Users, LogOut } from 'lucide-react';
import { Logo } from '@/components/icons';

const adminNavItems = [
    { href: '/admin', label: 'Dashboard', icon: Home },
    { href: '/admin/donations', label: 'Donations', icon: Package },
    { href: '/admin/users', label: 'Users', icon: Users },
    { href: '/admin/analytics', label: 'Analytics', icon: BarChart2 },
    { href: '/admin/reports', label: 'Reports', icon: Shield },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const pathname = usePathname();

    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <div className="flex items-center gap-2">
                         <Logo className="h-7 w-7 text-primary" />
                        <span className="text-lg font-semibold font-headline">AnnaSewa Admin</span>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                    {adminNavItems.map(item => (
                        <SidebarMenuItem key={item.href}>
                             <Link href={item.href} legacyBehavior passHref>
                                <SidebarMenuButton 
                                    isActive={pathname === item.href}
                                    tooltip={{ children: item.label }}
                                >
                                    <item.icon />
                                    <span>{item.label}</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter>
                     <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton tooltip={{ children: 'Logout' }}>
                                <LogOut />
                                <span>Logout</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                     </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
            <SidebarInset className="bg-background/90">
                 <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background px-4 sm:px-8">
                    <div className="flex items-center gap-4">
                        <SidebarTrigger className="md:hidden"/>
                        <h1 className="text-xl font-semibold font-headline">Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src="https://picsum.photos/seed/admin/100/100" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                    </div>
                </header>
                <main className="p-4 sm:p-8">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
