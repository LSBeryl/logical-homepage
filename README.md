# Logical Math Academy Website

로지컬 수학학원의 공식 웹사이트입니다. Next.js와 Supabase를 활용한 현대적인 웹 애플리케이션입니다.

## 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험 제공
- **인증 시스템**: Supabase를 활용한 안전한 회원가입/로그인
- **애니메이션**: Framer Motion을 활용한 부드러운 UI 애니메이션
- **테마 시스템**: 일관된 디자인 시스템 적용

## 기술 스택

- **프레임워크**: Next.js 14
- **스타일링**: Emotion
- **데이터베이스**: Supabase
- **애니메이션**: Framer Motion
- **아이콘**: React Icons
- **폼 관리**: React Hook Form
- **상태 관리**: React Context

## 시작하기

### 필수 조건

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone [repository-url]

# 의존성 설치
npm install
# 또는
yarn install

# 개발 서버 실행
npm run dev
# 또는
yarn dev
```

### 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 프로젝트 구조

```
src/
├── app/                    # Next.js 14 App Router
│   ├── (auth)/            # 인증 관련 페이지
│   ├── (main)/            # 메인 페이지
│   └── layout.jsx         # 루트 레이아웃
├── components/            # 재사용 가능한 컴포넌트
├── styles/               # 전역 스타일 및 테마
└── utils/               # 유틸리티 함수
```

## 주요 페이지

- **메인 페이지**: 학원 소개 및 주요 정보
- **로그인/회원가입**: 사용자 인증
- **비밀번호 재설정**: 계정 복구 기능

## 스타일 가이드

- **색상**: `theme.js`에서 관리되는 일관된 색상 시스템
- **타이포그래피**: Noto Sans KR 폰트 사용
- **레이아웃**: 반응형 그리드 시스템

## 기여하기

1. 이슈 생성 또는 기존 이슈 확인
2. 새로운 브랜치 생성
3. 변경사항 커밋
4. Pull Request 생성

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.
