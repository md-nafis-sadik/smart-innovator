import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/verify-token",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return NextResponse.json(response.data.user);
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
