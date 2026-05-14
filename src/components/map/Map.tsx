"use client";

import dynamic from "next/dynamic";

// lazy loading карти
const DynamicMap = dynamic(() => import("./MapComponent"), {
    ssr: false,
    loading: () => (
        <div className="p-4 text-center text-gray-500">
            Loading map...
        </div>
    ),
});

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