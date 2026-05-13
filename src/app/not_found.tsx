import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center p-10">
            <h1 className="text-3xl font-bold text-red-600">
                404 - Сторінку не знайдено
            </h1>

            <p className="mt-2 text-gray-600">
                Можливо, сторінка була переміщена або видалена
            </p>

            <Link
                href="/"
                className="mt-4 inline-block text-blue-600 underline"
            >
                Повернутись на головну
            </Link>
        </div>
    );
}