"use client";
import axios from "axios";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormSchema } from "../../../lib/schemas/create-productschema";
import { Button } from "@/components/ui/button";
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

export default function Page() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      productUrl: "",
      imageUrl: "",
      title: "",
      category: undefined,
      prevPrice: "",
      quantity: "",
      currPrice: "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    let {
      prevPrice,
      productUrl,
      imageUrl,
      title,
      category,
      currPrice,
      quantity,
    } = values;
    // axios
    //   .post("http://127.0.0.1:3000/api/products", {
    //     prevPrice,
    //     productUrl,
    //     imageUrl,
    //     title,
    //     category,
    //     currPrice,
    //     quantity,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    console.log(values);

    // let {prevPrice,productUrl,imageUrl, title, category, currPrice, quantity} = values
    // productUrl= "",
    //   imageUrl= "",
    //   title= "",
    //   category= "appliances",
    //   prevPrice= "",
    //   quantity="",
    //   currPrice= "",
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`${style.form}`}>
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className={`${style.field}`}>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Categories" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currPrice"
          render={({ field }) => (
            <FormItem className={`${style.field}`}>
              <FormLabel>Current price</FormLabel>
              <FormControl>
                <Input placeholder="Current price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem className={`${style.field}`}>
              <FormLabel>image url</FormLabel>
              <FormControl>
                <Input placeholder="image url" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="prevPrice"
          render={({ field }) => (
            <FormItem className={`${style.field}`}>
              <FormLabel>previous price</FormLabel>
              <FormControl>
                <Input placeholder="previous price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="productUrl"
          render={({ field }) => (
            <FormItem className={`${style.field}`}>
              <FormLabel>product url</FormLabel>
              <FormControl>
                <Input placeholder="product url" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className={`${style.field}`}>
              <FormLabel>quantity</FormLabel>
              <FormControl>
                <Input placeholder="quantity" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className={`${style.field}`}>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
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
