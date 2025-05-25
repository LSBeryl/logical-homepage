/** @jsxImportSource @emotion/react */
"use client";

/**
 * 학생들 후기 - Sector #2
 */
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { theme } from "../../styles/theme";
import { useEffect, useRef, useState } from "react";
import { useBackground } from "../../context/BackgroundContext";
import reviews from "../../data/reviews";
import { motion } from "framer-motion";

export default function Sector2() {
  const wrapperRef = useRef();
  const { setSector } = useBackground();

  const [row1, setRow1] = useState([
    ...reviews.filter((_, i) => i % 3 === 0),
    ...reviews.filter((_, i) => i % 3 === 0),
    ...reviews.filter((_, i) => i % 3 === 0),
  ]);
  const [row2, setRow2] = useState([
    ...reviews.filter((_, i) => i % 3 === 1),
    ...reviews.filter((_, i) => i % 3 === 1),
    ...reviews.filter((_, i) => i % 3 === 1),
  ]);
  const [row3, setRow3] = useState([
    ...reviews.filter((_, i) => i % 3 === 2),
    ...reviews.filter((_, i) => i % 3 === 2),
    ...reviews.filter((_, i) => i % 3 === 2),
  ]);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      if (!wrapperRef.current) return;
      if (wrapperRef.current.getBoundingClientRect().top < 100) {
        wrapperRef.current.classList.add("visible");
        setSector(2);
      } else {
        wrapperRef.current.classList.remove("visible");
        setSector(1);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const row1Ref = useRef([]);
  const row2Ref = useRef([]);
  const row3Ref = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const row = entry.target.parentElement;
            const direction = row.getAttribute("data-direction");
            const cards = row.children;

            // Clone the first card and append it to the end
            const firstCard = cards[0].cloneNode(true);
            row.appendChild(firstCard);

            // Remove the first card when it's out of view
            if (cards.length > 2) {
              row.removeChild(cards[0]);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    // Observe the last card in each row
    [row1Ref.current, row2Ref.current, row3Ref.current].forEach((rowRefs) => {
      if (rowRefs.current && rowRefs.current.length > 0) {
        observer.observe(rowRefs.current[rowRefs.current.length - 1]);
      }
    });

    return () => observer.disconnect();
  }, [row1Ref.current, row2Ref.current, row3Ref.current]);

  function scrollToSector3() {
    window.scrollTo({
      top: document.getElementById("sector-3").offsetTop + 100,
      behavior: "smooth",
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper ref={wrapperRef} id="sector-2">
        <Title>
          <AnimatedText
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
            학생들의 반응
          </AnimatedText>
          이 증명하는, <div>로지컬수학.</div>
        </Title>
        <Source>
          출처:{" "}
          <SourceLink
            href="https://map.naver.com/p/entry/place/1272559413?c=15.00,0,0,0,dh&placePath=/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            네이버 플레이스
          </SourceLink>{" "}
          리뷰
        </Source>

        <ScrollSection>
          <ScrollRow>
            <ScrollContent direction="right" data-direction="right">
              {[...row1, ...row1, ...row1].map((v, i) => (
                <ReviewCard
                  key={i}
                  ref={
                    i < row1.length
                      ? (elem) => (row1Ref.current[i] = elem)
                      : null
                  }
                >
                  <Nickname>{v.author.nickname}</Nickname>
                  <Body>
                    {v.body.split("\n").map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </Body>
                  {v.thumbnail && (
                    <Thumbnail src={v.thumbnail} alt="리뷰 이미지" />
                  )}
                </ReviewCard>
              ))}
            </ScrollContent>
          </ScrollRow>

          <ScrollRow>
            <ScrollContent direction="left" data-direction="left">
              {[...row2, ...row2, ...row2].map((v, i) => (
                <ReviewCard
                  key={i}
                  ref={
                    i < row2.length
                      ? (elem) => (row2Ref.current[i] = elem)
                      : null
                  }
                >
                  <Nickname>{v.author.nickname}</Nickname>
                  <Body>
                    {v.body.split("\n").map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </Body>
                  {v.thumbnail && (
                    <Thumbnail src={v.thumbnail} alt="리뷰 이미지" />
                  )}
                </ReviewCard>
              ))}
            </ScrollContent>
          </ScrollRow>

          <ScrollRow>
            <ScrollContent direction="right" data-direction="right">
              {[...row3, ...row3, ...row3].map((v, i) => (
                <ReviewCard
                  key={i}
                  ref={
                    i < row3.length
                      ? (elem) => (row3Ref.current[i] = elem)
                      : null
                  }
                >
                  <Nickname>{v.author.nickname}</Nickname>
                  <Body>
                    {v.body.split("\n").map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </Body>
                  {v.thumbnail && (
                    <Thumbnail src={v.thumbnail} alt="리뷰 이미지" />
                  )}
                </ReviewCard>
              ))}
            </ScrollContent>
          </ScrollRow>
        </ScrollSection>
        <Scroll onClick={scrollToSector3}>
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
          로지컬수학의 커리큘럼은?
        </Scroll>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 100rem 0 8rem 0;
  box-sizing: border-box;
  overflow: hidden;

  &.visible * {
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
  word-break: break-word;
  line-height: 3.5rem;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
`;

const AnimatedText = styled.span`
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  margin: 0 0.2rem;
  background: linear-gradient(to right, #1a3d92 50%, #eef5fd 50%);
  background-position: 100% 0;
  background-size: 200% 100%;
  color: #000;
  overflow: hidden;

  &.visible {
    animation: slideBackgroundReviews 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes slideBackgroundReviews {
    from {
      background-position: 100% 0;
      color: #000;
    }
    to {
      background-position: 0 0;
      color: #fff;
    }
  }
`;

const Source = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.gray};
  text-align: center;
  margin-bottom: 3rem;
`;

const SourceLink = styled.a`
  color: ${({ theme }) => theme.colors.text.gray};
  &:hover {
    text-decoration: underline;
  }
`;

const ScrollSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ScrollRow = styled.div`
  display: flex;
  gap: 2rem;
  white-space: nowrap;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ScrollContent = styled.div`
  display: flex;
  gap: 2rem;
  white-space: nowrap;
  animation: ${({ direction }) =>
      direction === "left" ? scrollLeft : scrollRight}
    30s linear infinite;
  &[data-direction] {
    direction: ${({ direction }) => direction};
  }
`;

const scrollRight = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-13.155%); }
`;

const scrollLeft = keyframes`
  0% { transform: translateX(-13.155%); }
  100% { transform: translateX(0); }
`;

const ReviewCard = styled.div`
  min-width: 20rem;
  max-width: 24rem;
  max-height: 35rem;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background.white};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 1.5rem;
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors.text.black};
  font-size: 1rem;
  line-height: 1.6;
  flex-shrink: 0;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
`;

const Nickname = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Body = styled.div`
  font-weight: 400;
  margin-bottom: 1rem;

  p {
    margin: 0 0 0.5rem 0;
  }
`;

const Thumbnail = styled.img`
  height: 5rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const Scroll = styled.div`
  margin: 5vh 0 10vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #000;
  font-weight: 600;
  cursor: pointer;
`;

const Arrow = styled(motion.div)`
  width: 0.5rem;
  height: 0.5rem;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  margin: 0.5rem 0;
`;
