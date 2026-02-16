import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "DayOff <dayoffbrandhelp@gmail.com>",
      to: email,
      subject: "Welcome to DayOff.",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 40px;">
          <h1 style="font-size: 24px;">Welcome to DayOff.</h1>
          <p style="margin-top: 20px;">
            You’re officially in. Stay tuned for new releases and upcoming drops.
          </p>
          <p style="margin-top: 30px;">
            — DayOff
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}