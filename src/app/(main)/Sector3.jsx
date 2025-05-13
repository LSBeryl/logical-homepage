/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { useBackground } from "../../context/BackgroundContext";
import { useEffect, useRef, useState } from "react";
import getRem from "../../utils/pxToRem";

/**
 * 로지컬 커리큘럼 - Sector #3
 */
export default function Sector3() {
  const { setSector } = useBackground();
  const wrapperRef = useRef();
  const [activeDay, setActiveDay] = useState(1);

  useEffect(() => {
    const scrollHandler = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();

      if (rect.top < 100) {
        wrapperRef.current.classList.add("visible");
        setSector(3);
      } else {
        wrapperRef.current.classList.remove("visible");
      }

      // 각 Day의 위치에 따라 active 상태 변경
      const days = document.querySelectorAll(".day-circle");
      days.forEach((day, index) => {
        const dayRect = day.getBoundingClientRect();
        if (dayRect.top <= 30 * 16) {
          // 8rem = 8 * 16px
          setActiveDay(index + 1);
        }
      });
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Wrapper ref={wrapperRef} id="sector-3">
      <StickyCon>
        <Title>로지컬 커리큘럼</Title>
        <SubTitle>빠르고 확실한 로지컬 사이클을 경험해보세요.</SubTitle>
        <Timeline>
          <DayContent active={activeDay === 1}>
            <DayCircle className="day-circle" active={activeDay === 1}>
              Day 1
            </DayCircle>
            <DayInfo>
              <DayTitle>주간학습 로드맵 설정</DayTitle>
              <DayDescription>
                <DayText>
                  각 학생에게 가장 적합한 주간 커리큘럼을 1:1 맞춤으로 설정하여,
                  가장 효율적인 학습 루틴을 제공합니다.
                </DayText>
                <TagContainer>
                  <Tag>레벨 테스트</Tag>
                  <Tag>취약점 분석</Tag>
                  <Tag>1:1 맞춤 커리큘럼</Tag>
                </TagContainer>
              </DayDescription>
            </DayInfo>
          </DayContent>
          <VerticalLine />
          <DayContent active={activeDay === 2}>
            <DayCircle className="day-circle" active={activeDay === 2}>
              Day 2~6
            </DayCircle>
            <DayInfo>
              <DayTitle>선생님과 함께하는 자기주도 학습</DayTitle>
              <DayDescription>
                <DayText>
                  언제 어디서나 선생님이 곁에 있는 것처럼 숙제를 진행하고, 매일
                  숙제 체크 및 숙성 클래스로 진도가 밀리지 않도록 관리합니다.
                </DayText>
                <TagContainer>
                  <Tag>숙성 클래스</Tag>
                  <Tag>매일 숙제 체크</Tag>
                  <Tag>1:1 질문 시스템</Tag>
                  <Tag>오프라인 케어링 클래스</Tag>
                </TagContainer>
              </DayDescription>
            </DayInfo>
          </DayContent>
          <VerticalLine />
          <DayContent active={activeDay === 3}>
            <DayCircle className="day-circle" active={activeDay === 3}>
              Day 7
            </DayCircle>
            <DayInfo>
              <DayTitle>1:1 맞춤 실전 테스트</DayTitle>
              <DayDescription>
                <DayText>
                  한 주간 배웠던 내용을 로직 테스트와 실전 테스트로 복습하며,
                  통과할 때까지 무한 재시험을 진행합니다.
                </DayText>
                <TagContainer>
                  <Tag>1:1 개념완성 구두테스트</Tag>
                  <Tag>로직테스트</Tag>
                  <Tag>무제한 재시험</Tag>
                  <Tag>개념 완성</Tag>
                  <Tag>학습 수행도 점검</Tag>
                  <Tag>동기부여</Tag>
                  <Tag>학습 조언</Tag>
                </TagContainer>
              </DayDescription>
            </DayInfo>
          </DayContent>
        </Timeline>
      </StickyCon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  padding: 200vh 0 8rem 0;
`;

const StickyCon = styled.div`
  position: sticky;
  top: 10rem;
  height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #fff;
  opacity: 0.8;

  @media (max-width: 900px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media (max-width: 900px) {
    gap: 3rem;
  }
`;

const VerticalLine = styled.div`
  width: 3px;
  height: 10vh;
  background-color: #fff;
  z-index: 0;

  @media (max-width: 900px) {
    height: 8vh;
  }
`;

const DayContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 800px;
  z-index: 1;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  transition: all 0.3s ease;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

const DayCircle = styled.div`
  min-width: 8rem;
  height: 8rem;
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
  background-color: ${(props) => (props.active ? "#fff" : "transparent")};
  color: ${(props) => (props.active ? "#000" : "#fff")};
  transition: all 0.3s ease;

  @media (max-width: 900px) {
    min-width: 6rem;
    height: 6rem;
    font-size: 1rem;
  }
`;

const DayInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const DayTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;

  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
`;

const DayDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 900px) {
    padding: 0 1rem;
    box-sizing: border-box;
  }
`;

const DayText = styled.p`
  font-size: 1rem;
  color: #fff;
  opacity: 0.8;
  line-height: 1.5;
  margin-top: 0.5rem;

  @media (max-width: 900px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const Tag = styled.span`
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  border-radius: 2rem;
  font-size: 0.9rem;
  color: #fff;

  @media (max-width: 900px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;
