# 로지컬 홈페이지

## 기술 스택

- Next.js 14
- React
- Emotion (CSS-in-JS)
- Supabase (인증, 데이터베이스)
- Framer Motion (애니메이션)

## 시작하기

### 필수 조건

- Node.js 18.17.0 이상
- npm 또는 yarn

### 설치

```bash
npm install
# 또는
yarn install
```

### 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

## 주요 기능

- 반응형 디자인
- 스크롤 기반 애니메이션
- 사용자 인증 (회원가입, 로그인, 비밀번호 재설정)
- 관리자 대시보드
- 문의하기 기능

## 프로젝트 구조

```
src/
├── app/                    # Next.js 14 App Router
│   ├── (auth)/            # 인증 관련 페이지
│   ├── (main)/            # 메인 페이지
│   └── (admin)/           # 관리자 페이지
├── components/            # 재사용 가능한 컴포넌트
├── context/              # React Context
├── hooks/                # Custom Hooks
├── styles/               # 전역 스타일
└── utils/                # 유틸리티 함수
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
