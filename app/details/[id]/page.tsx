import WOTD from "@/components/WOTD";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <WOTD id={params.id} />;
};

export default page;
