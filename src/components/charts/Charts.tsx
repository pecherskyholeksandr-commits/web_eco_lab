"use client";

import dynamic from "next/dynamic";
import { stations } from "@/lib/data";

//lazy loading всіх графіків
const LineChart = dynamic(
    () => import("recharts").then((mod) => mod.LineChart),
    { ssr: false }
);

const BarChart = dynamic(
    () => import("recharts").then((mod) => mod.BarChart),
    { ssr: false }
);

const PieChart = dynamic(
    () => import("recharts").then((mod) => mod.PieChart),
    { ssr: false }
);

const Line = dynamic(
    () => import("recharts").then((mod) => mod.Line),
    { ssr: false }
);

const Bar = dynamic(
    () => import("recharts").then((mod) => mod.Bar),
    { ssr: false }
);

const Pie = dynamic(
    () => import("recharts").then((mod) => mod.Pie),
    { ssr: false }
);

const XAxis = dynamic(
    () => import("recharts").then((mod) => mod.XAxis),
    { ssr: false }
);

const YAxis = dynamic(
    () => import("recharts").then((mod) => mod.YAxis),
    { ssr: false }
);

const Tooltip = dynamic(
    () => import("recharts").then((mod) => mod.Tooltip),
    { ssr: false }
);

const Legend = dynamic(
    () => import("recharts").then((mod) => mod.Legend),
    { ssr: false }
);

const ResponsiveContainer = dynamic(
    () => import("recharts").then((mod) => mod.ResponsiveContainer),
    { ssr: false }
);

const Cell = dynamic(
    () => import("recharts").then((mod) => mod.Cell),
    { ssr: false }
);

// DATA
const lineData = [
    { day: "Mon", pm25: 22 },
    { day: "Tue", pm25: 28 },
    { day: "Wed", pm25: 31 },
    { day: "Thu", pm25: 26 },
    { day: "Fri", pm25: 35 },
    { day: "Sat", pm25: 30 },
    { day: "Sun", pm25: 24 },
];

const barData = stations.map((s) => {
    let pollution = 0;

    switch (s.type) {
        case "industrial":
            pollution = 60;
            break;
        case "urban":
            pollution = 40;
            break;
        case "rural":
            pollution = 20;
            break;
        default:
            pollution = 30;
    }

    return {
        station: s.name,
        pollution,
    };
});

const pieData = [
    { name: "PM2.5", value: 40 },
    { name: "NO2", value: 25 },
    { name: "SO2", value: 20 },
    { name: "CO", value: 15 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"];

export default function Charts() {
    return (
        <div className="space-y-10">

            {/* LINE */}
            <div className="bg-white p-5 rounded-2xl shadow-md border">
                <h2 className="text-2xl font-bold mb-4">
                    PM2.5 Changes Over Time
                </h2>

                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={lineData}>
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line dataKey="pm25" stroke="#22c55e" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* BAR */}
            <div className="bg-white p-5 rounded-2xl shadow-md border">
                <h2 className="text-2xl font-bold mb-4">
                    Pollution by Station
                </h2>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barData}>
                        <XAxis dataKey="station" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pollution" fill="#3b82f6" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* PIE */}
            <div className="bg-white p-5 rounded-2xl shadow-md border">
                <h2 className="text-2xl font-bold mb-4">
                    Pollution Structure
                </h2>

                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={pieData} dataKey="value" label>
                            {pieData.map((_, index) => (
                                <Cell
                                    key={index}
                                    fill={
                                        COLORS[index % COLORS.length]
                                    }
                                />
                            ))}
                        </Pie>

                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}