/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import feature_cards from "../../data/cards/feature_cards";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/theme";
import { useBackground } from "../../context/BackgroundContext";

/**
 * 로지컬 특징 - Sector #1
 */
export default function Sector1() {
  const fuck = ["1", "2", "3", "4", "5"];
  const fuckers = useRef([]);

  const { setSector } = useBackground();

  function getRem(px) {
    const rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    ); // 보통 16
    return px / rootFontSize;
  }

  useEffect(() => {
    setSector(1);
    const scrollHandler = () => {
      for (let fucker of fuckers.current) {
        if (!fucker) return;
        const topRem = getRem(fucker.getBoundingClientRect().top);
        if (Math.abs(topRem - 8) < 0.5) {
          fucker.classList.add("visible");
        } else {
          fucker.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {feature_cards.map((v, i) => (
          <BigBox
            key={i}
            initial={{ opacity: i === 0 && 0 }}
            whileInView={{ opacity: i === 0 && 1 }}
            viewport={{ once: true }}
            transition={{ duration: i === 0 && 0.3 }}
          >
            <Box ref={(elem) => (fuckers.current[i] = elem)}>
              <Title>
                {v.title.map((title, titleIdx) => (
                  <div key={titleIdx}>{title}</div>
                ))}
              </Title>
            </Box>
          </BigBox>
        ))}
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
`;

const BigBox = styled(motion.div)`
  height: 80vh;
  width: 100%;
`;

const Box = styled.div`
  position: sticky;
  top: 8rem;
  opacity: 0;
  transition: opacity 0.8s ease;
  padding: 1rem 3rem;

  &.visible {
    opacity: 1;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
`;
