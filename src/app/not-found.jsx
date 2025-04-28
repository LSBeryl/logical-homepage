"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
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
      await wait(1.5);
      router.push("/");
      window.location.href = "/";
    }
    goHome();
  }, []);

  return (
    <Wrapper>
      <div>404 Error : 잘못된 경로입니다.</div>
      <div>곧 메인 화면으로 돌아갑니다.</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
`;
