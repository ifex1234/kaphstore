"use client";
import axios from "axios";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import style from "@/lib/styles/createProduct.module.scss";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { NewUserFormSchema } from "@/lib/schemas/zod";

export default function CreateUserInfo() {
  const { user } = useKindeBrowserClient();
  const router = useRouter();
  const form = useForm<z.infer<typeof NewUserFormSchema>>({
    resolver: zodResolver(NewUserFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      phoneNo: "",
    },
  });

  function onSubmit(values: z.infer<typeof NewUserFormSchema>) {
    let { lastName, firstName, email, password, phoneNo, address } = values;
    console.log(values);
    axios
      .post("https://kaphstore-server.onrender.com/api/users/signup", {
        lastName,
        firstName,
        email,
        password,
        phoneNo,
        userId: String(user?.id),
        address,
      })
      .then(function (response) {
        console.log(response.statusText);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(() => toast("Your Profile created successfully"), 5000);
    setTimeout(() => router.push("/dashboard"), 8000);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`${style.form}`}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className={`${style.field}`}>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className={`${style.field}`}>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="First name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className={`${style.field}`}>
              <FormLabel>last name</FormLabel>
              <FormControl>
                <Input placeholder="Last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className={`${style.field}`}>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNo"
          render={({ field }) => (
            <FormItem className={`${style.field}`}>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="Phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className={`${style.field}`}>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
