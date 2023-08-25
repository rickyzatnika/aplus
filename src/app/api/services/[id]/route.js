import connect from "@/utils/db";
import Services from "@/models/Services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest, { params: { id } }) {
  try {
    await connect();

    const service = await Services.findById(id);
    return new NextResponse(JSON.stringify(service), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}
