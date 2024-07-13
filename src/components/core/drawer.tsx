import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdMenu } from "react-icons/md";
import { Navlink } from "@/lib/assets/navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import { LuHeart, LuUser, LuBook } from "react-icons/lu";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export function Drawer() {
  const myAccount = [
    {
      id: 0,
      label: "profile",
      href: "/profile",
      icon: <LuUser className="mr-2 h-4 w-4" />,
    },
    {
      id: 1,
      label: "Orders",
      href: "/orders",
      icon: <LuBook className="mr-2 h-4 w-4" />,
    },
    {
      id: 2,
      label: "Favourites",
      href: "/favourites",
      icon: <LuHeart className="mr-2 h-4 w-4" />,
    },
  ];
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MdMenu fill="white" size={30} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mt-5 md:hidden">
          <div className="w-10/12">
            <Input placeholder="Search products and categories" />
          </div>
        </SheetHeader>
        <span className="flex gap-3 flex-col w-full my-7">
          {Navlink.map((link) => (
            <SheetClose className="flex float-start" key={link.id} asChild>
              <Link
                className={`${
                  pathname === `${link.href}`
                    ? "bg-slate-200 text-purple-700"
                    : ""
                } px-2`}
                href={link.href}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
          <Separator />
        </span>

        <span className="flex gap-3 flex-col w-full my-7">
          <h3>My Account</h3>
          {myAccount.map((link) => (
            <SheetClose className="flex float-start" key={link.id} asChild>
              <Link
                className=" hover:bg-slate-300 cursor-pointer flex flex-row h-10 w-full items-center gap-x-0 px-3 rounded-md"
                href={link.href}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </SheetClose>
          ))}
          <Separator />
        </span>

        <SheetFooter>
          <SheetClose asChild>
            <div className=" cursor-pointer flex flex-row h-10 w-full items-center gap-x-3 px-3 rounded-md">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
