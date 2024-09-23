// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";

// type Props = {
//   params: {
//     id: string;
//   };
// };
// export const ProfilePage = async (prop: Props) => {
//   const session = await getServerSession(authOptions);
//   const response = await fetch(
//     `http://127.0.0.1:3001/api/users/${prop.params.id}`,
//     {
//       method: "GET",
//       headers: {
//         authorization: `Bearer ${session}`,
//         "content-type": "application/json",
//       },
//     }
//   );
//   const user = await response.json();

//   return (
//     <div>
//       <p>name:{user.firstName}</p>
//     </div>
//   );
// };
