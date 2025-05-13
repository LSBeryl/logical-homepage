/** @jsxImportSource @emotion/react */
"use client";
import { useEffect, useState } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { usePathname, useSearchParams } from "next/navigation";
import { theme } from "../styles/theme";
import { Suspense } from "react";
import styled from "@emotion/styled";

function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.configure({
      minimum: 0.3,
      easing: "ease",
      speed: 800,
      showSpinner: false,
    });
  }, []);

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [pathname, searchParams]);

  return (
    <style jsx global>{`
      #nprogress .bar {
        background: ${theme.colors.primary} !important;
        height: 0.2rem !important;
      }
    `}</style>
  );
}

function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadMessage, setLoadMessage] = useState("로딩 중입니다...");

  useEffect(() => {
    // 페이지 로드가 완료되면 로딩 스피너를 숨깁니다
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <SpinnerContainer>
      <LogoContainer>
        <Logo src="/noback_blue_1.png" alt="로지컬 로고" />
      </LogoContainer>
      <LoadingMessage>
        <div>{loadMessage}</div>
      </LoadingMessage>
      <Spinner />
    </SpinnerContainer>
  );
}

export default function ClientLayout({ children }) {
  return (
    <>
      <Suspense fallback={null}>
        <ProgressBar />
      </Suspense>
      <LoadingSpinner />
      {children}
    </>
  );
}

const SpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.background.white};
  z-index: 9999;
`;

const LogoContainer = styled.div`
  height: 4.5rem;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 160%;
  object-fit: contain;
`;

const LoadingMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 500;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme }) => theme.colors.background.extralight};
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
