

export class OutData {

    location: Location;
    current: Current;
}

export interface Location {
    name: String;
    region: String;
    country: String;
    lat: String;
    lon: String;
    tz_id: String;
    localtime_epoch: String;
    localtime: String;
}

export interface Current {
    last_updated_epoch: number;
    last_updated: Date;
    temp_c: number;
    temp_f: number;
    is_day: boolean;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
}
export interface Condition {
    text: string;
    icon: string;
    code: number;
}
