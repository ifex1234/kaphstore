import { Skeleton } from "@/components/ui/skeleton";
import style from "@/lib/styles/categories.module.scss";
import styles from "@/lib/styles/productDetails.module.scss";
import { Separator } from "../ui/separator";

function SkeletonCardMain() {
  return (
    <div className={`${style.arrayCont}`}>
      <Skeleton className={`${style.arrayItem}`} />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-4 w-[120px]" />
      </div>
    </div>
  );
}
export function LoadingSkeleton() {
  return (
    <div className={`${style.container} space-x-3 flex flex-row`}>
      <SkeletonCardMain /> <SkeletonCardMain /> <SkeletonCardMain />{" "}
      <SkeletonCardMain /> <SkeletonCardMain /> <SkeletonCardMain />{" "}
    </div>
  );
}

function SkeletonCardSecondary() {
  return (
    <div className={`${styles.main}`}>
      <div className="space-y-2 h-60">
        <Skeleton className={`${styles.image}`} />
        <Separator className="bg-slate-400 my-2" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
export function LoadingSkeletonSecondary() {
  return (
    <div>
      <SkeletonCardSecondary />
    </div>
  );
}
