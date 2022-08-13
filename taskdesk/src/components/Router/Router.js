import {useRoutes} from "react-router-dom";
import {Sheet} from "../../pages/Sheet";

export const RouterSist = () => {
    const routes = useRoutes(
        [{
            path: "/",
            element: <Sheet />,
            // children: [
            //     { path: "add", element: <Adder /> },
            //     { path: "board", element: <Board /> }
            // ]
        }]
    )

    return routes
}