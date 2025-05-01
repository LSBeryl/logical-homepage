/** @jsxImportSource @emotion/react */
"use client";

import { css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { theme } from "../../styles/theme";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { useBackground } from "../../context/BackgroundContext";

/**
 * 학생들의 니즈 - Sector #2
 */
export default function Sector2() {
  const wrapperRef = useRef();
  const { setSector } = useBackground();
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      if (!wrapperRef.current) return;
      // console.log(wrapperRef.current.getBoundingClientRect().top);
      if (wrapperRef.current.getBoundingClientRect().top < 100) {
        wrapperRef.current.classList.add("visible");
        setSector(2);
      } else {
        wrapperRef.current.classList.remove("visible");
        setSector(1);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper
        ref={wrapperRef}
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // viewport={{ once: true }}
        // transition={{ duration: 1 }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  padding: 50rem 10rem 2rem 10rem;
  box-sizing: border-box;
  display: flex;

  flex-direction: column;

  justify-content: center;
  gap: 2rem;
  transition: all 0.5s ease;
  & * {
    transition: all 0.5s ease;
    opacity: 0;
  }

  &.visible {
    & * {
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    padding: 2rem 10rem;
    flex-direction: column;
    gap: 1rem;
    /* height: 70vh; */
  }

  @media (max-width: 900px) {
    margin: 0 0 20vh 0;
    padding: 0;
    gap: 0;
  }
`;
