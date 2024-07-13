type Prop = {
  id: number;
  href:
    | "/categories/appliances"
    | "/categories/computers"
    | "/categories/electronics"
    | "/categories/fashion"
    | "/categories/groceries"
    | "/categories/health-beauty"
    | "/categories/mobile-tablet"
    | "/categories/home-office";
  label: string;
}[];
export const Navlink: Prop = [
  {
    id: 0,
    href: "/categories/appliances",
    label: "Appliances",
  },
  {
    id: 1,
    href: "/categories/mobile-tablet",
    label: "Phones & Tablets",
  },
  {
    id: 2,
    href: "/categories/computers",
    label: "Computers",
  },
  {
    id: 3,
    href: "/categories/groceries",
    label: "Groceries",
  },
  {
    id: 4,
    href: "/categories/electronics",
    label: "Electronics",
  },
  {
    id: 5,
    href: "/categories/fashion",
    label: "Fashion",
  },
  {
    id: 6,
    href: "/categories/health-beauty",
    label: "Health & Beauty",
  },
  {
    id: 7,
    href: "/categories/home-office",
    label: "Home and office",
  },
];
