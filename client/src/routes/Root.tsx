import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";

const Root = () => {
    const pathname = window.location.pathname;
    return (
        <div>
            <NavBarComponent />
            <p></p>
            <Outlet />
        </div>
    );
};

export default Root;
