import Row from "../components/row"
import { LayoutProps } from "./types"

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="bg-sky-500 h-screen w-screen pt-12">
            {/* <Header /> */}
            <Row className="content-wrapper">
                {children}
            </Row>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout