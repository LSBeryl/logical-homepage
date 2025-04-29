/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect } from "react";

/**
 * 오시는 길 - Sector #7
 */
export default function Sector7() {
  useEffect(() => {
    // 다른 경로로 나갔다가 올 시 지도 사라지는 이슈 방지용 useEffect
    const scriptId = "naver-map-script";
    const existingScript = document.getElementById(scriptId);

    // 이미 있는 스크립트 제거
    if (existingScript) {
      existingScript.remove();
    }

    // 새 스크립트 생성 및 추가
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
    script.async = true;
    script.onload = () => {
      console.log("Naver Map Script loaded (manual)");

      const LatLng = new window.naver.maps.LatLng(37.308107, 126.830651);

      const map = new window.naver.maps.Map("map", {
        center: LatLng,
        zoom: 17,
      });

      new window.naver.maps.Marker({
        position: LatLng,
        map,
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <Wrapper>
      <MapCon>
        <Title>오시는 길</Title>
        <MapDivCon>
          <MapDiv id="map"></MapDiv>
          <MapDisc>
            <div>로지컬수학학원</div>
            <div>경기도 안산시 단원구 광덕대로 130 508호</div>
            <div>
              ※ 대중교통 이용 및 주차장 안내는{" "}
              <Blog href="https://blog.naver.com/logical_math/223613662438">
                로지컬 블로그
              </Blog>
              를 참조해주세요.
            </div>
          </MapDisc>
        </MapDivCon>
      </MapCon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MapCon = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const MapDivCon = styled.div`
  width: 100%;
  box-shadow: 0px 0px 5px #959595;
`;

const MapDisc = styled.div`
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  & > div {
    &:nth-of-type(1) {
      font-size: 1.1rem;
      font-weight: 500;
    }
    &:nth-of-type(2) {
      color: #999;
      font-size: 0.8rem;
      font-weight: 300;
    }
    &:nth-of-type(3) {
      color: #666;
      font-size: 0.75rem;
      font-weight: 300;
      margin: 1rem 0 0 0;
    }
  }
`;

const MapDiv = styled.div`
  width: 100%;
  height: 500px;

  @media (max-width: 900px) {
    height: 300px;
  }
`;

const Blog = styled(Link)`
  font-weight: 500;
  color: #666;
`;
