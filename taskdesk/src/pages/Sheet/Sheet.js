import {Outlet} from "react-router-dom";
import {Header} from '../../components'

export const Sheet = () => {
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}