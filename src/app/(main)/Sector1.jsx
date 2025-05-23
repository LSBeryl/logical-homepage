/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import feature_cards from "../../data/cards/feature_cards";
import needs_cards from "../../data/cards/needs_cards";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/theme";
import { useBackground } from "../../context/BackgroundContext";
import getRem from "../../utils/pxToRem";

/**
 * 로지컬 소개 및 니즈 - Sector #1
 * 로지컬의 특징과 학생들의 니즈를 보여주는 섹션
 */
export default function Sector1() {
  const features = useRef([]);
  const { setSector } = useBackground();

  useEffect(() => {
    setSector(1);
    const scrollHandler = () => {
      for (let feature of features.current) {
        if (!feature) return;
        const topRem = getRem(feature.getBoundingClientRect().top);
        if (Math.abs(topRem - 8) < 0.5) {
          feature.classList.add("visible");
        } else {
          feature.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  function scrollToSector2() {
    window.scrollTo({
      top:
        document.getElementById("sector-2").offsetTop +
        window.innerHeight -
        150,
      behavior: "smooth",
    });
  }
  return (
    <ThemeProvider theme={theme}>
      <Wrapper id="sector-1">
        {/* Feature Cards */}
        {feature_cards.map((v, cardIdx) => (
          <BigBox key={cardIdx}>
            <Box ref={(elem) => (features.current[cardIdx] = elem)}>
              <Title>
                {v.title.map((title, titleIdx) => (
                  <div key={titleIdx}>{title}</div>
                ))}
              </Title>
              <Desc>{v.desc}</Desc>
            </Box>
            <DummyCardCon>
              {Array(10)
                .fill(0)
                .map((_, photoIdx) => {
                  const imgSrc = `/sector1/${cardIdx + 1}-${photoIdx + 1}.png`;
                  const [imageExists, setImageExists] = useState(false);

                  useEffect(() => {
                    fetch(imgSrc)
                      .then((response) => {
                        if (response.ok) {
                          setImageExists(true);
                        }
                      })
                      .catch((err) => {
                        setImageExists(false);
                      });
                  }, [imgSrc]);

                  if (!imageExists) return null;

                  return (
                    <ImageContainer key={photoIdx}>
                      <StyledImage src={imgSrc} />
                    </ImageContainer>
                  );
                })}
            </DummyCardCon>
          </BigBox>
        ))}

        <Gap />

        {/* Needs Cards Section */}
        <NeedsSection>
          <NeedsConTitle>
            <Students
              ref={(el) => {
                if (el) {
                  const observer = new IntersectionObserver(
                    (entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                          entry.target.classList.add("visible");
                        }
                      });
                    },
                    { threshold: 0.5 }
                  );
                  observer.observe(el);
                }
              }}
            >
              학생들
            </Students>
            에게 가장 적합한, <div>로지컬수학.</div>
          </NeedsConTitle>
          <NeedsCon>
            {needs_cards.map((item, index) => (
              <NeedCard key={index}>
                <NeedTitle>Needs {index + 1}.</NeedTitle>
                <NeedText>"{item.need}"</NeedText>
                <AnswerText dangerouslySetInnerHTML={{ __html: item.ans }} />
                {index == 1 && (
                  <Annotation>
                    <div>
                      <sup style={{ color: "red" }}>*</sup>케어링 수업 :
                      학습하면서 막혔던 모든 문제를 1:1로 질문하며 밀착관리를
                      받는 수업.
                    </div>
                    <div>
                      <sup style={{ color: "red" }}>*</sup>로직테스트 : 조건을
                      보고 바로 떠올려야 하는 핵심 로직을 스스로 설명할 수
                      있는지 확인하는 온라인 수업.
                    </div>
                  </Annotation>
                )}
              </NeedCard>
            ))}
          </NeedsCon>
        </NeedsSection>
        <Scroll onClick={scrollToSector2}>
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
          로지컬수학 생생 후기보기
        </Scroll>
      </Wrapper>
    </ThemeProvider>
  );
}

// 기본 스타일들
const Wrapper = styled.div`
  max-width: 100vw;
`;

const BigBox = styled(motion.div)`
  width: 100%;
  &:nth-of-type(4) {
    & > div:nth-of-type(2) {
      & > div {
        background-color: transparent;
      }
      & > div > img {
        background-color: transparent;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

const Box = styled.div`
  position: sticky;
  top: 8rem;
  opacity: 0;
  transition: opacity 0.8s ease;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &.visible {
    opacity: 1;
  }

  @media (max-width: 900px) {
    gap: 1rem;
    padding: 1.5rem;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #fff;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Desc = styled.div`
  color: #fff;
  width: 30vw;
  line-height: 1.5rem;
  font-weight: 100;

  @media (max-width: 900px) {
    font-size: 0.8rem;
    width: 100%;
    line-height: 1.2rem;
  }
`;

const DummyCardCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  padding: 100vh 20vw;
  box-sizing: border-box;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 20vw;
  height: 25vw;
  background-color: #ffffff;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: 900px) {
    width: 60vw;
    height: 65vw;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #ffffff;
`;

const Gap = styled.div`
  padding: 50vh 0;
`;

// 💡 Needs Section 스타일
const NeedsSection = styled.div`
  padding: 5rem 10vw;
  /* background: #121212; */
  color: white;

  @media (max-width: 900px) {
    padding: 3rem 1.5rem;
  }
`;

const NeedsConTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  word-break: break-word;
  line-height: 3.5rem;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const Students = styled.span`
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  margin: 0 0.5rem;
  background: linear-gradient(to right, #fff 50%, #1a3d92 50%);
  background-position: 100% 0;
  background-size: 200% 100%;
  /* color: #fff; */
  overflow: hidden;

  @keyframes slideBackgroundNeeds {
    from {
      background-position: 100% 0;
      /* color: #fff; */
    }
    to {
      background-position: 0 0;
      color: #1a3d92;
    }
  }

  &.visible {
    animation: slideBackgroundNeeds 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
`;

const NeedsCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem; /* 카드 사이 간격을 크게 줘서 한 장씩 넘기는 느낌 */
`;

const NeedCard = styled.div`
  width: 60vw;
  box-sizing: border-box;
  min-height: 40vh;
  background: #ffffff10;
  border: 1px solid #ffffff22;
  border-radius: 2rem;
  padding: 3rem 2rem;
  backdrop-filter: blur(12px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 900px) {
    width: 90vw;
    padding: 2rem 1.5rem;
  }
`;

const NeedTitle = styled.div`
  color: #eee;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const NeedText = styled.div`
  font-weight: 700;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1.5rem;

  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
`;

const AnswerText = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #cccccc;

  @media (max-width: 900px) {
    font-size: 0.95rem;
  }
`;

const Annotation = styled.div`
  box-sizing: border-box;
  font-size: 0.7rem;
  color: #ccc;
  display: flex;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  justify-content: flex-end;

  & > div {
    text-align: right;
  }
`;

const Scroll = styled.div`
  margin: 5vh 0 10vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #ccc;
  cursor: pointer;
  font-weight: 600;
`;

const Arrow = styled(motion.div)`
  width: 0.5rem;
  height: 0.5rem;
  border-right: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
`;
