import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
import { getAllEmployeesFn } from "../../api/EmployeeApi";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";

const EmployeeContainer = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ["employees"],
        queryFn: getAllEmployeesFn,
    });

    if (isLoading) return <p>Loading...</p>;

    if (error)
        return (
            <Alert color="danger">
                <h1>Opps!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{`${error}`}</i>
                </p>
                <Link to={"/"}>Home</Link>
            </Alert>
        );

    return (
        <>
            {data && (
                <div className="d-flex flex-column align-items-center" style={{ gap: "5px" }}>
                    {data.map((employee) => {
                        return <EmployeeCard key={employee.id} {...{ ...employee }} />;
                    })}
                </div>
            )}
        </>
    );
};

export default EmployeeContainer;
