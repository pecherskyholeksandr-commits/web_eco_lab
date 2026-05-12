import Link from "next/link";
import { stations, measurements } from "../lib/data";
import { AirQuality } from "../types/environment";

function calculateStats() {
    const totals: AirQuality = {
        pm25: 0,
        pm10: 0,
        co: 0,
        no2: 0,
        o3: 0,
        so2: 0,
    };

    measurements.forEach((m) => {
        totals.pm25 += m.airQuality.pm25;
        totals.pm10 += m.airQuality.pm10;
        totals.co += m.airQuality.co;
        totals.no2 += m.airQuality.no2;
        totals.o3 += m.airQuality.o3;
        totals.so2 += m.airQuality.so2;
    });

    const count = measurements.length;

    return {
        pm25: (totals.pm25 / count).toFixed(2),
        pm10: (totals.pm10 / count).toFixed(2),
        co: (totals.co / count).toFixed(2),
        no2: (totals.no2 / count).toFixed(2),
        o3: (totals.o3 / count).toFixed(2),
        so2: (totals.so2 / count).toFixed(2),
    };
}

export default function Home() {
    const stats = calculateStats();

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">
                Monitoring Stations
            </h2>

            <ul className="mb-8">
                {stations.map((station) => (
                    <li key={station.id}>
                        <Link
                            href={`/stations/${station.id}`}
                            className="text-blue-600 underline"
                        >
                            {station.name} ({station.type})
                        </Link>
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4">
                Air Quality Statistics (SSR calculated)
            </h2>

            <ul>
                <li>PM2.5: {stats.pm25}</li>
                <li>PM10: {stats.pm10}</li>
                <li>CO: {stats.co}</li>
                <li>NO2: {stats.no2}</li>
                <li>O3: {stats.o3}</li>
                <li>SO2: {stats.so2}</li>
            </ul>
        </div>
    );
}