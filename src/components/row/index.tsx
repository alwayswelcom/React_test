import { RowProps } from "./types"
const Row = (
    {
        children,
        className = ''
    }: RowProps
) => {
    return (
        <div className={`flex flex-row ${className}`}>
            {children}
        </div>
    )
}

export default Row