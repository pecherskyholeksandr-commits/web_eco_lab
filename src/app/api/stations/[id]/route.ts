import { NextResponse } from "next/server";
import { stations } from "@/lib/data";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const station = stations.find((s) => s.id === params.id);

    if (!station) {
        return NextResponse.json(
            { success: false, message: "Station not found" },
            { status: 404 }
        );
    }

    return NextResponse.json({
        success: true,
        data: station,
    });
}