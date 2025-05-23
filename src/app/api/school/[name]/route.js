import axios from "axios";

export async function GET(_, context) {
  const { params } = await context;

  return new Response(JSON.stringify(params), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
