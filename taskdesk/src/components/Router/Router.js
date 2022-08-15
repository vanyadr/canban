import {useRoutes} from "react-router-dom";
import {Sheet, Board, Adder, Start} from "../../pages";

export const RouterSist = () => {
    const route = useRoutes(
        [{
            path: "/",
            element: <Sheet />,
            children: [
                { path: "", element: <Start/> },
                { path: "add", element: <Adder /> },
                { path: "board", element: <Board /> }
            ]
        }]
    )

    return route
}