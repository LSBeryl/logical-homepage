/** @jsxImportSource @emotion/react */
"use client";
import styled from "@emotion/styled";
import { css, Global, ThemeProvider } from "@emotion/react";
import { theme } from "../../../styles/theme";
import Policy from "./policy";

export default function Type({ setType }) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>회원가입</Title>
        <BoxCon>
          <Box
            onClick={() => {
              setType("student");
            }}
          >
            <img src="/student.png" alt="/student.png" />
            학생
          </Box>
          <Box
            onClick={() => {
              setType("parents");
            }}
          >
            <img src="/parents.png" alt="/parents.png" />
            학부모
          </Box>
          <Box
            onClick={() => {
              setType("teacher");
            }}
          >
            <img src="/teacher.png" alt="/teacher.png" />
            선생님
          </Box>
        </BoxCon>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const BoxCon = styled.div`
  display: flex;
  gap: 1rem;
`;

const Box = styled.div`
  width: 15vw;
  height: 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  font-weight: bold;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    /* border: 1px solid #aaa; */
    box-shadow: 0px 5px 10px #d2d2d2;
  }
  & > img {
    height: 50%;
  }

  @media (max-width: 1024px) {
    width: 25vw;
    height: 25vw;
    font-size: 0.8rem;
    gap: 0.8rem;
  }
`;
