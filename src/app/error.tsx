"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error("[FRONTEND ERROR]", error);
    }, [error]);

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-red-600">
                Щось пішло не так
            </h2>

            <p className="text-gray-600 mt-2">
                Сталася помилка при завантаженні компонента
            </p>

            <button
                onClick={() => reset()}
                className="mt-4 px-4 py-2 bg-gray-200 rounded"
            >
                Спробувати знову
            </button>
        </div>
    );
}