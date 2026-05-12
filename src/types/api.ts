export interface ApiRequest {
    stationId?: string;
    startDate?: string;
    endDate?: string;
}

import { MeasurementSeries } from "./environment";

export interface ApiResponse {
    success: boolean;
    data?: MeasurementSeries;
    error?: ApiError;
}

export interface ApiError {
    code: number;
    message: string;
}