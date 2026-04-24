import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { nombre, email, mensaje } = await req.json();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Usually you would save to database, or send an email here.
    // For demonstration, we just return a success response.
    console.log("Contact form submission:", { nombre, email, mensaje });

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to parse JSON body" }, { status: 500 });
  }
}
