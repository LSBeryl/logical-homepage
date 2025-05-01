/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";

function RedirectComponent() {
  const router = useRouter();

  useEffect(() => {
    function wait(s) {
      return new Promise((res) => {
        setTimeout(() => {
          res();
        }, s * 1000);
      });
    }
    async function goHome() {
      await wait(3);
      router.push("/");
    }
    goHome();
  }, [router]);

  return null;
}

export default function NotFound() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TitleCon>
          <ImgCon></ImgCon>
          <ErrorCode>404</ErrorCode>
          <Message>페이지를 찾을 수 없습니다</Message>
          <Description>요청하신 페이지를 찾을 수 없습니다.</Description>
          <Description>잠시 후 메인 페이지로 이동합니다</Description>
        </TitleCon>
        <HomeButton href="/">
          <FaHome /> 홈으로 가기
        </HomeButton>
        <Suspense fallback={null}>
          <RedirectComponent />
        </Suspense>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled(motion.div)`
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

const TitleCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const ImgCon = styled.div`
  height: 5rem;
  width: 10rem;
  background: url("/noback_blue_7.png");
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: center;
`;

const ErrorCode = styled.div`
  font-size: 5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
`;

const Message = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Description = styled.div`
  font-size: 1rem;
  color: #495057;
  margin-bottom: 0.5rem;
`;

const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;
