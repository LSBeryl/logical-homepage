/** @jsxImportSource @emotion/react */
"use client";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";
import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "../../../supabase-client";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    async function getUserData() {
      const { data: userData } = await supabase.auth.getUser();

      if (userData.user) {
        alert("이미 로그인이 되어있습니다.");
        router.push("/");
      }
    }
    getUserData();
  }, []);

  async function login() {
    if (userName && password) {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_name", userName)
        .single();

      if (error) {
        alert("로그인 오류 : " + error.message);
      } else {
        const { error: loginError } = await supabase.auth.signInWithPassword({
          email: data?.email,
          password,
        });

        if (loginError) {
          alert("로그인 오류 : " + loginError.message);
        } else {
          router.push("/");
        }
      }
    } else {
      console.log("으억", userName, password);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <TitleCon>
          <ImgCon></ImgCon>
          <Title>로그인</Title>
        </TitleCon>
        <FormCon>
          <Input
            placeholder="아이디"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") login();
            }}
          />
          <Input
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") login();
            }}
          />
          <Submit onClick={login}>로그인</Submit>
          <BtnsCon>
            <Goto href="/signup">새로 오셨나요?</Goto>
            <Goto href="#">비밀번호를 잊으셨나요?</Goto>
          </BtnsCon>
        </FormCon>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const TitleCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const ImgCon = styled.div`
  height: 5rem;
  width: 10rem;
  background: url("/noback_blue_7.png");
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: center;
`;

const FormCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 20vw;

  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const Input = styled.input`
  width: 15rem;
  box-sizing: border-box;
  border: 1px solid #d1d1d1;
  padding: 0.8rem 1rem;
  outline: none;
`;

const Submit = styled.div`
  width: 15rem;
  box-sizing: border-box;
  padding: 0.8rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;

const BtnsCon = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-between;
`;

const Goto = styled(Link)`
  color: #aeaeae;
  font-size: 0.8rem;
`;
