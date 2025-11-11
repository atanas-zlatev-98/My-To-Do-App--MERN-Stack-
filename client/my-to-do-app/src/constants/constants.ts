import type { TaskFormData } from "@/types/types";

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const currentDate = `${day}-${month}-${year}`;

export const createTaskInitialValues:TaskFormData = {
    title: "",
    description: "",
    priority: "Low",
    isCompleted: false,
    taskType: "Work",
    startDate: currentDate,
    endDate: "",
}