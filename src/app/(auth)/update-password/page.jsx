/** @jsxImportSource @emotion/react */
"use client";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";
import { useEffect, useState } from "react";
import supabase from "../../../supabase-client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // URL에서 토큰 확인
    const hash = window.location.hash;
    if (!hash) {
      setError("잘못된 접근입니다.");
      return;
    }
  }, []);

  const handleUpdatePassword = async () => {
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (password.length < 6) {
      setError("비밀번호는 6자 이상이어야 합니다.");
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        setError(error.message);
      } else {
        alert("비밀번호가 성공적으로 변경되었습니다.");
        router.push("/signin");
      }
    } catch (err) {
      setError("비밀번호 변경 중 오류가 발생했습니다.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper
        initial={{ opacity: 0, y: "10%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <TitleCon>
          <ImgCon></ImgCon>
          <Title>비밀번호 변경</Title>
        </TitleCon>
        <FormCon>
          <Input
            type="password"
            placeholder="새 비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="새 비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Submit onClick={handleUpdatePassword}>비밀번호 변경</Submit>
        </FormCon>
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
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  padding: 0.8rem 1rem;
  outline: none;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
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

const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 0.9rem;
  text-align: center;
  width: 15rem;
`;
