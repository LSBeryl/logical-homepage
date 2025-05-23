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
import Sector7 from "./Sector6";
import { useBackground } from "../../context/BackgroundContext";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "@emotion/react";
export default function Main() {
  const { curSector, incSector, decSector, setSector } = useBackground();
  const [curBackColor, setCurBackColor] = useState(
    theme.colors.background.default
  );
  const consultRef = useRef();

  useEffect(() => {
    if (curSector === 1) {
      setSector(1);
    }
  }, [curSector]);

  useEffect(() => {
    setCurBackColor(() => {
      if (curSector === 1) {
        return theme.colors.background.highlight;
      } else if (curSector === 2) {
        return theme.colors.background.extralight;
      } else if (curSector === 3) {
        return "#000";
      } else if (curSector === 4) {
        return "#121212";
      } else if (curSector === 5) {
        return "#fff";
      } else if (curSector === 6) {
        return "#fff";
      } else {
        return theme.colors.background.default;
      }
    });
  }, [curSector]);

  useEffect(() => {
    const handleScroll = () => {
      if (consultRef.current) {
        const rect = consultRef.current.getBoundingClientRect();
        console.log("Consult button position:", {
          top: rect.top,
          bottom: rect.bottom,
          windowHeight: window.innerHeight,
          bojeong: window.innerHeight + 150,
          scrollY: window.scrollY,
        });
        if (
          window.scrollY > window.innerHeight + 150 &&
          window.scrollY <
            document.getElementById("sector-5").offsetTop - window.innerHeight
        ) {
          consultRef.current.classList.add("visible");
        } else {
          consultRef.current.classList.remove("visible");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
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
      </SectorCon>

      <GoConsult ref={consultRef}>무료 상담 신청하기</GoConsult>
    </ThemeProvider>
  );
}

const SectorCon = styled.div`
  transition: background-color 0.5s ease; /* background-color의 변화에 transition 추가 */
  background: ${(props) =>
    props.backgroundColor || theme.colors.background.default};
`;

const GoConsult = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  color: #fff;
  padding: 1rem 5rem;
  box-sizing: border-box;
  width: 50vw;
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  cursor: pointer;
  border-radius: 1rem;
  z-index: 100;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease;
  opacity: 0;

  &.visible {
    opacity: 1;
  }

  @media (max-width: 900px) {
    width: 90vw;
    font-size: 1rem;
  }
`;
