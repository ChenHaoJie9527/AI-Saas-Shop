import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const APIKEY = process.env.OPEN_API_KEY;

const openai = new OpenAI({
  apiKey: APIKEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    if (!APIKEY) {
      return new NextResponse("OpenAI API KEY not configured", {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse("Messages are required", {
        status: 400,
      });
    }

    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    return NextResponse.json(res.choices[0]);
  } catch (error) {
    console.log(error);
    return new NextResponse("internal error", {
      status: 500,
    });
  }
}
