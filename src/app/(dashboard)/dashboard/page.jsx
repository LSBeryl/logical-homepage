"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import supabase from "../../../supabase-client";

export default function DashboardRedirect() {
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

    checkAuthAndRedirect();
  }, [router]);

  return null;
}
