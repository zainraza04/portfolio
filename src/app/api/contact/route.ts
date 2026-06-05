import { isEmailConfigured, sendContactEmail } from "@/lib/email";
import { NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = "force-dynamic";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const data = contactSchema.parse(body);

    if (!isEmailConfigured()) {
      return NextResponse.json({
        success: true,
        mailto: true,
        message: "Email service not configured. Using mailto fallback.",
      });
    }

    await sendContactEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid request" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 502 },
    );
  }
}
