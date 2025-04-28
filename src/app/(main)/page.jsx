/** @jsxImportSource @emotion/react */
"use client";
import styled from "@emotion/styled";
import { css, Global, ThemeProvider } from "@emotion/react";
import Header from "../../components/Header";
import { theme } from "../../styles/theme";
import { useEffect, useState } from "react";
import supabase from "../../supabase-client";
import Sector0 from "./Sector0";
import SectorMenu from "./SectorMenu";
import Sector2 from "./Sector2";

export default function Main() {
  const [curSector, setCurSector] = useState(0);
  return (
    <div>
      <Sector0 />
      <SectorMenu curSector={curSector} setCurSector={setCurSector} />
      <Sector2 />
      <Sector0 />
    </div>
  );
}
