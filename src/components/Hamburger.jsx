import styled from "@emotion/styled";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Hamburger({ user }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Wrapper>
      <img
        src="/hamburger.png"
        alt="햄버거 메뉴"
        onClick={() => {
          setIsOpened(true);
        }}
      />
      <Sidebar isOpened={isOpened} setIsOpened={setIsOpened} user={user} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  & > img {
    height: 1.5rem;
  }
  @media (max-width: 900px) {
    display: block;
  }
`;
