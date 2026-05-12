export interface AirQuality {
    pm25: number;
    pm10: number;
    co: number;
    no2: number;
    o3: number;
    so2: number;
}

export interface MonitoringStation {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    type: "urban" | "industrial" | "rural";
}

export interface Measurement {
    stationId: string;
    timestamp: string;
    airQuality: AirQuality;
}