import { ColProps } from "./types"
const Col = (
    {
        children,
        className = ''
    }: ColProps
) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {children}
        </div>
    )
}

export default Col