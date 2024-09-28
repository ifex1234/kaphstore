import React from "react";

type Props = {
  params: {
    id: string;
  };
};
async function page(prop: Props) {
  return <div>{/* <p>name:{user.firstName}</p> */}</div>;
}

export default page;
