import { schema } from "@/app/registrationSchema";
import { NextRequest, NextResponse } from "next/server";
import { parseEnv } from "util";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const data = Object.fromEntries(formData);

  const parsed = schema.safeParse(data);
  console.log("parsed:", parsed);

  if (parsed.success) {
    return NextResponse.json({ message: "User registered", user: parsed.data });
  } else {
    return NextResponse.json(
      { message: "Invalid data", error: parsed.error },
      { status: 400 }
    );
  }
}
