import {useRoutes} from "react-router-dom";
import {Sheet, Board, Adder} from "../../pages";

export const RouterSist = () => {
    const route = useRoutes(
        [{
            path: "/",
            element: <Sheet />,
            children: [
                { path: "add", element: <Adder /> },
                { path: "board", element: <Board /> }
            ]
        }]
    )

    return route
}