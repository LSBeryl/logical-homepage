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
import Toast from "../../../components/Toast";
import { FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";
import { getErrorMessage } from "../../../utils/errorMessages";

export default function Signin() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({ message: "", isVisible: false });
  const [isLogining, setIsLogining] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function getUserData() {
      const { data: userData } = await supabase.auth.getUser();

      if (userData.user) {
        showToast("이미 로그인이 되어있습니다.");
        router.push("/");
      }
    }
    getUserData();
  }, []);

  const showToast = (message) => {
    setToast({ message, isVisible: true });
  };

  const handleCloseToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  async function login() {
    if (!userEmail || !password) {
      showToast("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    setIsLogining(true);

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("email", userEmail)
        .single();

      if (error) {
        showToast(getErrorMessage(error.message));
        return;
      }

      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: data?.email,
        password,
      });

      if (loginError) {
        showToast(getErrorMessage(loginError.message));
      } else {
        router.push("/");
      }
    } catch (err) {
      showToast("로그인 중 오류가 발생했습니다.");
    } finally {
      setIsLogining(false);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <HomeButton href="/">
          <FaArrowLeft /> 홈으로
        </HomeButton>
        <TitleCon>
          <ImgCon></ImgCon>
          <Title>로그인</Title>
        </TitleCon>
        <FormCon>
          <Input
            placeholder="이메일"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            onKeyDown={handleKeyPress}
            type="email"
          />
          <PasswordInputContainer>
            <Input
              placeholder="비밀번호"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </PasswordToggle>
          </PasswordInputContainer>
          <Submit onClick={login} className={isLogining ? "logining" : ""}>
            {isLogining ? "로그인 중..." : "로그인"}
          </Submit>
          <BtnsCon>
            <Goto href="/signup">새로 오셨나요?</Goto>
            <Goto href="/reset-password">비밀번호를 잊으셨나요?</Goto>
          </BtnsCon>
        </FormCon>
        <Toast
          message={toast.message}
          isVisible={toast.isVisible}
          onClose={handleCloseToast}
        />
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

  &.logining {
    background: ${({ theme }) => theme.colors.lightPrimary};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.lightPrimary};
  }
`;

const BtnsCon = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Goto = styled(Link)`
  color: #aeaeae;
  font-size: 0.8rem;
`;

const HomeButton = styled(Link)`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: all 0.2s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.lightPrimary};
    background: rgba(255, 255, 255, 1);
  }
`;

const PasswordInputContainer = styled.div`
  position: relative;
  width: 15rem;
`;

const PasswordToggle = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
