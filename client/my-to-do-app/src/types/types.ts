export type TaskFormData = {
  title: string;
  description: string;
  priority: "Critical" | "High" | "Medium" | "Low";
  isCompleted: boolean;
  taskType: "Personal" | "Work" | "Hobby";
  startDate: string;
  endDate: string;
};

export type RequestInit = {
  method?: string,
  headers?: Record<string,string>,
  body?: string
}

export type ReactInputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | { name: string; value: string | Date }
export type ReactSelectEvent = React.ChangeEvent<HTMLSelectElement>