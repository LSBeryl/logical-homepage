import axios from "axios";

export async function GET(_, context) {
  // API 사용 승인 받으면 쓰고 아니면 지울 파일
  const { params } = await context;

  return new Response(JSON.stringify(params), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
