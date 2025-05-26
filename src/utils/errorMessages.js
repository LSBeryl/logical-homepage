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
  "Email already in use": "이미 사용 중인 이메일입니다.",
  "Username already in use": "이미 사용 중인 아이디입니다.",
  "Password is too weak":
    "비밀번호가 너무 약합니다. 더 강력한 비밀번호를 사용해주세요.",
  "Account locked": "계정이 잠겼습니다. 관리자에게 문의해주세요.",
  "Too many failed login attempts":
    "로그인 시도 횟수가 너무 많습니다. 잠시 후 다시 시도해주세요.",
  "Session expired": "세션이 만료되었습니다. 다시 로그인해주세요.",
  "Invalid verification code": "잘못된 인증 코드입니다.",
  "Verification code expired": "인증 코드가 만료되었습니다.",
  "Account not activated":
    "계정이 활성화되지 않았습니다. 이메일을 확인해주세요.",
  "Password reset required": "비밀번호 재설정이 필요합니다.",
  "Invalid password reset token": "잘못된 비밀번호 재설정 토큰입니다.",
  "Password reset token expired": "비밀번호 재설정 토큰이 만료되었습니다.",

  // 프로필 관련
  "Profile not found": "프로필을 찾을 수 없습니다.",
  "Profile already exists": "이미 존재하는 프로필입니다.",
  "Invalid profile data": "잘못된 프로필 정보입니다.",

  // 데이터베이스 관련
  "JSON object requested, multiple (or no) rows returned":
    "아이디를 찾을 수 없습니다.",
  "duplicate key value violates unique constraint":
    "이미 존재하는 데이터입니다.",
  "foreign key constraint fails": "연관된 데이터가 존재하지 않습니다.",
  "column does not exist": "존재하지 않는 항목입니다.",
  "relation does not exist": "존재하지 않는 테이블입니다.",
  "syntax error": "데이터베이스 구문 오류가 발생했습니다.",
  "permission denied": "접근 권한이 없습니다.",
  "connection refused": "데이터베이스 연결이 거부되었습니다.",
  "timeout expired": "데이터베이스 응답 시간이 초과되었습니다.",
  "deadlock detected": "데이터베이스 교착 상태가 발생했습니다.",

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
