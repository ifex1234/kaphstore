"use client";
/* eslint-disable react/no-children-prop */
import React from "react";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import type { FieldApi } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
const { log } = console;

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.errors ? <em>{field.state.meta.errors}</em> : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

export default function CreateItems() {
  const Form = useForm({
    defaultValues: {
      productUrl: "",
      imageUrl: "",
      title: "",
      category: "",
      prevPrice: "",
      quantity: "",
      currPrice: "",
      cartID: "",
    },
    onSubmit: async ({ value }) => {
      const {
        productUrl,
        imageUrl,
        prevPrice,
        title,
        cartID,
        category,
        currPrice,
        quantity,
      } = value;
      console.log(value);
      axios
        .put("api/products", {
          product_Url: productUrl,
          image_Url: imageUrl,
          prev_Price: prevPrice,
          title: title,
          cartID: cartID,
          category: category,
          currPrice: currPrice,
          quantity: quantity,
        })
        .then(function (response) {
          log(response);
          if (response.status === 201) {
            log("user successfully created");
          } else {
            log("unable to create user");
          }
        })
        .catch(function (error) {
          log(error);
        });
    },
    validatorAdapter: zodValidator(),
  });
  return (
    <div className="w-full md:w-2/3 p-5">
      <h2 className="text-4xl font-semibold text-center">
        Update current product
      </h2>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          Form.handleSubmit();
        }}
      >
        <div className="flex flex-col p-5">
          <Form.Field
            name="productUrl"
            validators={{
              onChange: z.string().trim().min(2, "enter a valid value"),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: z.string().refine(async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes("error");
              }),
            }}
            children={(field) => {
              return (
                <span className=" flex md:flex-row flex-col gap-3 my-2">
                  <Input
                    className="md:w-2/3"
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="product Url"
                  />
                  <FieldInfo field={field} />
                </span>
              );
            }}
          />
          <Form.Field
            name="imageUrl"
            validators={{
              onChange: z.string().trim().min(2, "enter a valid value"),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: z.string().refine(async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes("error");
              }),
            }}
            children={(field) => {
              return (
                <span className=" flex md:flex-row flex-col gap-3 my-2">
                  <Input
                    className="md:w-2/3"
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="image Url"
                  />
                  <FieldInfo field={field} />
                </span>
              );
            }}
          />
          <Form.Field
            name="title"
            validators={{
              onChange: z.string().trim().min(2, "enter a valid value"),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: z.string().refine(async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes("error");
              }),
            }}
            children={(field) => {
              return (
                <span className=" flex md:flex-row flex-col gap-3 my-2">
                  <Input
                    className="md:w-2/3"
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="product title"
                  />
                  <FieldInfo field={field} />
                </span>
              );
            }}
          />
          <Form.Field
            name="prevPrice"
            validators={{
              onChange: z.string().trim().min(2, "enter a valid value"),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: z.string().refine(async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes("error");
              }),
            }}
            children={(field) => {
              return (
                <span className=" flex md:flex-row flex-col gap-3 my-2">
                  <Input
                    className="md:w-2/3"
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="previous price"
                  />
                  <FieldInfo field={field} />
                </span>
              );
            }}
          />
          <Form.Field
            name="currPrice"
            validators={{
              onChange: z.string().trim().min(2, "enter a valid value"),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: z.string().refine(async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes("error");
              }),
            }}
            children={(field) => {
              return (
                <span className=" flex md:flex-row flex-col gap-3 my-2">
                  <Input
                    className="md:w-2/3"
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="current price"
                  />
                  <FieldInfo field={field} />
                </span>
              );
            }}
          />
          <Form.Field
            name="category"
            validators={{
              onChange: z.string().trim().min(2, "enter a valid value"),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: z.string().refine(async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes("error");
              }),
            }}
            children={(field) => {
              return (
                <span className=" flex md:flex-row flex-col gap-3 my-2">
                  <Input
                    className="md:w-2/3"
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="category"
                  />
                  <FieldInfo field={field} />
                </span>
              );
            }}
          />
          <Form.Field
            name="quantity"
            validators={{
              onChange: z.string().trim().min(2, "enter a valid value"),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: z.string().refine(async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes("error");
              }),
            }}
            children={(field) => {
              return (
                <span className=" flex md:flex-row flex-col gap-3 my-2">
                  <Input
                    className="md:w-2/3"
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="quantities"
                  />
                  <FieldInfo field={field} />
                </span>
              );
            }}
          />
          <Form.Field
            name="cartID"
            validators={{
              onChange: z.string().trim().min(2, "enter a valid value"),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: z.string().refine(async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes("error");
              }),
            }}
            children={(field) => {
              return (
                <span className=" flex md:flex-row flex-col gap-3 my-2">
                  <Input
                    className="md:w-2/3"
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="cartID"
                  />
                  <FieldInfo field={field} />
                </span>
              );
            }}
          />
        </div>
        <Form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button className="w-2/3 mx-5" type="submit" disabled={!canSubmit}>
              {isSubmitting ? "..." : "Submit"}
            </Button>
          )}
        />
      </form>
    </div>
  );
}
