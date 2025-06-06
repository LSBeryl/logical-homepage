/** @jsxImportSource @emotion/react */
"use client";
import styled from "@emotion/styled";
import sectorMenu from "../../data/sectorMenu";
import Link from "next/link";
import { css, ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/theme";
import { useRef, useEffect, useState } from "react";

export default function SectorMenu({ curSector, setSector }) {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSector = (index) => {
    setIsScrolling(true);
    const targetSector = document.querySelector(`#sector-${index + 1}`);
    if (targetSector) {
      const offset =
        index == 0
          ? targetSector.offsetTop + 60 * 16
          : targetSector.offsetTop + 90 * 16;

      setSector(index + 1);
      setIsScrolling(false);

      setTimeout(() => {
        window.scrollTo({
          top: offset,
        });
      }, 100);
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
              color: curSector - 1 === i && "#082870",
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
  height: 100%;
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  @media (max-width: 900px) {
    font-size: 0.8rem;
  }
`;
