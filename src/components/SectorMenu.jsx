/** @jsxImportSource @emotion/react */
"use client";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SectorMenu() {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <MenuCon>
          <Menu
            onClick={() => router.push("/sector0")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            로지컬 소개
          </Menu>
          <Menu
            onClick={() => router.push("/sector1")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            로지컬 특징
          </Menu>
          <Menu
            onClick={() => router.push("/sector2")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            로지컬 커리큘럼
          </Menu>
          <Menu
            onClick={() => router.push("/sector3")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            로지컬 시스템
          </Menu>
          <Menu
            onClick={() => router.push("/sector4")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            로지컬 성과
          </Menu>
          <Menu
            onClick={() => router.push("/sector5")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            로지컬 FAQ
          </Menu>
          <Menu
            onClick={() => router.push("/sector6")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            로지컬 오시는 길
          </Menu>
        </MenuCon>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.background.white};
  overflow: hidden;
`;

const MenuCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 20rem;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const Menu = styled(motion.div)`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
`;
