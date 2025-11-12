const baseUrl = "http://localhost:3001";
import type { TaskFormData } from "@/types/types.ts";
import { get, post } from "./requester.ts";

export const createSingleTask = async (taskParams:TaskFormData) =>{
    console.log(taskParams);
    const result = await post(`${baseUrl}/task/create`,taskParams)
    return result
}

export const getAllTasks = async() =>{
    const result = await get(`${baseUrl}/tasks/all`);
    return result
}