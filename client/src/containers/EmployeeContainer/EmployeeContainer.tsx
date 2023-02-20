import { useQuery } from "react-query";
import { getAllEmployeesFn } from "../../api/EmployeeApi";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";

const EmployeeContainer = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ["employees"],
        queryFn: getAllEmployeesFn,
    });

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>{"An error has occurred: " + error}</p>;

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
