/** @jsxImportSource @emotion/react */
"use client";

// Global CSS 컴포넌트

import { css, Global } from "@emotion/react";

export default function GlobalComponent() {
  return (
    <Global
      styles={css`
        @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
        @font-face {
          font-family: "BMDOHYEON";
          src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff")
            format("woff");
          font-weight: normal;
          font-style: normal;
        }
        * {
          font-family: "Pretendard Variable";
        }
        body {
          margin: 0;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
    />
  );
}
