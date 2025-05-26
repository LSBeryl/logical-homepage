/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DashboardLayout from "./DashboardLayout";

const contentStyles = css`
  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #333;
  }
`;

export default function Teacher({ userName }) {
  return (
    <DashboardLayout userName={userName} role="teacher">
      <div css={contentStyles}>
        <h1>선생님 대시보드</h1>
        {/* 선생님 대시보드 컨텐츠 */}
      </div>
    </DashboardLayout>
  );
}
