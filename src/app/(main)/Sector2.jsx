/** @jsxImportSource @emotion/react */
"use client";

import { css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { theme } from "../../styles/theme";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

/**
 * 학생들의 니즈 - Sector #2
 */
export default function Sector2() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper
        initial={{ opacity: 0, y: "10%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      ></Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled(motion.div)`
  max-width: 100vw;
  height: 90vh;
  padding: 2rem 10rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1200px) {
    padding: 2rem 10rem;
    flex-direction: column;
    gap: 1rem;
    height: 70vh;
  }

  @media (max-width: 900px) {
    margin: 0 0 20vh 0;
    padding: 0;
    gap: 0;
  }
`;
