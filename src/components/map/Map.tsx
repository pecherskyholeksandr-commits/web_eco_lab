"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(
    () => import("./MapComponent"),
    {
        ssr: false,
    }
);

export default function Map({
    selectedId,
    onSelect,
}: {
    selectedId: string | null;
    onSelect: (id: string) => void;
}) {
    return (
        <DynamicMap
            selectedId={selectedId}
            onSelect={onSelect}
        />
    );
}