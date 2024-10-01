"use client";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchOrderByUser } from "@/lib/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import FormatCurrency from "@/lib/services/FormatCurrency";
import Loader from "./loader";

function Orders() {
  const { user } = useKindeBrowserClient();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["my-orders"],
    queryFn: () => fetchOrderByUser(user?.id!),
  });
  const router = useRouter();

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (isError) return <p>Error</p>;

  return (
    <div className="p-5">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Your Orders</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                View Catalogue of all your orders
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button onClick={() => router.push("/")}>Start shopping</Button>
            </CardFooter>
          </Card>
        </div>
        <Tabs defaultValue="week">
          <div className="flex items-center"></div>
          <TabsContent value="week">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Orders</CardTitle>
                <CardDescription>Recent orders you made.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order id</TableHead>
                      <TableHead className="table-cell">
                        Date Completed
                      </TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data?.map((content) => (
                      <TableRow key={content.id} className="bg-accent">
                        <TableCell>
                          <div className="font-medium">{content.orderId}</div>
                        </TableCell>
                        <TableCell className="table-cell">
                          {content.createdAt instanceof Date
                            ? content.createdAt.toLocaleDateString()
                            : new Date(content.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right">
                          {FormatCurrency(content.sum)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Orders;
