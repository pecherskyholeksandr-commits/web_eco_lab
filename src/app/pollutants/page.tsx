export default function PollutantsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">
                Pollutants Guide
            </h1>

            <p className="mb-6">
                Overview of main air pollutants used in the system.
            </p>

            <div className="space-y-4">
                <div>
                    <h2 className="text-xl font-bold">PM2.5</h2>
                    <p>
                        Fine particulate matter that can penetrate deep
                        into the lungs and bloodstream.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold">PM10</h2>
                    <p>
                        Coarse particles that affect respiratory system.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold">CO (Carbon Monoxide)</h2>
                    <p>
                        Toxic gas produced by incomplete combustion.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold">NO2</h2>
                    <p>
                        Nitrogen dioxide from vehicle emissions and industry.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold">O3 (Ozone)</h2>
                    <p>
                        Ground-level ozone harmful to lungs and environment.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold">SO2</h2>
                    <p>
                        Sulfur dioxide from burning fossil fuels.
                    </p>
                </div>
            </div>
        </div>
    );
}