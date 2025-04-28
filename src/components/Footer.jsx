/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Footer() {
  return (
    <Wrapper>
      <BtnsCon>
        <Btn href="#">이용약관</Btn>
        <Btn bold="true" href="#">
          개인정보처리방침
        </Btn>
      </BtnsCon>
      <InfoCon>
        <div>
          로지컬수학학원 | 대표 : 이휘주 | 경기도 안산시 단원구 광덕대로 130
          폴리타운 A동 5층
        </div>
        <div>
          전화 : 031-403-5358 | 사업자등록번호 : 808-9601842 |
          학원설립운영등록번호 : 제 3051호
        </div>
        <div>개인정보관리책임자 : 이휘주 | 이메일 : dldlgnlgnlwn@naver.com</div>
      </InfoCon>
      <Copyright>Copyright ⓒ 2024 로지컬수학학원 All Rights Reserved</Copyright>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  background: #f9fafb;
  color: #8b95a1;
  font-size: 0.8rem;
  font-weight: 300;
  padding: 3rem 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const BtnsCon = styled.div`
  display: flex;
`;

const Btn = styled(Link)`
  ${(props) =>
    props.bold &&
    css`
      font-weight: 500;
    `}
  color: #8b95a1;
  padding: 0 0.5rem;
  text-decoration: none;
  &:not(:nth-of-type(1)) {
    border-left: 1px solid #d1d1d1;
  }
`;

const InfoCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Copyright = styled.div`
  margin-top: 1rem;
  text-align: center;
`;
