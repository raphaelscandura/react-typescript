import { TaskInterface } from "./TaskInterface";

export interface ListInterface{
    tasks:TaskInterface[],
    selectTask: (selectedTask:TaskInterface) => void
}