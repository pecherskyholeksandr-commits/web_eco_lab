import { NextResponse } from "next/server";
import { stations } from "@/lib/data";

type Params = {
    id: string;
};

export async function GET(
    request: Request,
    context: { params: Params }
) {
    const { id } = context.params;

    const station = stations.find((s) => s.id === id);

    if (!station) {
        return NextResponse.json(
            { error: "Station not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(station);
}