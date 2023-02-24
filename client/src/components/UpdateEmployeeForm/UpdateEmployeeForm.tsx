import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, FormFeedback, FormGroup, FormText, Label, Row } from "reactstrap";
import { getEmployeeFn, updateEmployeeFn } from "../../api/EmployeeApi";
import { IEmployeeResponse } from "../../api/types";

const UpdateEmployeeForm = () => {
    const queryClient = useQueryClient();
    const { id } = useParams();
    const navigate = useNavigate();

    const { isLoading, error, data } = useQuery({
        queryKey: ["employee"],
        queryFn: () => getEmployeeFn(id),
        onSuccess: (data) => reset(data),
    });

    const {
        handleSubmit,
        register,
        watch,
        reset,
        formState: { errors },
    } = useForm<IEmployeeResponse>({
        defaultValues: {},
    });

    // stores the state from the date switches
    const [hasEndDate, setHasEndDate] = useState(false);
    const [hasStartDate, setHasStartDate] = useState(false);
    useEffect(() => {
        setHasEndDate(false);
        setHasStartDate(false);
        if (data?.startDate !== null) {
            setHasStartDate(true);
        }
        if (data?.endDate !== null) {
            setHasEndDate(true);
            setHasStartDate(true);
        }
    }, [data]);

    const watchPermanent = watch("isPermanent");
    const watchFulltime = watch("isFullTime");
    const watchStartDate = watch("startDate") ?? "";

    const onSubmitHandler: SubmitHandler<IEmployeeResponse> = (data) => {
        updateMutation.mutate(data);
    };

    const updateMutation = useMutation({
        mutationFn: (data: IEmployeeResponse) => updateEmployeeFn(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["employees"] });
            navigate("/");
        },
    });

    // responsible for making when the end date is toggled the start date input is also visible
    const handleEndDateChange = () => {
        if (!hasEndDate) {
            setHasStartDate(true);
        }
        setHasEndDate(!hasEndDate);
    };

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>{"An error has occurred: " + error}</p>;

    return (
        <Form style={{ padding: "60px" }} onSubmit={handleSubmit(onSubmitHandler)}>
            <h2>Personal Information</h2>
            <Row>
                <Col md={4}>
                    <FormGroup floating>
                        <input
                            className={`form-control ${errors.firstName && "is-invalid"}`}
                            id="firstName"
                            placeholder="First name"
                            {...register("firstName", { required: "This field is required" })}
                        />
                        <Label for="firstName">First name</Label>
                        <FormFeedback>{errors.firstName && errors.firstName.message}</FormFeedback>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup floating>
                        <input
                            className="form-control"
                            id="middleNames"
                            placeholder="Middle name optional"
                            {...register("middleNames")}
                        />
                        <Label for="middleNames">Middle name (optional)</Label>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup floating>
                        <input
                            className={`form-control ${errors.lastName && "is-invalid"}`}
                            id="lastName"
                            placeholder="Last name"
                            {...register("lastName", { required: "This field is required" })}
                        />
                        <Label for="lastName">Last name</Label>
                        <FormFeedback>{errors.lastName && errors.lastName.message}</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>
            <h2>Contact Details</h2>
            <Row>
                <Col md={6}>
                    <FormGroup floating>
                        <input
                            className={`form-control ${errors.email && "is-invalid"}`}
                            id="email"
                            type="email"
                            placeholder="Email address"
                            {...register("email", { required: "This field is required" })}
                        />
                        <Label for="email">Email address</Label>
                        <FormFeedback>{errors.email && errors.email.message}</FormFeedback>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup floating>
                        <input
                            className={`form-control ${errors.phoneNumber && "is-invalid"}`}
                            id="phoneNumber"
                            type="tel"
                            placeholder="Phone number"
                            {...register("phoneNumber", {
                                required: "This field is required",
                                pattern: {
                                    value: /^(?:\+?61|0) ?(?:4|[578]\d) ?(?:\d ?){8}\b|^(?:\+61|61|0)?(?:\((?:0[1-9])\)|0[1-9])[ ]?\d{4}[ ]?\d{4}$/i,
                                    message:
                                        "Valid Australian phone number needed e.g. 0400 123 456 or (02) 1234 5678",
                                },
                            })}
                        />
                        <Label for="phoneNumber">Phone number</Label>
                        <FormText>Must be an Australian number</FormText>
                        <FormFeedback>
                            {errors.phoneNumber?.type === "required" && errors.phoneNumber.message}
                            {errors.phoneNumber?.type === "pattern" && errors.phoneNumber.message}
                        </FormFeedback>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup floating>
                <textarea
                    className={`form-control ${errors.address && "is-invalid"}`}
                    id="address"
                    placeholder="Residential address"
                    {...register("address", { required: "This field is required" })}
                ></textarea>
                <Label for="address">Residential address</Label>
                <FormText>Street address - Suburb - State - Postcode</FormText>
                <FormFeedback>{errors.address && errors.address.message}</FormFeedback>
            </FormGroup>
            <h2>Employee Status</h2>
            <Row>
                <Col md={6}>
                    <FormText>
                        <br />
                        What is the contract type?
                        <br />
                    </FormText>
                    <FormGroup switch>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="isPermanent"
                            {...register("isPermanent")}
                        />
                        <Label>{watchPermanent ? "Permanent" : "Contract"}</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup switch>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            typeof="switch"
                            checked={hasStartDate}
                            onChange={() => setHasStartDate(!hasStartDate)}
                        />
                        <Label check>Does this employee have a start date?</Label>
                    </FormGroup>
                    {hasStartDate && (
                        <FormGroup>
                            <input
                                className={`form-control ${errors.startDate && "is-invalid"}`}
                                id="startDate"
                                placeholder="date placeholder"
                                type="date"
                                {...register("startDate", { required: "This field is required" })}
                            />
                            <Label>Start date</Label>
                            <FormFeedback>
                                {errors.startDate && errors.startDate.message}
                            </FormFeedback>
                        </FormGroup>
                    )}
                </Col>
                <Col md={6}>
                    <FormGroup switch>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            typeof="switch"
                            checked={hasEndDate}
                            onChange={() => handleEndDateChange()}
                        />
                        <Label check>Does this employee have a finish date?</Label>
                    </FormGroup>
                    {hasEndDate && (
                        <FormGroup>
                            <input
                                className={`form-control ${errors.endDate && "is-invalid"}`}
                                id="endDate"
                                placeholder="date placeholder"
                                type="date"
                                {...register("endDate", {
                                    required: "This field is required",
                                    min: {
                                        value: watchStartDate,
                                        message: "End date can't be before start date",
                                    },
                                })}
                            />
                            <Label>Finish date</Label>
                            <FormFeedback>
                                {errors.endDate?.type === "required" && errors.endDate.message}
                                {errors.endDate?.type === "min" && errors.endDate.message}
                            </FormFeedback>
                        </FormGroup>
                    )}
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={6}>
                    <FormText>
                        <br />
                        Is this employee full-time or part-time?
                        <br />
                    </FormText>
                    <FormGroup switch>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="isFullTime"
                            {...register("isFullTime")}
                        />
                        <Label>{watchFulltime ? "Full-Time" : "Part-Time"}</Label>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup floating>
                        <input
                            className={`form-control ${errors.hoursPerWeek && "is-invalid"}`}
                            id="hoursPerWeek"
                            type="number"
                            defaultValue="40"
                            {...register("hoursPerWeek", {
                                required: "This field is required",
                                min: { value: 0, message: "Number must be greater than 0" },
                                max: { value: 168, message: "Number must be less than 168" },
                            })}
                        />
                        <Label>Hours per week</Label>
                        <FormFeedback>
                            {errors.hoursPerWeek?.type === "required" &&
                                errors.hoursPerWeek.message}
                            {errors.hoursPerWeek?.type === "min" && errors.hoursPerWeek.message}
                            {errors.hoursPerWeek?.type === "max" && errors.hoursPerWeek.message}
                        </FormFeedback>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Button>Submit</Button>
            </FormGroup>
        </Form>
    );
};

export default UpdateEmployeeForm;
