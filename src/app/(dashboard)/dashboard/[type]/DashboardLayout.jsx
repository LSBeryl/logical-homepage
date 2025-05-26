/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useState } from "react";
import supabase from "../../../../supabase-client";

const MENU_ITEMS = {
  student: [
    { id: 1, label: "내 학습 현황" },
    { id: 2, label: "과제 관리" },
    { id: 3, label: "학습 자료" },
    { id: 4, label: "성적 확인" },
  ],
  parents: [
    { id: 1, label: "자녀 학습 현황" },
    { id: 2, label: "과제 확인" },
    { id: 3, label: "성적 확인" },
    { id: 4, label: "상담 신청" },
  ],
  teacher: [
    { id: 1, label: "학생 관리" },
    { id: 2, label: "과제 관리" },
    { id: 3, label: "학습 자료 관리" },
    { id: 4, label: "성적 관리" },
    { id: 5, label: "상담 관리" },
  ],
};

export default function DashboardLayout({ children, userName, role }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/");
  };

  const handleExitDashboard = () => {
    router.replace("/");
  };

  return (
    <Layout>
      <MobileHeader isOpen={isOpen}>
        <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>
      </MobileHeader>

      <Sidebar isOpen={isOpen}>
        <CloseButton
          onClick={() => setIsOpen(false)}
          style={{ display: isOpen ? "block" : "none" }}
        >
          <span></span>
          <span></span>
        </CloseButton>
        <Logo>
          <img src="/noback_white_1.png" alt="logo" />
        </Logo>
        <Menu>
          {MENU_ITEMS[role]?.map((item) => (
            <MenuItem key={item.id}>{item.label}</MenuItem>
          ))}
        </Menu>

        <UserSection>
          <UserName>
            안녕하세요, <span>{userName}</span>님.
          </UserName>
          <BottomMenu>
            <BottomMenuItem onClick={handleExitDashboard}>
              대시보드 나가기
            </BottomMenuItem>
            <BottomMenuItem onClick={handleLogout}>로그아웃</BottomMenuItem>
          </BottomMenu>
        </UserSection>
      </Sidebar>

      <Main>{children}</Main>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;

  @media (max-width: 900px) {
    padding-left: 4rem;
  }
`;

const MobileHeader = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 4rem;
  box-sizing: border-box;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  z-index: 1000;
  padding: 2rem 1rem;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? "-4rem" : "0")});

  @media (max-width: 900px) {
    display: flex;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 2rem;
  height: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  span {
    width: 70%;
    height: 2px;
    background-color: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 2rem;
  right: -3rem;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.5rem;
    height: 2px;
    background-color: #bbbbbb;
    border-radius: 10px;

    &:first-of-type {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:last-of-type {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  @media (max-width: 900px) {
    display: block;
  }
`;

const Sidebar = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-250px")});
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7rem;
  margin: -2rem 0 -4rem 0;
  overflow: hidden;
  img {
    width: 150%;
    height: 150%;
    object-fit: contain;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const MenuItem = styled.div`
  padding: 1.3rem 0 1.3rem 1.3rem;
  cursor: pointer;
  transition: color 0.2s;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;

  &:hover {
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-right: 1rem;
    flex-shrink: 0;
  }
`;

const UserSection = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const UserName = styled.div`
  margin-bottom: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  & > span {
    font-weight: 600;
  }
`;

const BottomMenu = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-top: 1rem;
`;

const BottomMenuItem = styled.div`
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: white;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background.blur};
  color: ${({ theme }) => theme.colors.text.blackPrimary};
`;
