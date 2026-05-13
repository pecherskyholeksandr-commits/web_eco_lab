"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { stations, measurements } from "@/lib/data";
import { AirQuality } from "@/types/environment";

import Map from "@/components/map/Map";
import Charts from "@/components/charts/Charts";

import { trackEvent } from "@/lib/analytics";

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

    const [selectedStationId, setSelectedStationId] =
        useState<string | null>(null);

    useEffect(() => {
        trackEvent("page_view", {
            page: "home",
        });
    }, []);

    const handleSelectStation = (id: string) => {
        setSelectedStationId(id);

        trackEvent("station_select", {
            stationId: id,
        });
    };

    const handleReset = () => {
        setSelectedStationId(null);

        trackEvent("station_reset");
    };

    return (
        <div className="space-y-10">
            <h1 className="text-3xl font-bold">
                Eco Monitoring System Dashboard
            </h1>

            <div className="border rounded-2xl shadow-md overflow-hidden">
                <Map
                    selectedId={selectedStationId}
                    onSelect={handleSelectStation}
                />
            </div>

            <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
                Reset selection
            </button>

            <Charts selectedStationId={selectedStationId} />

            <h2 className="text-2xl font-bold">
                Monitoring Stations (SSR)
            </h2>

            <ul className="space-y-1">
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

            <h2 className="text-2xl font-bold mt-6">
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