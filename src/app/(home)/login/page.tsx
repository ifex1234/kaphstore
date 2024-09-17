/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/core/signUp";
import SignUpForm from "@/components/core/signUp";
import SignInForm from "@/components/core/signIn";

export default function page() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Create New Account</TabsTrigger>
        <TabsTrigger value="password">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <SignUpForm />
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <SignInForm />
        </Card>
      </TabsContent>
    </Tabs>
  );
}
