export enum TASK_STATUS {
    STATUS_BACKLOG,
    STATUS_PROGRESS,
    STATUS_DONE
}
export interface TaskType {
    taskStatus: TASK_STATUS
    content: string
    id: number
}