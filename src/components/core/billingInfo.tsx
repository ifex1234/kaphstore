import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserSchema } from "@/lib/schemas/zod";
import { z } from "zod";

type FectchUser = z.infer<typeof UserSchema>;

export function BillingTable({
  firstName,
  lastName,
  address,
  phoneNo,
  email,
}: FectchUser) {
  return (
    <Table>
      <TableCaption>Shipping Infomation</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Name</TableCell>
          <TableCell className="text-right">
            {firstName} {lastName}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Email</TableCell>
          <TableCell className="text-right">{email}</TableCell>
          <TableRow>
            <TableCell className="font-medium">Phone number </TableCell>
            <TableCell className="text-right">{phoneNo}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Address</TableCell>
            <TableCell className="text-right">{address}</TableCell>
          </TableRow>
        </TableRow>
      </TableBody>
    </Table>
  );
}
