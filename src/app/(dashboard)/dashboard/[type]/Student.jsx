/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DashboardLayout from "./DashboardLayout";

const contentStyles = css`
  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

export default function Student({ userName }) {
  return (
    <DashboardLayout userName={userName} role="student">
      <div css={contentStyles}>
        <h1>학생 대시보드</h1>
        {/* 학생 대시보드 컨텐츠 */}
      </div>
    </DashboardLayout>
  );
}
