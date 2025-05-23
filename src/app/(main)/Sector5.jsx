/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { useBackground } from "../../context/BackgroundContext";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import supabase from "../../supabase-client";

/**
 * 상담 안내 - Sector #5
 */
export default function Sector5() {
  const { setSector, curSector } = useBackground();
  const wrapperRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("high");
  const dropdownRef = useRef(null);

  // Form states
  const [schoolType, setSchoolType] = useState("high");
  const [schoolName, setSchoolName] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [isGradeOpen, setIsGradeOpen] = useState(false);
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState(false);
  const [isOver14, setIsOver14] = useState(false);

  const options = [
    { value: "high", label: "고등학교" },
    { value: "midl", label: "중학교" },
  ];

  const gradeOptions = [
    { value: "1", label: "1학년" },
    { value: "2", label: "2학년" },
    { value: "3", label: "3학년" },
  ];

  useEffect(() => {
    const scrollHandler = () => {
      if (!wrapperRef.current) return;
      if (wrapperRef.current.getBoundingClientRect().top < 100) {
        wrapperRef.current.classList.add("visible");
        setSector(5);
      } else {
        wrapperRef.current.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function getSchool() {
    const data = await axios.get("/api/school/국디");
  }

  async function submit() {
    if (!schoolName || !name || !role || !phone || !grade) {
      alert("모든 필수 항목을 입력해주세요.");
      return;
    }

    if (!isPrivacyAgreed || !isOver14) {
      alert("모든 필수 약관에 동의해주세요.");
      return;
    }

    try {
      const { error } = await supabase.from("consultations").insert([
        {
          school: schoolName,
          name: name,
          type: role === "student" ? "학생" : "학부모",
          phone: phone,
          isCompleted: false,
          schoolType: schoolType === "high" ? "고등학교" : "중학교",
          grade: grade,
        },
      ]);

      if (error) {
        alert("상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.");
        console.error("Error:", error);
        return;
      }

      alert("상담 신청이 완료되었습니다.");

      // 폼 초기화
      setSchoolType("high");
      setSchoolName("");
      setName("");
      setRole("");
      setPhone("");
      setGrade("");
      setIsPrivacyAgreed(false);
      setIsOver14(false);
    } catch (err) {
      alert("상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.");
      console.error("Error:", err);
    }
  }

  function scrollToSector6() {
    window.scrollTo({
      top:
        document.getElementById("sector-6").offsetTop +
        window.innerHeight -
        150,
      behavior: "smooth",
    });
  }

  return (
    <Wrapper ref={wrapperRef} id="sector-5">
      {/* <button onClick={getSchool}>버튼입니다</button> */}
      <Title className={curSector === 5 ? "visible" : ""}>
        이제, 로지컬수학에서 진짜 실력 향상을 느껴보세요.
      </Title>
      <SubTitle>
        <span>로지컬 수학학원</span> 상담 신청
      </SubTitle>
      <FormCon>
        <FormRow>
          <FormTitle>학교</FormTitle>
          <FormInputCon>
            <CustomSelect ref={dropdownRef}>
              <SelectButton onClick={() => setIsOpen(!isOpen)}>
                {options.find((opt) => opt.value === schoolType)?.label}
                <FaChevronDown />
              </SelectButton>
              {isOpen && (
                <OptionsList>
                  {options.map((option) => (
                    <Option
                      key={option.value}
                      onClick={() => {
                        setSchoolType(option.value);
                        setIsOpen(false);
                      }}
                      isSelected={schoolType === option.value}
                    >
                      {option.label}
                    </Option>
                  ))}
                </OptionsList>
              )}
            </CustomSelect>
            <input
              type="text"
              placeholder="학교를 입력해주세요."
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </FormInputCon>
        </FormRow>
        <FormRow>
          <FormTitle>학년</FormTitle>
          <FormInputCon>
            <CustomSelect>
              <SelectButton onClick={() => setIsGradeOpen(!isGradeOpen)}>
                {gradeOptions.find((opt) => opt.value === grade)?.label ||
                  "학년을 선택해주세요"}
                <FaChevronDown />
              </SelectButton>
              {isGradeOpen && (
                <OptionsList>
                  {gradeOptions.map((option) => (
                    <Option
                      key={option.value}
                      onClick={() => {
                        setGrade(option.value);
                        setIsGradeOpen(false);
                      }}
                      isSelected={grade === option.value}
                    >
                      {option.label}
                    </Option>
                  ))}
                </OptionsList>
              )}
            </CustomSelect>
          </FormInputCon>
        </FormRow>
        <FormRow>
          <FormTitle>이름</FormTitle>
          <FormInputCon>
            <input
              type="text"
              placeholder="이름을 입력해주세요."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormRadioCon>
              <RadioGroup>
                <input
                  type="radio"
                  id="student"
                  name="role"
                  checked={role === "student"}
                  onChange={() => setRole("student")}
                />
                <label htmlFor="student">학생</label>
              </RadioGroup>
              <RadioGroup>
                <input
                  type="radio"
                  id="parent"
                  name="role"
                  checked={role === "parent"}
                  onChange={() => setRole("parent")}
                />
                <label htmlFor="parent">학부모</label>
              </RadioGroup>
            </FormRadioCon>
          </FormInputCon>
        </FormRow>
        <FormRow>
          <FormTitle>연락처</FormTitle>
          <FormInputCon>
            <input
              type="text"
              placeholder="(-) 없이 숫자만 입력해주세요."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormInputCon>
        </FormRow>
      </FormCon>

      <PolicyCon>
        <div>
          <PolicyConTitle>약관 동의</PolicyConTitle>
        </div>
        <PolicyRow>
          <PolicyTitle>개인정보 수집 동의 (필수)</PolicyTitle>
          <div>
            <label htmlFor="agree">동의합니다.</label>
            <input
              type="checkbox"
              id="agree"
              checked={isPrivacyAgreed}
              onChange={(e) => setIsPrivacyAgreed(e.target.checked)}
            />
          </div>
        </PolicyRow>
        <PolicyText>
          <div>[개인정보 수집 동의]</div>
          <div>
            로지컬수학학원에서는 학원 상담을 위해 고객님의 개인정보 수집 및
            이용에 대한 동의를 얻고자 합니다.
          </div>
          <div>
            <div>① 수집 항목 : 재학 중인 학교명, 이름, 연락처</div>
            <div>② 수집 및 이용 목적 : 학원 상담 일정 조정을 위한 연락</div>
            <div>③ 보유 기간 : 목적 달성 후 즉시 파기</div>
          </div>
          <div>
            ※고객님께서는 동의하지 않으실 권리가 있으나, 이는 상담 진행을 위한
            필수 정보로 동의를 거부하실 경우 상담이 제한될 수 있습니다.
          </div>
        </PolicyText>
        <PolicyRow>
          <PolicyTitle>만 14세 이상 여부 (필수)</PolicyTitle>
          <div>
            <label htmlFor="over14">만 14세 이상입니다.</label>
            <input
              type="checkbox"
              id="over14"
              checked={isOver14}
              onChange={(e) => setIsOver14(e.target.checked)}
            />
          </div>
        </PolicyRow>
      </PolicyCon>
      <SubmitButton>
        <div onClick={submit}>상담 신청하기</div>
      </SubmitButton>
      <Scroll onClick={scrollToSector6}>
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
        오시는 길 보기
      </Scroll>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 100vh 0 8rem 0;
  box-sizing: border-box;
`;

const Title = styled.div`
  padding: 2rem 3rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  box-sizing: border-box;
  width: 100%;

  background: #121212;
  color: #121212;
  opacity: 0;
  transform: translateY(100px);

  transition: all 1s ease;

  &.visible {
    opacity: 1;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      #2d52a8
    );
    color: #fff;
    transform: translateY(0);
  }

  @media (max-width: 900px) {
    padding: 2rem 1rem;
  }
`;

const SubTitle = styled.div`
  margin: 5rem 0 1rem 0;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;

  & > span {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    padding: 0.2rem 0.5rem;
    border-radius: 0.25rem;
  }
`;

const FormCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 900px) {
    gap: 2rem;
  }
`;

const FormRow = styled.div`
  display: flex;
  width: 40%;
  & > div:nth-of-type(1) {
    flex: 1;
  }
  & > div:nth-of-type(2) {
    flex: 7;
  }

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 90%;
    flex-direction: column;
    gap: 0.5rem;

    & > div {
      width: 100%;
    }
  }
`;

const FormTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  box-sizing: border-box;

  @media (max-width: 900px) {
    font-size: 1.2rem;
    padding: 0 1rem !important;
  }
`;

const FormInputCon = styled.div`
  display: flex;
  gap: 0.5rem;

  & > input[type="text"] {
    flex: 2;
    padding: 0.9rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    outline: none;
    box-sizing: border-box;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s ease;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;

    & > input[type="text"] {
      width: 100%;
    }

    & > div {
      width: 100%;
    }
  }
`;

const FormRadioCon = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 0.5rem;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > input[type="radio"] {
    margin: 0;
    padding: 0.2rem;
    accent-color: #666;
    cursor: pointer;
  }

  & > label {
    cursor: pointer;
    user-select: none;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const CustomSelect = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  font-size: 0.9rem;
  font-weight: 500;
`;

const SelectButton = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0.9rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const OptionsList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-top: 0.25rem;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Option = styled.div`
  padding: 0.6rem 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${(props) => (props.isSelected ? "#f0f0f0" : "white")};

  &:hover {
    background: #f5f5f5;
  }
`;

const PolicyCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;

  & > div {
    width: 40%;

    @media (max-width: 1200px) {
      width: 70%;
    }

    @media (max-width: 900px) {
      width: 90%;
    }
  }
`;

const PolicyText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  & > div {
    font-size: 0.8rem;
    color: #999;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;

const PolicyConTitle = styled.div`
  font-weight: 600;
`;

const PolicyRow = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;

  & > div {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 500;
    gap: 0.5rem;

    & > label {
      cursor: pointer;
      user-select: none;
    }

    & > input[type="checkbox"] {
      margin: 0;
      cursor: pointer;
      padding: 0.2rem;
      accent-color: #666;
    }
  }
`;

const PolicyTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
`;

const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  & > div {
    box-sizing: border-box;
    padding: 0.9rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    text-align: center;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-size: 1.3rem;
    font-weight: 600;

    width: 40%;

    @media (max-width: 1200px) {
      width: 70%;
    }

    @media (max-width: 900px) {
      width: 90%;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.lightPrimary};
    }
  }
`;

const Scroll = styled.div`
  margin: 5vh 0 10vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
