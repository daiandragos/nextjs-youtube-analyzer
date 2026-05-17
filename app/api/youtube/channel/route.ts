import { NextResponse } from "next/server";
import { getChannelDetails } from "@/lib/youtube";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing channel ID" }, { status: 400 });
  }

  const data = await getChannelDetails(id);

  return NextResponse.json(data);
}
