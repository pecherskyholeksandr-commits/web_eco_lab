export default function AboutPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">
                About Project
            </h1>

            <p className="mb-4">
                This project is an ecological monitoring system built
                using Next.js, TypeScript and server-side rendering.
            </p>

            <p className="mb-4">
                It demonstrates how to work with environmental data,
                monitoring stations and air quality measurements.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">
                Features
            </h2>

            <ul className="list-disc pl-6">
                <li>Server-Side Rendering (SSR)</li>
                <li>Static Site Generation (SSG)</li>
                <li>Dynamic routing</li>
                <li>TypeScript strict typing</li>
                <li>Mock environmental dataset</li>
            </ul>
        </div>
    );
}