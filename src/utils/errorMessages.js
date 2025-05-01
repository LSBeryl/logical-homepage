export const errorMessages = {
  // 인증 관련
  "Invalid login credentials": "아이디 또는 비밀번호가 올바르지 않습니다.",
  "Email not confirmed": "이메일 인증이 필요합니다.",
  "User not found": "존재하지 않는 계정입니다.",
  "Invalid email or password": "이메일 또는 비밀번호가 올바르지 않습니다.",
  "Email rate limit exceeded":
    "이메일 전송 횟수가 초과되었습니다. 잠시 후 다시 시도해주세요.",
  "Network error": "네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.",
  "Invalid email": "올바른 이메일 형식이 아닙니다.",
  "Password should be at least 6 characters":
    "비밀번호는 6자 이상이어야 합니다.",
  "User already registered": "이미 등록된 사용자입니다.",
  "Invalid phone number": "올바른 전화번호 형식이 아닙니다.",
  "Invalid OTP": "잘못된 인증 코드입니다.",
  "OTP expired": "인증 코드가 만료되었습니다.",
  "Invalid refresh token": "세션이 만료되었습니다. 다시 로그인해주세요.",
  "JWT expired": "세션이 만료되었습니다. 다시 로그인해주세요.",
  "Invalid JWT": "유효하지 않은 세션입니다. 다시 로그인해주세요.",
  "Invalid token": "유효하지 않은 토큰입니다.",
  "Token expired": "토큰이 만료되었습니다.",
  "Invalid password": "비밀번호가 올바르지 않습니다.",
  "Invalid username": "아이디가 올바르지 않습니다.",
  "Invalid credentials": "인증 정보가 올바르지 않습니다.",

  // 프로필 관련
  "Profile not found": "프로필을 찾을 수 없습니다.",
  "Profile already exists": "이미 존재하는 프로필입니다.",
  "Invalid profile data": "잘못된 프로필 정보입니다.",

  // 기타
  "Rate limit exceeded":
    "요청 횟수가 초과되었습니다. 잠시 후 다시 시도해주세요.",
  "Service unavailable": "서비스를 일시적으로 이용할 수 없습니다.",
  "Internal server error":
    "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
};

export const getErrorMessage = (error) => {
  return errorMessages[error] || error;
};
