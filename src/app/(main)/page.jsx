/** @jsxImportSource @emotion/react */
"use client";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import Sector0 from "./Sector0";
import SectorMenu from "./SectorMenu";
import Sector1 from "./Sector1";
import Sector2 from "./Sector2";
import Sector3 from "./Sector3";
import Sector4 from "./Sector4";
import Sector5 from "./Sector5";
import Sector6 from "./Sector6";
import Sector7 from "./Sector7";
import { useBackground } from "../../context/BackgroundContext";
import { theme } from "../../styles/theme";

export default function Main() {
  const { curSector, incSector, decSector, setSector } = useBackground();
  const [curBackColor, setCurBackColor] = useState(
    theme.colors.background.default
  );
  const conRef = useRef();

  useEffect(() => {
    setCurBackColor(() => {
      if (curSector === 1) {
        return theme.colors.background.highlight;
      } else if (curSector === 0) {
        return theme.colors.background.accent;
      } else {
        return theme.colors.background.default;
      }
    });
  }, [curSector]);

  return (
    <div>
      <Sector0 />
      <SectorMenu
        curSector={curSector}
        incSector={incSector}
        decSector={decSector}
        setSector={setSector}
      />
      <SectorCon backgroundColor={curBackColor}>
        <Sector1 />
        <Sector2 />
        <Sector3 />
        <Sector4 />
        <Sector5 />
        <Sector6 />
        <Sector7 />
      </SectorCon>
    </div>
  );
}

const SectorCon = styled.div`
  transition: background-color 0.5s ease; /* background-color의 변화에 transition 추가 */
  background: ${(props) =>
    props.backgroundColor || theme.colors.background.default};
`;
