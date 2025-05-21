/** @jsxImportSource @emotion/react */
"use client";
import styled from "@emotion/styled";
import { css, Global, ThemeProvider } from "@emotion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "../supabase-client";
import { useRouter } from "next/navigation";
import Hamburger from "./Hamburger";
import MenuList from "../data/menu";
import { theme } from "../styles/theme";

export default function Header() {
  const [isUserExist, setIsUserExist] = useState(false);
  const [user, setUser] = useState({});

  const roleToKor = {
    student: "학생",
    parents: "학부모",
    teacher: "선생님",
  };

  async function isLoginedFunc() {
    const { data: userData } = await supabase.auth.getUser();

    if (userData.user) {
      console.log("헤더에서: 로그인 되어있음");
      setUser(userData.user.user_metadata);
      setIsUserExist(true);
    } else {
      console.log("헤더에서: 로그인 안 되어있음");
    }
  }

  async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("로그아웃 오류 : " + error.message);
    } else {
      window.location.href = "/";
    }
  }

  useEffect(() => {
    isLoginedFunc();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div>
          <LogoCon href="/">
            <img src="/noback_blue_1.png" alt="로고 이미지" />
          </LogoCon>
          <MenuCon>
            {MenuList.map((v, i) => (
              <Menu key={i}>
                <Link href={v[1][0][1]}>{v[0]}</Link>
                <SubMenu>
                  {v[1].map((sub, sub_i) => (
                    <Link key={sub_i} href={sub[1]}>
                      {sub[0]}
                    </Link>
                  ))}
                </SubMenu>
              </Menu>
            ))}
          </MenuCon>
        </div>
        <PCRight>
          {isUserExist && (
            <Welcome>
              안녕하세요, <Name>{user.name}님.</Name>{" "}
              {/* <Role>{roleToKor[user.role]}</Role>. */}
            </Welcome>
          )}
          {isUserExist && (
            <Dashboard>{roleToKor[user.role]} 대시보드</Dashboard>
          )}
          <Sign>
            {user?.sub ? (
              <Signout onClick={logout}>로그아웃</Signout>
            ) : (
              <Signin href="/signin">로그인</Signin>
            )}
            {!user?.sub && <Signup href="/signup">회원가입</Signup>}
          </Sign>
        </PCRight>
        <Hamburger user={user} />
      </Wrapper>
    </ThemeProvider>
  );
}

const LogoCon = styled(Link)`
  height: 4.5rem;
  display: flex;
  align-items: center;
  & > img {
    height: 160%;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  height: 4.5rem;
  padding: 0 2rem;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.shadow.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  background: ${({ theme }) => theme.colors.background.white};

  & > div:nth-of-type(1) {
    // 헤더 왼쪽(아이콘, 메뉴)
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  & > div:nth-of-type(2) {
    // 헤더 오른쪽(대시보드, 로그인/회원가입)
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  @media (max-width: 900px) {
    padding: 0 2rem 0 1rem;
  }
`;

const MenuCon = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 4.5rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Menu = styled.div`
  color: ${({ theme }) => theme.colors.text.black};
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  font-weight: 600;
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
  & > a {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.black};
    text-decoration: none;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    & > div {
      display: flex;
    }
  }
  &:not(:hover) {
    & > div {
      display: none;
    }
  }
`;

const SubMenu = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.background.white};
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  position: absolute;
  box-sizing: border-box;
  top: 4.5rem;
  left: 0;
  padding: 1.5rem 5rem;

  & > * {
    color: ${({ theme }) => theme.colors.text.black};
    text-decoration: none;
    z-index: 10000;
    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const Dashboard = styled.div`
  padding: 0.6rem;
  border-radius: 4px;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.lightPrimary};
  }
`;

const Welcome = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.gray};
`;

const Name = styled.span`
  color: ${({ theme }) => theme.colors.text.black};
  font-weight: 600;
`;

const Sign = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  & > div {
    font-size: 0.9rem;
  }
`;

const Signin = styled(Link)`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.black};
  text-decoration: none;
`;

const Signout = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.black};
  text-decoration: none;
  padding: 0.5rem !important;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  cursor: pointer;
`;

const Signup = styled(Link)`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.black};
  text-decoration: none;
  padding: 0.5rem !important;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const PCRight = styled.div`
  display: block;
  @media (max-width: 900px) {
    display: none !important;
  }
`;
