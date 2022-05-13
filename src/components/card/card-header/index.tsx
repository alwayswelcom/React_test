import { CardHeaderProps } from "../types"

const CardHeader = ({title, className = ''}: CardHeaderProps) => {
    return (
        <div className={`${className}`}>
            {title}
        </div>
    )

}
export default CardHeader