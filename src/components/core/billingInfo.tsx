import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { z } from "zod";

const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  phoneNo: z.string(),
  email: z.string(),
  userId: z.string().optional(),
});
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
