/** @jsxImportSource @emotion/react */
"use client";
import styled from "@emotion/styled";
import { css, Global, ThemeProvider } from "@emotion/react";
import { theme } from "../../../styles/theme";
import Policy from "./policy";
import { motion } from "framer-motion";

export default function Type({ setType }) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>회원가입</Title>
        <SubTitle>회원 유형을 선택해주세요</SubTitle>
        <BoxCon>
          <Box
            onClick={() => {
              setType("student");
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconWrapper>
              <img src="/student.png" alt="/student.png" />
            </IconWrapper>
            <Label>학생</Label>
          </Box>
          <Box
            onClick={() => {
              setType("parents");
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconWrapper>
              <img src="/parents.png" alt="/parents.png" />
            </IconWrapper>
            <Label>학부모</Label>
          </Box>
          <Box
            onClick={() => {
              setType("teacher");
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconWrapper>
              <img src="/teacher.png" alt="/teacher.png" />
            </IconWrapper>
            <Label>선생님</Label>
          </Box>
        </BoxCon>
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
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text.gray};
  margin-bottom: 2rem;
`;

const BoxCon = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.background.white};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
    padding: 1.5rem;
  }
`;

const IconWrapper = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }
`;

const Label = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.black};
  text-align: center;
`;
