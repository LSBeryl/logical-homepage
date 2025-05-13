/** @jsxImportSource @emotion/react */
"use client";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";
import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "../../../supabase-client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");
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

  async function handleResetPassword() {
    if (!email) {
      setError("이메일을 입력해주세요.");
      return;
    }

    // 이메일 존재 여부 확인
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("email")
      .eq("email", email)
      .single();

    if (profileError || !profile) {
      setError("가입되지 않은 이메일 주소입니다.");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });

    if (error) {
      setError("비밀번호 재설정 이메일 전송 실패: " + error.message);
    } else {
      setError("");
      setIsEmailSent(true);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <TitleCon>
          <ImgCon></ImgCon>
          <Title>비밀번호 재설정</Title>
        </TitleCon>
        <FormCon>
          {!isEmailSent ? (
            <>
              <Description>
                가입 시 등록한 이메일 주소를 입력해주세요.
                <br />
                비밀번호 재설정 링크를 보내드립니다.
              </Description>
              <Input
                placeholder="이메일"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleResetPassword();
                }}
                hasError={!!error}
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <Submit onClick={handleResetPassword}>이메일 전송</Submit>
            </>
          ) : (
            <SuccessMessage>
              <h3>이메일이 전송되었습니다</h3>
              <p>
                입력하신 이메일 주소로 비밀번호 재설정 링크를 보냈습니다.
                <br />
                이메일을 확인해주세요.
              </p>
            </SuccessMessage>
          )}
          <BtnsCon>
            <Goto href="/signin">로그인으로 돌아가기</Goto>
          </BtnsCon>
        </FormCon>
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
  gap: 1.5rem;
  width: 20vw;

  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const Description = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.gray};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 15rem;
  box-sizing: border-box;
  border: 1px solid ${({ hasError }) => (hasError ? "#ff4d4d" : "#e0e0e0")};
  padding: 0.8rem 1rem;
  outline: none;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? "#ff4d4d" : "#0066ff")};
  }
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
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.lightPrimary};
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background.white};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text.gray};
    line-height: 1.6;
  }
`;

const BtnsCon = styled.div`
  width: 15rem;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Goto = styled(Link)`
  color: ${({ theme }) => theme.colors.text.gray};
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ErrorMessage = styled.div`
  color: #ff4d4d;
  font-size: 0.9rem;
  margin-top: -1rem;
  text-align: center;
  width: 15rem;
`;
