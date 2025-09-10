import { cookies as _cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { locale } = await request.json();
    const cookies = await _cookies();
    
    // Validate locale
    const validLocales = ["en", "fr"];
    if (!validLocales.includes(locale)) {
      return NextResponse.json(
        { error: "Invalid locale" },
        { status: 400 }
      );
    }

    // Set the locale cookie with proper security attributes
    cookies.set({
      name: "locale",
      value: locale,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error setting locale cookie:", error);
    return NextResponse.json(
      { error: "Failed to set locale" },
      { status: 500 }
    );
  }
}
