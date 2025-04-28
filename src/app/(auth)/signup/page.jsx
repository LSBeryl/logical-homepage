/** @jsxImportSource @emotion/react */
"use client";
import styled from "@emotion/styled";
import { css, Global, ThemeProvider } from "@emotion/react";
import { theme } from "../../../styles/theme";
import Policy from "./policy";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Form from "./form";

export default function Signup() {
  const [type, setType] = useState("");
  return <Form type={type} setType={setType} />;
}
