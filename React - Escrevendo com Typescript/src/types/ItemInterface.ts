import { TaskInterface } from "./TaskInterface";

export interface ItemInterface extends TaskInterface{
    selectTask: (selectedTask:TaskInterface) => void
}