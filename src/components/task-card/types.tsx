import { TaskType, TASK_STATUS } from "../../types";

export interface TaskCardProps {
    tasks: TaskType[],
    taskStatus: TASK_STATUS,
    toggleStatus?: (taskId: number) => void
}