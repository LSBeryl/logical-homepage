/** @jsxImportSource @emotion/react */
"use client";

import { css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { theme } from "../../styles/theme";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

/**
 * 시각 임팩트 겸 메인 화면 - Sector #0
 */
export default function Sector0() {
  // useEffect(() => {
  //   if ("scrollRestoration" in history) {
  //     history.scrollRestoration = "manual";
  //   }
  //   requestAnimationFrame(() => {
  //     window.scrollTo(0, 0);
  //   });
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper
        initial={{ opacity: 0, y: "10%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <BigBox href="#">
          <div>
            <div>내신부터,</div>
            <div>수능 수학까지.</div>
          </div>
        </BigBox>
        <BoxCon>
          <Box
            blog="true"
            href="https://blog.naver.com/logical_math"
            target="_blank"
          >
            <img src="/blog.png" alt="/blog.png" />
            <span>@logical_math</span>
          </Box>
          <Box
            instagram="true"
            href="https://www.instagram.com/logical__math/"
            target="_blank"
          >
            <img src="/insta.png" alt="/insta.png" />
            <span>@logical__math</span>
          </Box>
        </BoxCon>
      </Wrapper>
      <Scroll>
        <Arrow
          animate={{
            y: [0, 10, 0],
            rotate: [45, 45, 45],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        스크롤하여 더 알아보기
      </Scroll>
    </ThemeProvider>
  );
}

const Wrapper = styled(motion.div)`
  max-width: 100vw;
  height: 60vh;
  padding: 2rem 10rem;
  box-sizing: border-box;
  display: flex;
  gap: 2rem;
  margin: 7vh 0;

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

const BoxCon = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;

  @media (max-width: 1200px) {
    flex-direction: row;
    gap: 1rem;
  }

  @media (max-width: 900px) {
    gap: 0;
  }
`;

const Box = styled(Link)`
  flex: 2;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;

  box-sizing: border-box;
  transition: all 0.2s ease;

  & > img {
    height: 4rem;
  }

  ${(props) => {
    switch (Object.keys(props)[0]) {
      case "instagram":
        return css`
          background: linear-gradient(
            35deg,
            #ffc935 0%,
            #fa7e1e 20%,
            #d62976 40%,
            #962fbf 60%,
            #4f5bd5 80%
          );
        `;
      case "blog":
        return css`
          background: #03c75a;
        `;
    }
  }}

  @media (max-width: 1200px) {
    font-size: 1.4rem;
  }

  @media (max-width: 900px) {
    border-radius: 0;
    font-size: 1.3rem;
    width: 50%;
  }

  @media (min-width: 900px) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const BigBox = styled.div`
  flex: 2;
  border-radius: 1rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  /* background: url("https://placehold.co/500x500"); */
  background: url("/sector1/보류류ㅠ copy.png");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  cursor: initial;
  /* color: ${({ theme }) => theme.colors.primary}; */
  color: #fff;
  justify-content: flex-end;
  font-size: 2rem !important;
  font-weight: 600;
  padding: 2rem;
  transition: all 0.2s ease;

  @media (min-width: 900px) {
    &:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: 900px) {
    border-radius: 0;
  }
`;

const Scroll = styled.div`
  margin: 5rem 0 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const Arrow = styled(motion.div)`
  width: 0.5rem;
  height: 0.5rem;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  margin: 0.5rem 0;
`;
