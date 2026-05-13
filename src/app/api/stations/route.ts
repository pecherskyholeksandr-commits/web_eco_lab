import { NextResponse } from "next/server";
import { stations } from "@/lib/data";

export async function GET() {
    try {
        if (!stations) {
            throw new Error("Stations data missing");
        }

        return NextResponse.json({
            success: true,
            data: stations,
        });
    } catch (error: any) {
        console.error("[API ERROR]", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to load stations",
            },
            { status: 500 }
        );
    }
}