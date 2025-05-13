/** @jsxImportSource @emotion/react */
"use client";
import styled from "@emotion/styled";
import sectorMenu from "../../data/sectorMenu";
import Link from "next/link";
import { css, ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/theme";
import { useRef, useEffect, useState } from "react";

export default function SectorMenu({ curSector, setSector }) {
  const sectorRefs = useRef([]);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSector = (index) => {
    setIsScrolling(true);
    const targetSector = document.querySelector(`#sector-${index + 1}`);
    if (targetSector) {
      const vh = window.innerHeight;
      const offset =
        index == 0
          ? targetSector.offsetTop + vh + 100
          : targetSector.offsetTop + vh - 150;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      // 스크롤이 완료된 후 섹터 변경
      setTimeout(() => {
        setSector(index + 1);
        setIsScrolling(false);
      }, 1000); // 스크롤 애니메이션 시간보다 약간 더 긴 시간
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {sectorMenu.map((v, i) => (
          <SectorMenuLink
            href="#"
            key={i}
            onClick={(e) => {
              e.preventDefault();
              if (!isScrolling) {
                scrollToSector(i);
              }
            }}
            style={{
              borderBottom: curSector - 1 === i && "3px solid #082870",
              pointerEvents: isScrolling ? "none" : "auto",
            }}
          >
            {v[0]}
          </SectorMenuLink>
        ))}
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10rem;
  height: 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  position: sticky;
  top: 4.5rem;
  border-top: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
  background: #fff;
  z-index: 2;

  @media (max-width: 900px) {
    padding: 0 2rem;
    height: 2.5rem;
    overflow-y: hidden;
  }
`;

const SectorMenuLink = styled(Link)`
  color: #000;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  @media (max-width: 900px) {
    font-size: 0.8rem;
  }
`;
