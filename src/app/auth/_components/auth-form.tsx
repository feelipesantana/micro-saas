"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data);

    await signIn("email", {
      email: data.email,
    });
  });

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Sign in</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Enter your email to receive a magic link.
          </p>
        </div>
        <Card>
          <CardContent className="space-y-4 p-5">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  {...form.register("email")}
                />
              </div>
              <Button className="w-full" type="submit">
                Send magic link
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
