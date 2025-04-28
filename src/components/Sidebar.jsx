/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "../styles/theme";
import Link from "next/link";
import MenuList from "../data/menu";
import { useEffect, useState } from "react";
import supabase from "../supabase-client";

const dimStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Sidebar보다 아래 */
`;

const sidebarStyle = css`
  position: fixed;
  top: 0;
  right: 0;
  width: 80vw;
  height: 100vh;
  box-sizing: border-box;
  background: #fff;
  z-index: 1000;
  overflow-y: scroll;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE, Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

function InsideSidebar({ setIsOpened, user }) {
  const [isUserExist, setIsUserExist] = useState(false);

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      setIsUserExist(true);
    }
  }, []);

  const roleToKor = {
    student: "학생",
    parents: "학부모",
    teacher: "선생님",
  };

  async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("로그아웃 오류 : " + error.message);
    } else {
      window.location.href = "/";
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <LoginCon>
        <Close>
          {/* X 모양 구현용 div들 */}
          <div
            onClick={() => {
              setIsOpened(false);
            }}
          >
            <div></div>
            <div></div>
          </div>
        </Close>
        <Title>
          <div>내신부터.</div>
          <div>수능 수학까지.</div>
          <div>로지컬 수학학원</div>
        </Title>
        {isUserExist ? (
          <WelcomeCon>
            <div>안녕하세요,</div>
            <div>{user.name}</div>
          </WelcomeCon>
        ) : (
          <LoginBtns>
            <Link href="/signin">로그인</Link>
            <Link href="/signup">회원가입</Link>
          </LoginBtns>
        )}
        {isUserExist && (
          <LoginMenu>
            <Dashboard>{roleToKor[user.role]} 대시보드</Dashboard>
            <Logout onClick={logout}>로그아웃</Logout>
          </LoginMenu>
        )}
      </LoginCon>
      <MenuCon>
        {MenuList.map((v, i) => (
          <Menu key={i}>
            <MenuTitle>{v[0]}</MenuTitle>
            <SubMenuCon>
              {v[1].map((sub, sub_i) => (
                <Link
                  href={sub[1]}
                  key={sub_i}
                  onClick={() => {
                    setIsOpened(false);
                  }}
                >
                  {sub[0]}
                </Link>
              ))}
            </SubMenuCon>
          </Menu>
        ))}
      </MenuCon>
    </ThemeProvider>
  );
}

export default function Sidebar({ isOpened, setIsOpened, user }) {
  return (
    <AnimatePresence mode="wait">
      {isOpened && (
        <>
          <motion.div
            css={dimStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsOpened(false);
            }}
          />
          <motion.div
            css={sidebarStyle}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <InsideSidebar setIsOpened={setIsOpened} user={user} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const Close = styled.div`
  display: flex;
  justify-content: end;
  padding: 1rem 1rem 0 1rem;
  position: relative;
  & > div {
    width: 1rem;
    height: 1rem;
    & > div {
      width: 2px;
      height: 1rem;
      border-radius: 4px;
      background: #c6c6c6;
      position: absolute;
      /* right: 10%; */
      &:nth-of-type(1) {
        transform: translateX(0.5rem) rotate(45deg);
      }
      &:nth-of-type(2) {
        transform: translateX(0.5rem) rotate(-45deg);
      }
    }
  }
`;

const Title = styled.div`
  padding: 1rem 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  & > div:nth-of-type(3) {
    padding: 0.5rem 0;
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

const WelcomeCon = styled.div`
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > div {
    &:nth-of-type(1) {
      font-size: 1.1rem;
      color: #7e7e7e;
    }
    &:nth-of-type(2) {
      font-size: 1.3rem;
      font-weight: bold;
      &::after {
        content: "님.";
        font-weight: 500;
        font-size: 1.1rem;
      }
    }
  }
`;

const LoginCon = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
`;

const LoginBtns = styled.div`
  display: flex;
  width: 100;
  justify-content: start;
  gap: 1rem;
  padding: 0 0 2rem 2rem;
  & > * {
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    font-size: 0.9rem;
    text-decoration: none;
    &:nth-of-type(1) {
      color: #000;
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
    &:nth-of-type(2) {
      background: ${({ theme }) => theme.colors.primary};
      color: #fff;
    }
  }
`;

const MenuCon = styled.div`
  padding: 0 1rem;
`;

const Menu = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #d1d1d1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MenuTitle = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: #9e9e9e;
`;

const SubMenuCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.8rem;
  & > * {
    width: 50%;
    font-size: 0.9rem;
    font-weight: 700;
    color: #000;
    text-decoration: none;
  }
`;

const LoginMenu = styled.div`
  padding: 0 2rem 2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dashboard = styled.div`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: " >";
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

const Logout = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: #7e7e7e;
`;
