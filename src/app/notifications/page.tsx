
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bell, Gift, CheckCircle, Truck, UserPlus } from 'lucide-react';

const notifications = [
  {
    icon: UserPlus,
    title: 'Welcome to AnnaSewa!',
    description: 'Thank you for joining our community. Start making a difference today.',
    time: '2 hours ago',
    read: false,
  },
  {
    icon: Gift,
    title: 'New Donation Posted',
    description: 'A new donation of "Prepared Meals" is available near you.',
    time: '8 hours ago',
    read: false,
  },
  {
    icon: Truck,
    title: 'Pickup Confirmed',
    description: 'Your pickup from "Green Leaf Cafe" has been scheduled for 2 PM.',
    time: '1 day ago',
    read: true,
  },
    {
    icon: CheckCircle,
    title: 'Delivery Complete',
    description: 'You successfully delivered 15kg of vegetables to "Helping Hands Foundation". Great job!',
    time: '3 days ago',
    read: true,
  },
];

export default function NotificationsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-headline">Notifications</h1>
        <Button variant="ghost" size="sm">Mark all as read</Button>
      </div>

      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-4 md:p-6 ${!notification.read ? 'bg-secondary/50' : 'bg-background'}`}
              >
                <div className={`mt-1 h-10 w-10 flex-shrink-0 rounded-full flex items-center justify-center ${!notification.read ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                  <notification.icon className="h-5 w-5" />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-foreground">{notification.title}</p>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                   <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
                {!notification.read && (
                  <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" aria-label="Unread" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
       {notifications.length === 0 && (
          <div className="text-center py-20">
            <Bell className="mx-auto h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-xl font-semibold">No New Notifications</h2>
            <p className="mt-2 text-muted-foreground">You're all caught up! We'll let you know when there's something new.</p>
          </div>
        )}
    </div>
  );
}
