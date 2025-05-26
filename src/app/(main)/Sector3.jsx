/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { useBackground } from "../../context/BackgroundContext";
import { useEffect, useRef, useState } from "react";
import getRem from "../../utils/pxToRem";
import { motion } from "framer-motion";

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

  function scrollToSector4() {
    window.scrollTo({
      top: document.getElementById("sector-4").offsetTop + 90 * 16,
      behavior: "smooth",
    });
  }

  return (
    <Wrapper ref={wrapperRef} id="sector-3">
      <StickyCon>
        <Title>로지컬 커리큘럼</Title>
        <SubTitle>빠르고 확실한 로지컬 사이클을 경험해보세요.</SubTitle>
        <Timeline>
          <DayContent active={activeDay === 1}>
            <DayCircle className="day-circle" active={activeDay === 1}>
              1단계
            </DayCircle>
            <DayInfo>
              <DayTitle>1:1 맞춤 로드맵 형성</DayTitle>
              <DayDescription>
                <DayText>
                  <span>
                    체계화된 레벨 테스트를 통해 현재의 실력을 정확하게 진단하고
                    취약점을 체계적으로 분석합니다.
                  </span>
                  <span>
                    결과를 바탕으로 학생이 필요로 하는 부분을 중점적으로 1:1
                    맞춤 로드맵을 설계하여 효율적이고 개인화된 학습이
                    가능합니다.
                  </span>
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

          {/*  */}

          <DayContent active={activeDay === 2}>
            <DayCircle className="day-circle" active={activeDay === 2}>
              2단계
            </DayCircle>
            <DayInfo>
              <DayTitle>나에게 맞는 맞춤 진도 (1:1 관리)</DayTitle>
              <DayDescription>
                <DayText>
                  <span>
                    로지컬수학은 학생 개개인의 실력에 가장 적합한 커리큘럼을
                    제공합니다.
                  </span>
                  <span>
                    나의 수준에 딱맞는 개념과 문제를 학습할 수 있도록 30종
                    이상의 교재가 체계적으로 구성되어 있어 학생이 수학을 쉽게
                    배울 수 있도록 돕습니다.
                  </span>
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
              3단계
            </DayCircle>
            <DayInfo>
              <DayTitle>1:1 로직테스트 (feat. 과외)</DayTitle>
              <DayDescription>
                <DayText>
                  <span>
                    로지컬수학은 한 주간 학습한 내용을 선생님과 1:1로 대화하며
                    마무리 하는 시간을 제공합니다.
                  </span>
                  <span>
                    선생님은 학생이 개념을 말로 설명할 수 있는 수준까지 끌어주고
                    수학학습에 있어서 페이스 메이커가 되어 함께합니다.
                  </span>
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
          <VerticalLine />

          <DayContent active={activeDay === 4}>
            <DayCircle className="day-circle" active={activeDay === 4}>
              4단계
            </DayCircle>
            <DayInfo>
              <DayTitle>케어링</DayTitle>
              <DayDescription>
                <DayText>
                  <span>
                    실시간 1:1 피드백을 통해 학생의 약점과 부족한 부분을
                    정밀하게 짚어주고, 그때그때 필요한 보완을 함께 설계해주는
                    맞춤형 케어 시스템입니다.
                  </span>
                  <span>
                    혼자 공부할 땐 놓치기 쉬운 부분도 전문가의 코칭 아래
                    안정적으로 점검하며, 실력의 흐름을 흔들림 없이 잡아갈 수
                    있습니다.
                  </span>
                </DayText>
                <TagContainer>
                  <Tag>1:1 피드백</Tag>
                  <Tag>내신 릴레이</Tag>
                  <Tag>실시간 질의응답</Tag>
                  <Tag>REVIEW EXERCISE</Tag>
                </TagContainer>
              </DayDescription>
            </DayInfo>
          </DayContent>
          <VerticalLine />

          <DayContent active={activeDay === 5}>
            <DayCircle className="day-circle" active={activeDay === 5}>
              5단계
            </DayCircle>
            <DayInfo>
              <DayTitle>(내신대비 커리큘럼) 1:1 맞춤형 실전 테스트</DayTitle>
              <DayDescription>
                <DayText>
                  <span>
                    한 주간의 학습 내용을 바탕으로 진행되는 1:1 맞춤형 테스트는
                    자신의 한계를 점검하고 도전해보는 수업입니다.
                  </span>
                  <span>
                    테스트 이후에는 오답 유형을 분석하고 유사 문제를 추가로
                    해결하며, 학습을 완성도 있게 마무리합니다.
                  </span>
                </DayText>
                <TagContainer>
                  <Tag>매주 실전 경험</Tag>
                  <Tag>1:1 피드백</Tag>
                  <Tag>오답 유사 문제 풀이</Tag>
                  <Tag>킬러 문제 챌린지</Tag>
                  <Tag>나만의 시험지</Tag>
                </TagContainer>
              </DayDescription>
            </DayInfo>
          </DayContent>

          <DayContent active={activeDay === 6}>
            <DayCircle className="day-circle" active={activeDay === 6}>
              5단계
            </DayCircle>
            <DayInfo>
              <DayTitle>(정시대비 커리큘럼) 1:1 맞춤형 실전 테스트</DayTitle>
              <DayDescription>
                <DayText>
                  <span>
                    매주, 수학 전문 로지컬 선생님들이 엄선한 기출 기반
                    모의고사를 통해 실전 감각을 끌어올립니다.
                  </span>
                  <span>
                    취약한 개념과 자주 틀리는 문제 유형은 대표 강사님의 특별
                    판서 수업을 통해 정확하게 짚고 탄탄하게 다져갑니다.
                  </span>
                </DayText>
                <TagContainer>
                  <Tag>매주 익히는 실전 감각</Tag>
                  <Tag>로지컬 대표강사 현장 직강</Tag>
                  <Tag>최상위 정시 준비</Tag>
                </TagContainer>
              </DayDescription>
            </DayInfo>
          </DayContent>
        </Timeline>
        <Scroll onClick={scrollToSector4}>
          <Arrow
            animate={{
              y: [0, 10, 0],
              rotate: [45, 45, 45],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          명예의 전당 보기
        </Scroll>
      </StickyCon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 100rem 0 8rem 0;
  box-sizing: border-box;
`;

const StickyCon = styled.div`
  position: sticky;
  top: 10rem;
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
  height: 10rem;
  background-color: #fff;
  z-index: 0;

  @media (max-width: 900px) {
    height: 8rem;
  }
`;

const DayContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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

const Scroll = styled.div`
  margin: 5rem 0 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
`;

const Arrow = styled(motion.div)`
  width: 0.5rem;
  height: 0.5rem;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  margin: 0.5rem 0;
`;
