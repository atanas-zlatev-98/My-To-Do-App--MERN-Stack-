const baseUrl = "http://localhost:3001";
import type { TaskFormData } from "@/types/types.ts";
import { post } from "./requester.ts";

export const createSingleTask = async (taskParams:TaskFormData) =>{
    console.log(taskParams);
    const result = await post(`${baseUrl}/task/create`,taskParams)
    return result
}