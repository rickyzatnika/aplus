import Contact from "@/models/Contact";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest) {
  await connect();

  try {
    const contact = await Contact.find({});
    return new NextResponse(JSON.stringify(contact), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}

export async function POST(req = NextRequest) {
  await connect();

  try {
    const body = await req.json();
    const newContact = await Contact.create(body);

    return new NextResponse(JSON.stringify(newContact), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}
