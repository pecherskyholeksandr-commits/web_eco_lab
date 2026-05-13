import { MonitoringStation, Measurement, AirQuality } from "@/types/environment";

export const stations: MonitoringStation[] = [
    { id: "1", name: "Kyiv Center", latitude: 50.45, longitude: 30.52, type: "urban" },
    { id: "2", name: "Kyiv Industrial", latitude: 50.47, longitude: 30.60, type: "industrial" },
    { id: "3", name: "Suburban Area", latitude: 50.41, longitude: 30.40, type: "rural" },
    { id: "4", name: "Dnipro Station", latitude: 48.45, longitude: 34.98, type: "urban" },
    { id: "5", name: "Lviv Center", latitude: 49.84, longitude: 24.03, type: "urban" },
    { id: "6", name: "Odessa Port", latitude: 46.48, longitude: 30.72, type: "industrial" },
    { id: "7", name: "Carpathian Station", latitude: 48.62, longitude: 22.30, type: "rural" },
];

export const measurements: Measurement[] = [];

const stationsCount = 7;
const hours = 48;

for (let s = 1; s <= stationsCount; s++) {
    for (let h = 0; h < hours; h++) {
        measurements.push({
            stationId: String(s),

            timestamp: `2026-01-01T${h}:00:00Z`,

            airQuality: {
                pm25: Number((12 + Math.sin(h / 4) * 6 + Math.random()).toFixed(2)),
                pm10: Number((20 + Math.sin(h / 5) * 8 + Math.random()).toFixed(2)),
                co: Number((0.3 + Math.random() * 0.5).toFixed(2)),
                no2: Number((18 + Math.sin(h / 6) * 7).toFixed(2)),
                o3: Number((25 + Math.cos(h / 5) * 10).toFixed(2)),
                so2: Number((2 + Math.random() * 3).toFixed(2)),
            },
        });
    }
}

export const airQualityStats: AirQuality = {
    pm25: 18.5,
    pm10: 27.3,
    co: 0.7,
    no2: 22.1,
    o3: 31.4,
    so2: 5.2,
};