import Services from "@/models/Services";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest, { params: { id } }) {
  await connect();

  try {
    const service = await Services.findById(id);
    return new NextResponse(JSON.stringify(service), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}
