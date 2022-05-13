import Card from "../card/indx"
import { TaskCardProps } from "./types"

const TaskCard = ({
    tasks,
    taskStatus,
    toggleStatus = () => null
}: TaskCardProps) => {
    const title = [ "Backlog","In Progress","Done" ][taskStatus]
    return (
        <Card key={`card-${taskStatus}`} className="w-1/3 mx-2 bg-gray-200 rounded-sm" title={title}>
        {
          tasks.map( ({content, id}, contentNdx) => (
            <div
                className="cursor-pointer"
                key={`task-${taskStatus}-${contentNdx}`}
                onClick={() => toggleStatus(id)}
            >
                {content}
            </div>
          ))
        }
        {/* {cardData(ndx)} */}
      </Card>

    )
}

export default TaskCard