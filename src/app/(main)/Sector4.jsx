/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { useBackground } from "../../context/BackgroundContext";
import { useEffect, useRef } from "react";
import people from "../../data/people";

/**
 * 명예의 전당 - Sector #4
 */
export default function Sector4() {
  const { setSector } = useBackground();
  const wrapperRef = useRef();
  useEffect(() => {
    const scrollHandler = () => {
      if (!wrapperRef.current) return;
      if (wrapperRef.current.getBoundingClientRect().top < 100) {
        wrapperRef.current.classList.add("visible");
        setSector(4);
      } else {
        wrapperRef.current.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const title = "명예의 전당";

  return (
    <Wrapper ref={wrapperRef} id="sector-4">
      <SubTitle>2024년 & 2025년 로지컬수학</SubTitle>
      <Title>
        <Leaf>
          <img src="/leaf.png" alt="leaf" />
        </Leaf>
        {title.split("").map((char, index) => (
          <GradientChar key={index} delay={index * 0.1}>
            {char === " " ? "\u00A0" : char}
          </GradientChar>
        ))}
        <Leaf className="right">
          <img src="/leaf.png" alt="leaf" />
        </Leaf>
      </Title>
      <SubTitle>최우수 성적 향상자 & 성적 우수자</SubTitle>
      <People>
        {people.map((person, i) => (
          <Person key={i}>
            <RibbonCon message={person.type} index={i}>
              <img src="/gold_ribbon.png" alt="gold_ribbon" />
              <CurvedText viewBox="0 -4 40 8">
                <path
                  id={`curve-${i}`}
                  d="M 0,0 Q 20,-4 40,0"
                  fill="none"
                  stroke="none"
                />
                <text>
                  <textPath
                    href={`#curve-${i}`}
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    {person.type}
                  </textPath>
                </text>
              </CurvedText>
            </RibbonCon>
            <div>
              <div>{person.school}</div>
              <div>{person.name}</div>
              <div>{person.achievement}</div>
            </div>
          </Person>
        ))}
      </People>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  padding: 100vh 0 8rem 0;
  transition: background 0.5s ease;

  &.visible {
    background: radial-gradient(
        circle at center 20%,
        #fbe18f40 0%,
        #e2b84b26 30%,
        #a8781c0d 60%
      ),
      #121212;
  }

  & > h2 {
    color: #fff;
  }
`;

const SubTitle = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0;
  text-align: center;
`;

const Person = styled.div`
  background: linear-gradient(45deg, #ffd700, #b8860b);
  padding: 1px;
  display: inline-block;
  position: relative;
  min-width: 10rem;
  & > div:not(:first-of-type) {
    background: #121212;
    color: #fff;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    & > div {
      &:nth-of-type(1) {
        font-weight: 400;
      }
      &:nth-of-type(2) {
        font-weight: 400;
      }
      &:nth-of-type(3) {
        font-weight: 500;
        color: #fad579;
      }
    }
  }
`;

const RibbonCon = styled.div`
  position: absolute;
  background: transparent;
  top: -1.5rem;
  left: 0.5rem;
  & > img {
    height: 3rem;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0.6rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CurvedText = styled.svg`
  position: absolute;
  top: 0.2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 4rem;
  height: 2rem;
  & text {
    font-size: 0.3rem;
    font-weight: 800;
    fill: #000;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

const Leaf = styled.div`
  & > img {
    height: 5rem;
  }
  &.right {
    transform: rotateY(180deg);
  }
`;

const GradientChar = styled.span`
  @font-face {
    font-family: "RixYeoljeongdo_Regular";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/RixYeoljeongdo_Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "RixYeoljeongdo_Regular";
  font-size: 3rem;
  display: inline-block;
  background: linear-gradient(90deg, #b8860b, #ffddb4, #c4a965);
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  color: transparent !important;
`;

const People = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 10vh 0;
  justify-content: center;
`;
