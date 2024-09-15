// //On-demand revalidation with revalidateTag
// import { unstable_cache } from "next/cache";
// import { db, posts } from "@/lib/db";

// const getCachedPosts = unstable_cache(
//   async () => {
//     return await db.select().from(posts);
//   },
//   ["posts"],
//   { revalidate: 3600, tags: ["posts"] }
// );
// //You can then use revalidateTag in a Server Actions or Route Handl
// export default async function Page() {
//   let posts = getCachedPosts();
//   // ...
// }
// ("use server");

// import { revalidateTag } from "next/cache";

// export async function createPost() {
//   // Invalidate all data tagged with 'posts' in the cache
//   revalidateTag("posts");
// }
