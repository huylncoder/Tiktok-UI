import Header from "~/Layouts/components/Header/Header"
import Sidebar from "./Sidebar/Sidebar"

const DefaultLayout = ({ children }) => {
  return (
    <div>
        <Header/>
        <div className="container">
            <Sidebar/>
            <div className="content">
                { children }
            </div>
        </div>
    </div>
  )
}

export default DefaultLayout