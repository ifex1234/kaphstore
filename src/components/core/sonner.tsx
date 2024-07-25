import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function Sonner() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("An item added to cart", {
          description: "SClick to add to cart",
          action: {
            label: "add-to-cart",
            onClick: () => console.log("added to cart"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
