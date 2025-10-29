import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createTaskInitialValues } from "@/constants/constants";
import type { ReactInputEvent } from "@/types/types";
import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";

const CreateTaskForm = () => {

  const [formData, setFormData] = useState(createTaskInitialValues);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const changeHandler = (e: ReactInputEvent) => {
    setFormData((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };

  const localDate = (date:Date)=>{
    const localDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    return localDate.toISOString().split("T")[0];
  }

  const handlePriorityChange = (value: string) => {
    setFormData((oldValues) => ({
      ...oldValues,
      priority: value,
    }));
  };

  const handleTaskType = (value: string) => {
    setFormData((oldValues) => ({
      ...oldValues,
      taskType: value,
    }));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("From Submitted", formData);
  };

  const handleDateSelect = (selectedDate: Date) => {
    setDate(selectedDate);
    setOpen(false);
   
    setFormData((oldValues) => ({
      ...oldValues,
      endDate: localDate(selectedDate),
    }));
  };
  
  return (

    <form onSubmit={submitHandler} className="m-5 w-100 flex flex-col gap-5">
      <div className="space-y-6">
        
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" type="text" value={formData.title} onChange={changeHandler}></Input>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" value={formData.description} onChange={changeHandler}></Textarea>
        </div>

        <div className="flex flex-row gap-5">
          <div>
            <Label htmlFor="priotity">Priority</Label>
              <Select onValueChange={handlePriorityChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
              <SelectContent>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="taskType">Task Type</Label>
              <Select onValueChange={handleTaskType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
              <SelectContent>
                <SelectItem value="Personal">Personal</SelectItem>
                <SelectItem value="Hobby">Hobby</SelectItem>
                <SelectItem value="Work">Work</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-3">

          <Label htmlFor="date" className="px-1">
            Finish Before
          </Label>
          <Popover open={open} onOpenChange={setOpen}>

            <PopoverTrigger asChild>
              <Button variant="outline" id="date" className="w-48 justify-between font-normal">
                {date ? date.toLocaleDateString() : "Select date"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
              <Calendar mode="single" selected={date} required={true} captionLayout="dropdown" onSelect={handleDateSelect}/>
            </PopoverContent>

          </Popover>
        </div>
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default CreateTaskForm;
