/** @jsxImportSource @emotion/react */
"use client";
import { useEffect, useState } from "react";

export default function Dashboard({ params }) {
  const [type, setType] = useState(null);
  useEffect(() => {
    async function getType() {
      const param = await params;
      setType(param.type);
    }
    getType();
  }, []);
  return <div>{type}</div>;
}
