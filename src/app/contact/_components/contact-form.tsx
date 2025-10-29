"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { handleContactForm, type FormState } from '@/app/actions/contact';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Loader2, MessageSquareHeart } from 'lucide-react';

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? <Loader2 className="h-5 w-5 animate-spin" /> : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(handleContactForm, initialState);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === "Success!" && state.aiResponse) {
      setIsDialogOpen(true);
      formRef.current?.reset();
    } else if (state.message && state.message !== "Success!") {
       // Could add a toast here for errors if needed
    }
  }, [state]);

  return (
    <>
      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Intelligent Support</CardTitle>
          <CardDescription>
            Ask our AI assistant a question, and we'll get back to you with a helpful response.
          </CardDescription>
        </CardHeader>
        <form ref={formRef} action={formAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your question or message..." required minLength={10} rows={5} />
            </div>
            {state?.issues && (
              <div className="text-sm text-destructive">
                <p>{state.message}</p>
                <ul>
                  {state.issues.map((issue) => (
                    <li key={issue}>- {issue}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center gap-2">
              <MessageSquareHeart className="h-6 w-6 text-primary" />
              <AlertDialogTitle className="font-headline">Response from AnnaSewa Support</AlertDialogTitle>
            </div>
            <AlertDialogDescription className="pt-4 text-foreground">
              {state.aiResponse}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsDialogOpen(false)} className="rounded-full">
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
