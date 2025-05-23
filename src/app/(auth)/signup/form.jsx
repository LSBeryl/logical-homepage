/** @jsxImportSource @emotion/react */
"use client";
import styled from "@emotion/styled";
import { css, Global, ThemeProvider } from "@emotion/react";
import { theme } from "../../../styles/theme";
import Policy from "./policy";
import { useEffect, useState } from "react";
import Type from "./type";
import supabase from "../../../supabase-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Form({ type, setType }) {
  const [isTermAgreed, setIsTermAgreed] = useState(false);

  const [name, setName] = useState("");
  const [childrenName, setChildrenName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [grade, setGrade] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [certiCode, setCertiCode] = useState("");

  const [isCertificated, setIsCertificated] = useState(false);

  const [isValidUserName, setIsValidUserName] = useState(false);

  const router = useRouter();

  /**
   * 학생 인증 코드 입력 시 실행되는 함수.
   */
  async function certifyStudent() {
    if (isCertificated) {
      alert("이미 인증 완료된 상태입니다.");
    } else {
      const { data, error } = await supabase
        .from("student_certification")
        .select("*")
        .eq("certi_code", certiCode)
        .single();

      if (error) {
        console.error(error);
        alert("인증 실패 : " + error.message);
        setIsCertificated(false);
      } else {
        // 가입 상태 확인
        if (type === "student" && data.child_is_registered) {
          alert("이미 가입된 학생입니다.");
          setIsCertificated(false);
          return;
        }
        if (type === "parents" && data.parent_is_registered) {
          alert("이미 가입된 학부모입니다.");
          setIsCertificated(false);
          return;
        }

        // 인증 성공 및 가입 가능한 경우
        alert("인증에 성공하였습니다.");
        setIsCertificated(true);
        if (type === "student") {
          setName(data.name);
        } else if (type === "parents") {
          setName(data.name + " 학부모");
          setChildrenName(data.name);
        }
      }
    }
  }

  /**
   * 선생님 인증 코드 입력 시 실행되는 함수.
   */
  async function certifyTeacher() {
    if (isCertificated) {
      alert("이미 인증 완료된 상태입니다.");
    } else {
      const { data, error } = await supabase
        .from("teacher_certification")
        .select("certi_code")
        .eq("certi_code", certiCode)
        .single();

      if (error) {
        console.error(error);
        alert("인증 실패 : " + error.message);
        setIsCertificated(false);
      } else {
        if (data?.certi_code) {
          alert("인증 성공");
          setIsCertificated(true);
        } else {
          alert("인증 실패 : 코드가 올바르지 않습니다.");
          setIsCertificated(false);
        }
      }
    }
  }

  /**
   * 유저명 중복 확인하는 함수.
   */
  async function isUserNameTaken() {
    const { data, error } = await supabase
      .from("profiles")
      .select("user_name")
      .eq("user_name", userName);

    if (error) {
      console.error(error);
      setIsValidUserName(false);
    } else {
      alert(
        data.length > 0 || userName.length === 0
          ? "사용 불가한 아이디입니다."
          : "사용 가능한 아이디입니다."
      );
      setIsValidUserName(data.length > 0 ? false : true);
    }
  }

  /**
   * "가입하기" 버튼 눌렀을 때 모든 작업이 완료되었는지 확인하는 함수.
   */
  function isAllFormsFilled() {
    const requiredFields = {
      student: [
        name,
        userName,
        isValidUserName,
        password,
        school,
        grade,
        phone,
        email,
      ],
      parents: [
        name,
        childrenName,
        userName,
        isValidUserName,
        password,
        phone,
        email,
      ],
      teacher: [
        name,
        isCertificated,
        userName,
        isValidUserName,
        password,
        phone,
        email,
      ],
    };

    const isFilled = requiredFields[type]?.every((field) => field);

    if (isFilled && isTermAgreed) {
      return true;
    } else {
      alert(
        "완료되지 않은 작업이 존재합니다.\n다음 내용을 확인해주세요.\n\n-개인정보 수집 및 이용 동의\n-학생 인증 코드 인증\n-아이디 중복 확인"
      );
      return false;
    }
  }

  /**
   * 가입했을 때 유저 정보를 profiles 테이블에 저장
   * @param {string} userId
   */
  async function insertProfile(userId) {
    const { error } = await supabase.from("profiles").insert({
      id: userId,
      role: type,
      name,
      user_name: userName,
      school,
      grade,
      phone,
      email,
      children_name: childrenName,
    });

    if (error) {
      alert("가입 오류 : ", error);
    } else {
      alert("성공적으로 가입되었습니다.");
    }
  }

  /**
   * "가입하기" 버튼 눌렀을 때 실행되는 함수.
   */
  async function submit(e) {
    e.preventDefault();

    if (isAllFormsFilled()) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            role: type,
            name,
            userName,
            grade,
            school,
            email,
            phone,
            childrenName,
          },
        },
      });

      if (error) {
        alert("오류 발생 : ", error.message);
        console.log(error.message);
      } else {
        // profiles 테이블에 정보 저장
        await insertProfile(data.user?.id);

        // student_certification 테이블의 가입 상태 업데이트
        if (type === "student") {
          await supabase
            .from("student_certification")
            .update({ child_is_registered: true })
            .eq("certi_code", certiCode);
        } else if (type === "parents") {
          await supabase
            .from("student_certification")
            .update({ parent_is_registered: true })
            .eq("certi_code", certiCode);
        }

        await supabase.auth.signOut();
        router.push("/signin");
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      {type ? (
        <Wrapper>
          <HomeButton onClick={() => router.push("/")}>
            <FaArrowLeft />
            홈으로
          </HomeButton>
          <div>
            <Title>회원가입</Title>
            <SemiTitle>개인정보 수집 및 이용 동의</SemiTitle>
            <Terms>
              <InputCon>
                <input
                  type="checkbox"
                  onClick={(e) => setIsTermAgreed(e.target.checked)}
                />
                <span>
                  <Red>*</Red> 개인정보 수집 및 이용 동의
                </span>
              </InputCon>
              <Term>
                <Policy />
              </Term>
            </Terms>
          </div>
          <div>
            <SemiTitle>회원 정보 입력</SemiTitle>
            <InfoCon>
              {type === "teacher" ? (
                <Info required>
                  <div>선생님 인증 코드</div>
                  <div>
                    <InputText
                      value={certiCode}
                      onChange={(e) => setCertiCode(e.target.value)}
                      readOnly={isCertificated}
                    />
                  </div>
                  <FormBtn onClick={certifyTeacher}>인증하기</FormBtn>
                </Info>
              ) : (
                <Info required>
                  <div>학생 인증 코드</div>
                  <div>
                    <InputText
                      value={certiCode}
                      onChange={(e) => setCertiCode(e.target.value)}
                      readOnly={isCertificated}
                    />
                  </div>
                  <FormBtn onClick={certifyStudent}>인증하기</FormBtn>
                </Info>
              )}
              <Info required>
                <div>이름</div>
                <div>
                  <InputText
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    readOnly={type !== "teacher"}
                    placeholder={
                      type !== "teacher" ? "학생 인증 코드를 입력해주세요." : ""
                    }
                  />
                </div>
              </Info>
              {type === "parents" && (
                <Info required>
                  <div>자녀 이름</div>
                  <div>
                    <InputText
                      value={childrenName}
                      onChange={(e) => setChildrenName(e.target.value)}
                      readOnly
                      placeholder="학생 인증 코드를 입력해주세요."
                    />
                  </div>
                </Info>
              )}
              <Info required>
                <div>아이디</div>
                <div>
                  <InputText
                    value={userName}
                    onChange={(e) => {
                      setIsValidUserName(false);
                      setUserName(e.target.value);
                    }}
                    placeholder="ex. logical"
                  />
                </div>
                <FormBtn onClick={isUserNameTaken}>중복 확인</FormBtn>
              </Info>
              <Info required>
                <div>비밀번호</div>
                <div>
                  <InputText
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </Info>
              {type === "student" && (
                <Info required>
                  <div>학교</div>
                  <div>
                    <InputText
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                      placeholder="ex. 로직고등학교"
                    />
                  </div>
                </Info>
              )}
              {type === "student" && (
                <Info required>
                  <div>학년</div>
                  <div>
                    <Select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                    >
                      <option value="" disabled>
                        학년 선택
                      </option>
                      <option value="1학년">1학년</option>
                      <option value="2학년">2학년</option>
                      <option value="3학년">3학년</option>
                    </Select>
                  </div>
                </Info>
              )}
              <Info required>
                <div>전화번호</div>
                <div>
                  <InputText
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="ex. 010-1234-5678"
                  />
                </div>
              </Info>
              <Info required>
                <div>이메일</div>
                <div>
                  <InputText
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ex. example@example.com"
                  />
                </div>
              </Info>
            </InfoCon>
            <SubmitCon>
              <div onClick={submit}>가입하기</div>
            </SubmitCon>
          </div>
        </Wrapper>
      ) : (
        <Type setType={setType} />
      )}
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 3rem;
  padding: 2rem 0;
  & > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 1024px) {
    & > div {
      width: 80%;
    }
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 2px solid #000;
  padding: 0.5rem 0;
`;

const SemiTitle = styled(Title)`
  font-size: 1.1rem;
  border-bottom: 1px solid #000;
`;

const Terms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputCon = styled.div`
  padding: 1rem;
  border: 1px solid #545454;
  display: flex;
  gap: 1rem;
  & > input {
    cursor: pointer;
    accent-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid #545454;
    border-radius: 0;
  }
`;

const Red = styled.span`
  color: red;
`;

const Term = styled.div`
  height: 20rem;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #545454;
  overflow-y: scroll;
  padding: 1rem 2rem;
`;

const InfoCon = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  border-bottom: 1px solid #d1d1d1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  flex-wrap: wrap;
  &:nth-of-type(1) {
    padding: 0 0 1rem 0;
  }
  &:not(:nth-of-type(1)) {
    padding: 1rem 0;
  }

  & > div:nth-of-type(1) {
    ${(props) =>
      props.required
        ? css`
            &::before {
              content: "*";
              color: #f00;
              margin: 0 0.5rem;
            }
          `
        : null}
    min-width: 8rem;
    font-size: 0.9rem;
    font-weight: bold;
  }

  @media (max-width: 430px) {
    justify-content: center;
  }
`;

const FormBtn = styled.div`
  font-size: 0.75rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  @media (max-width: 430px) {
    width: 80%;
    text-align: center;
  }
`;

const InputText = styled.input`
  border: 1px solid #d1d1d1;
  padding: 0.3rem 0.5rem;
  box-sizing: border-box;
  max-width: 10rem;
  outline: none;
  font-size: 0.8rem;
  ${(props) =>
    props.readOnly &&
    css`
      background: #eeeeee;
    `}
`;

const Select = styled.select`
  border: 1px solid #d1d1d1;
  padding: 0.3rem 0.5rem;
  box-sizing: border-box;
  width: calc(10rem - 5px);
  outline: none;
  font-size: 0.8rem;
`;

const SubmitCon = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    padding: 0.5rem 0.7rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
  }
`;

const HomeButton = styled.div`
  /* position: absolute;
  top: 2rem;
  left: 50%; */
  /* transform: translateX(-50%); */
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row !important;
  gap: 0.3rem;
  transition: all 0.2s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.lightPrimary};
    background: rgba(255, 255, 255, 1);
  }
`;
