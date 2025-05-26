"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import supabase from "../../../supabase-client";
import styled from "@emotion/styled";

export default function DashboardRedirect({ searchParams }) {
  const router = useRouter();

  useEffect(() => {
    async function checkAuthAndRedirect() {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error || !session) {
        alert("로그인이 필요한 기능입니다.");
        router.replace("/");
        return;
      }

      // 사용자 역할 확인
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();

      if (profileError || !profile) {
        alert("로그인이 필요한 기능입니다.");
        router.replace("/");
        return;
      }

      // 역할에 따른 리다이렉션
      switch (profile.role) {
        case "student":
          router.replace("/dashboard/student");
          break;
        case "parents":
          router.replace("/dashboard/parents");
          break;
        case "teacher":
          router.replace("/dashboard/teacher");
          break;
        default:
          alert("로그인이 필요한 기능입니다.");
          router.replace("/");
      }
    }

    async function getParams() {
      const { type } = await searchParams;
      if (type !== "test") checkAuthAndRedirect();
    }

    getParams();
  }, [router]);

  return <Text>대시보드로 이동 중입니다.</Text>;
}

const Text = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem;
  box-sizing: border-box;
`;
