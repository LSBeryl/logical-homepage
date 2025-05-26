/** @jsxImportSource @emotion/react */
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { use } from "react";
import supabase from "../../../../supabase-client";
import Student from "./Student";
import Parents from "./Parents";
import Teacher from "./Teacher";
import ClientLayout from "../../../ClientLayout";

export default function DashboardPage({ params }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState("");
  const type = use(params).type;

  useEffect(() => {
    async function checkAuthAndRole() {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error || !session) {
        alert("로그인이 필요한 기능입니다.");
        router.replace("/");
        return;
      }

      // 사용자 역할과 이름 확인
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role, name")
        .eq("id", session.user.id)
        .single();

      if (profileError || !profile) {
        alert("로그인이 필요한 기능입니다.");
        router.replace("/");
        return;
      }

      // 역할 체크
      if (profile.role !== type) {
        alert("접근 권한이 없습니다.");
        router.replace("/");
        return;
      }

      setUserRole(profile.role);
      setUserName(profile.name);
      setIsLoading(false);
    }

    checkAuthAndRole();
  }, [router, type]);

  if (isLoading) {
    return <ClientLayout />;
  }

  // 역할에 따른 컴포넌트 렌더링
  switch (type) {
    case "student":
      return <Student userName={userName} />;
    case "parents":
      return <Parents userName={userName} />;
    case "teacher":
      return <Teacher userName={userName} />;
    default:
      return null;
  }
}
