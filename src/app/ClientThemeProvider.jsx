/** @jsxImportSource @emotion/react */
"use client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";

export default function ClientThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
