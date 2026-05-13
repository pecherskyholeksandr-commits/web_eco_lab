"use client";

import "leaflet/dist/leaflet.css";

import {
    MapContainer,
    TileLayer,
    Popup,
    CircleMarker,
    useMap,
} from "react-leaflet";

import { useEffect } from "react";
import { stations } from "@/lib/data";

function getColor(type: string) {
    switch (type) {
        case "urban":
            return "green";
        case "industrial":
            return "red";
        case "rural":
            return "blue";
        default:
            return "gray";
    }
}

function MapCenter({
    lat,
    lng,
}: {
    lat: number;
    lng: number;
}) {
    const map = useMap();

    useEffect(() => {
        if (lat && lng) {
            map.flyTo([lat, lng], 8, {
                duration: 1,
            });
        }
    }, [lat, lng, map]);

    return null;
}

type Props = {
    selectedId: string | null;
    onSelect: (id: string) => void;
};

export default function MapComponent({
    selectedId,
    onSelect,
}: Props) {
    const activeStation = stations.find(
        (s) => s.id === selectedId
    );

    return (
        <div
            style={{
                border: "2px solid #d1d5db",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
        >
            <MapContainer
                center={[49.0, 31.0]}
                zoom={6}
                minZoom={5}
                maxZoom={10}
                maxBounds={[
                    [44.0, 22.0],
                    [53.0, 41.0],
                ]}
                maxBoundsViscosity={1.0}
                style={{
                    height: "450px",
                    width: "100%",
                }}
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {activeStation && (
                    <MapCenter
                        lat={activeStation.latitude}
                        lng={activeStation.longitude}
                    />
                )}

                {stations.map((station) => {
                    const isActive =
                        selectedId === station.id;

                    return (
                        <CircleMarker
                            key={station.id}
                            center={[
                                station.latitude,
                                station.longitude,
                            ]}
                            radius={isActive ? 14 : 8}
                            pathOptions={{
                                color: isActive
                                    ? "#facc15"
                                    : getColor(station.type),
                                fillColor: isActive
                                    ? "#facc15"
                                    : getColor(station.type),
                                fillOpacity: 0.7,
                                weight: isActive ? 5 : 2,
                            }}
                            eventHandlers={{
                                click: () =>
                                    onSelect(station.id),
                            }}
                        >
                            <Popup>
                                <div>
                                    <h3>
                                        <b>{station.name}</b>
                                    </h3>

                                    <p>Type: {station.type}</p>

                                    <p>
                                        {station.latitude},{" "}
                                        {station.longitude}
                                    </p>

                                    {isActive && (
                                        <p style={{ color: "green" }}>
                                            ACTIVE SELECTION
                                        </p>
                                    )}
                                </div>
                            </Popup>
                        </CircleMarker>
                    );
                })}
            </MapContainer>
        </div>
    );
}