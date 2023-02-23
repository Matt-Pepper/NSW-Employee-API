import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar, NavItem } from "reactstrap";

const NavBarComponent = () => {
    const { pathname } = useLocation();
    return (
        <Navbar color="dark" dark>
            <Nav pills>
                <NavItem>
                    <Link className="navbar-brand" to={"/"}>
                        Home
                    </Link>
                </NavItem>
                <NavItem>
                    <Link
                        className={pathname !== "/create" ? "nav-link active" : "nav-link disabled"}
                        to={"/create"}
                    >
                        Create Employee
                    </Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default NavBarComponent;
