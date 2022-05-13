import CardHeader from "./card-header"
import { CardProps } from "./types"

const Card = ({children, className = '', title}: CardProps) => {
    return (
        <div className={`bg-white ${className}`}>
            <CardHeader title={title}/>
            {children}
        </div>
    )
}

export default Card