import { TaskInterface } from "./TaskInterface";

export default interface FormInterface{
    setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>,
}