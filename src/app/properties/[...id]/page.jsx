"use client";
import React from "react";

import { useParams, useSearchParams } from "next/navigation";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = useSearchParams("name");
  return <div>PropertyDetailPage {name}</div>;
};

export default PropertyDetailPage;
