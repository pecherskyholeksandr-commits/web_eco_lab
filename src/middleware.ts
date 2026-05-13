import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const start = Date.now();

    const response = NextResponse.next();

    const duration = Date.now() - start;

    console.log("[SERVER LOG]");
    console.log("Method:", req.method);
    console.log("URL:", req.nextUrl.pathname);
    console.log("Duration:", duration + "ms");
    console.log("User-Agent:", req.headers.get("user-agent"));

    return response;
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};