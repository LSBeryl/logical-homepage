/** @jsxImportSource @emotion/react */
"use client";
import styled from "@emotion/styled";
import sectorMenu from "../../data/sectorMenu";
import Link from "next/link";
import { css, ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/theme";

export default function SectorMenu({ curSector, setSector }) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {sectorMenu.map((v, i) => (
          <SectorMenuLink
            href={v[1]}
            key={i}
            onClick={() => {
              setSector(i);
            }}
            style={{
              borderBottom: curSector - 1 === i && "3px solid #082870",
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
  z-index: 1;

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
