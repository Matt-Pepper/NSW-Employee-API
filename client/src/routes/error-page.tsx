import { Link, useRouteError } from "react-router-dom";
import { Alert } from "reactstrap";

const ErrorPage = () => {
    const error: any = useRouteError();
    console.error(error);
    return (
        <Alert color="danger">
            <h1>Opps!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to={"/"}>Home</Link>
        </Alert>
    );
};

export default ErrorPage;
