import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/core/skeleton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
    </div>
  );
}
