import { IEmployeeResponse } from "./types";
import axios from "axios";

const BASE_URL = "/api";

const Api = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
});

export const getAllEmployeesFn = async () => {
    const response = await Api.get<IEmployeeResponse[]>(`/employees`);
    if (response.status !== 200) {
        throw new Error("Could not get Employees");
    }

    return response.data;
};

export const getEmployeeFn = async (id: string) => {
    const response = await Api.get<IEmployeeResponse>(`/employees/${id}`);
    return response.data;
};

export const createEmployeeFn = async (form: IEmployeeResponse) => {
    const response = await Api.post<IEmployeeResponse>(`/employees`, form, {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
    return response.data;
};

export const updateEmployeeFn = async ({ id, form }: { id: string; form: IEmployeeResponse }) => {
    const response = await Api.patch(`/employees/${id}`, form, {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
    return response.data;
};

export const deleteEmployeeFn = async (id: number) => {
    await Api.delete(`/employees/${id}`);
};
