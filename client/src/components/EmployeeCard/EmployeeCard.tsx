import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardHeader, CardFooter, Button } from "reactstrap";
import { IEmployeeResponse } from "../../api/types";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

const EmployeeCard: React.FunctionComponent<IEmployeeResponse> = (props) => {
    const [dateCheck, setDateCheck] = useState(new Date().toISOString().split("T")[0]);
    const { firstName, lastName, startDate, endDate, email, id, isPermanent } = props;
    const [modal, setModal] = useState(false);

    const employee = { id, firstName };

    const toggle = () => setModal(!modal);

    useEffect(() => {
        if (endDate)
            if (Date.parse(endDate) <= Date.parse(dateCheck)) {
                setDateCheck(endDate);
            }
    }, []);

    const getYearsWorked = () => {
        if (startDate) {
            const startdate = new Date(startDate).getFullYear().valueOf();
            const comparedate = new Date(dateCheck).getFullYear().valueOf();
            if (comparedate - startdate <= 0) {
                return " <1yr";
            }
            return `${comparedate - startdate}yrs`;
        } else {
            return " N/A";
        }
    };

    return (
        <Card className="w-50 mw" style={{ minWidth: "200px" }}>
            <CardHeader>{`${firstName} ${lastName}`}</CardHeader>
            <CardBody>
                <CardText>
                    {`${isPermanent ? "Permanent" : "Contract"} - ${getYearsWorked()}`}
                    <br />
                    {email}
                </CardText>
            </CardBody>
            <CardFooter
                style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}
            >
                <Link to={`/edit/${id}`}>Edit</Link>
                <Button color="danger" outline onClick={() => toggle()}>
                    Remove
                </Button>
            </CardFooter>
            <ConfirmModal isOpen={modal} {...{ employee, toggle }} />
        </Card>
    );
};

export default EmployeeCard;
