import { NextResponse } from "next/server";
import { measurements } from "@/lib/data";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const stationId = searchParams.get("stationId");

    let data = measurements;

    if (stationId) {
        data = data.filter(
            (m) => m.stationId === stationId
        );
    }

    return NextResponse.json({
        success: true,
        count: data.length,
        data,
    });
}