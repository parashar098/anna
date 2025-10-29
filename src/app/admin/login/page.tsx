'use client';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import GradientText from "@/components/ui/gradient-text";

export default function AdminLoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary/50">
      <Card className="w-full max-w-md mx-auto shadow-2xl rounded-2xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-headline">
            <GradientText>Admin Access</GradientText>
          </CardTitle>
          <CardDescription>Log in to the AnnaSewa dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@annasewa.org"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
