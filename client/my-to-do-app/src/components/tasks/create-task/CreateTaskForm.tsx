import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog,DialogClose,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover,PopoverContent,PopoverTrigger } from "@/components/ui/popover";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createTaskInitialValues } from "@/constants/constants";
import type { ReactInputEvent } from "@/types/types";
import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import {createSingleTask} from "@/api/task-api.ts";

const CreateTaskForm = () => {

  const [formData, setFormData] = useState(createTaskInitialValues);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const changeHandler = (input: ReactInputEvent) => {

    if ("target" in input) {

      const { name, value } = input.target;

      setFormData((oldValue) => ({
        ...oldValue,
        [name]: value,
      }));

    } else {

      const { name, value } = input;

      let formattedValue: Date | string;

      if (value instanceof Date) {

        const localDate = new Date( Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
        formattedValue = localDate.toISOString().split("T")[0];

      } else {
        formattedValue = value;
      }

      setFormData((oldValues) => ({
        ...oldValues,
        [name]: formattedValue,
      }));

    }
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("From Submitted", formData);

    try{
        const task = await createSingleTask(formData);
        console.log(task);
        setFormData(createTaskInitialValues);

    }catch(err){
     console.log(err);
    }
  };

  const isFormEmpty = !formData.title || !formData.description || !formData.endDate || !formData.taskType || !formData.priority;

  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Create Task</Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col items-center">
          <DialogHeader className="flex text-left w-100">
            <DialogTitle>Create Task.</DialogTitle>
             <DialogDescription>
                Fill in the details below.
             </DialogDescription>
          </DialogHeader>

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
                  <Select onValueChange={(value) => changeHandler({ name: "priority", value })} defaultValue="Low">
                    <SelectTrigger className="w-[190px]">
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
                  <Select onValueChange={(value) => changeHandler({ name: "taskType", value })} defaultValue="Work">
                    <SelectTrigger className="w-[190px]">
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
                    <Calendar
                      mode="single"
                      selected={date}
                      required={true}
                      captionLayout="dropdown"
                      onSelect={(selectedDate) => {
                        setDate(selectedDate);
                        changeHandler({ name: "endDate", value: selectedDate });
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
             <DialogClose asChild>
              <Button disabled={isFormEmpty} type="submit">Add Task</Button>
            </DialogClose>
          </form>
        </DialogContent>
    </Dialog>
  );
};

export default CreateTaskForm;
