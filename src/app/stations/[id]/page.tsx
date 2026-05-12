import { stations, measurements } from "@/lib/data";

export default async function StationPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const station = stations.find((s) => s.id === id);

    if (!station) {
        return <div className="p-6 text-red-600">Station not found</div>;
    }

    const stationMeasurements = measurements
        .filter((m) => m.stationId === station.id)
        .sort(
            (a, b) =>
                new Date(b.timestamp).getTime() -
                new Date(a.timestamp).getTime()
        );

    return (
        <div className="p-4">
            {/* HEADER */}
            <h1 className="text-3xl font-bold mb-2">
                {station.name}
            </h1>

            <div className="text-gray-700 mb-4">
                <p>Type: {station.type}</p>
                <p>Latitude: {station.latitude}</p>
                <p>Longitude: {station.longitude}</p>
            </div>

            {/* SECTION TITLE */}
            <h2 className="text-xl font-bold mt-6 mb-3">
                Time Series (Last 10 Measurements)
            </h2>

            {/* INFO BOX */}
            <div className="mb-3 p-2 bg-blue-50 border border-blue-200 rounded text-sm">
                Chronological air quality data for selected monitoring station
            </div>

            <div className="overflow-x-auto mt-4">
                <table
                    className="w-full min-w-[900px] text-sm"
                    style={{ borderSpacing: "0 12px", borderCollapse: "separate" }}
                >
                    {/* HEADER */}
                    <thead>
                        <tr className="bg-green-700 text-white">
                            <th className="p-4">Time</th>
                            <th className="p-4">PM2.5</th>
                            <th className="p-4">PM10</th>
                            <th className="p-4">CO</th>
                            <th className="p-4">NO2</th>
                            <th className="p-4">O3</th>
                            <th className="p-4">SO2</th>
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody>
                        {stationMeasurements.slice(0, 10).map((m, i) => (
                            <tr
                                key={i}
                                className="bg-white shadow-sm"
                            >
                                {/* TIME */}
                                <td className="p-4 whitespace-nowrap">
                                    {new Date(m.timestamp).toLocaleString()}
                                </td>

                                {/* VALUES */}
                                <td className="p-4 text-center font-mono">{m.airQuality.pm25.toFixed(2)}</td>
                                <td className="p-4 text-center font-mono">{m.airQuality.pm10.toFixed(2)}</td>
                                <td className="p-4 text-center font-mono">{m.airQuality.co.toFixed(2)}</td>
                                <td className="p-4 text-center font-mono">{m.airQuality.no2.toFixed(2)}</td>
                                <td className="p-4 text-center font-mono">{m.airQuality.o3.toFixed(2)}</td>
                                <td className="p-4 text-center font-mono">{m.airQuality.so2.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}