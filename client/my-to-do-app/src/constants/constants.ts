const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const currentDate = `${day}-${month}-${year}`;

export const createTaskInitialValues = {
    title: "",
    description: "",
    priority: "",
    isCompleted: false,
    taskType: "",
    startDate: currentDate,
    endDate: "",
}