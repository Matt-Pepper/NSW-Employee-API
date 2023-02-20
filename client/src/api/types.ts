export interface IEmployeeResponse {
    firstName: string;
    middleNames?: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    isPermanent: boolean;
    isFullTime: boolean;
    hoursPerWeek: number;
    startDate?: string;
    endDate?: string;
    id: number;
}

export interface GenericResponse {
    status: number;
    message: string;
    error: string;
    timestamp: string;
    path: string;
}
