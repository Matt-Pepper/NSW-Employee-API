import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, FormText, Label, Row } from "reactstrap";
import { createEmployeeFn } from "../../api/EmployeeApi";
import { IEmployeeResponse } from "../../api/types";

const UpdateEmployee = () => {
    const { handleSubmit, register, watch } = useForm<IEmployeeResponse>();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [hasEndDate, setHasEndDate] = useState(false);
    const [hasStartDate, setHasStartDate] = useState(false);

    //const onSubmit: SubmitHandler<IEmployeeResponse> = (data) => console.log(data);

    const watchPermanent = watch("isPermanent");
    const watchFulltime = watch("isFullTime");

    function onSubmit(data: FormData): SubmitHandler<IEmployeeResponse> {
        console.log(data);
    }

    const createEmployee = useMutation((event) => {
        event.preventDefault();
    });

    // const createMutation = useMutation(formData => {
    //     mutationFn: (data: FormData) => createEmployeeFn(data),
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({ queryKey: ["employees"] });
    //         navigate("/");
    //     },
    // });

    return (
        <Form style={{ padding: "60px" }} onSubmit={handleSubmit(onSubmit)}>
            <h2>Personal Information</h2>
            <Row>
                <Col md={4}>
                    <FormGroup floating>
                        <input
                            className="form-control"
                            id="firstName"
                            placeholder="First name"
                            {...register("firstName")}
                        />
                        <Label for="firstName">First name</Label>
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
                            className="form-control"
                            id="lastName"
                            placeholder="Last name"
                            {...register("lastName")}
                        />
                        <Label for="lastName">Last name</Label>
                    </FormGroup>
                </Col>
            </Row>
            <h2>Contact Details</h2>
            <Row>
                <Col md={6}>
                    <FormGroup floating>
                        <input
                            className="form-control"
                            id="email"
                            type="email"
                            placeholder="Email address"
                            {...register("email")}
                        />
                        <Label for="email">Email address</Label>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup floating>
                        <input
                            className="form-control"
                            id="phoneNumber"
                            type="tel"
                            pattern="(\\+61|0)[0-9]{9}"
                            placeholder="Phone number"
                            {...register("phoneNumber")}
                        />
                        <Label for="phoneNumber">Phone number</Label>
                        <FormText>Must be an Australian number</FormText>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup floating>
                <textarea
                    className="form-control"
                    id="address"
                    placeholder="Residential address"
                    {...register("address")}
                ></textarea>
                <Label for="address">Residential address</Label>
                <FormText>Street address - Suburb - State - Postcode</FormText>
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
                    {hasStartDate ? (
                        <FormGroup>
                            <input
                                className="form-control"
                                id="startDate"
                                placeholder="date placeholder"
                                type="date"
                                {...register("startDate")}
                            />
                            <Label>Start date</Label>
                        </FormGroup>
                    ) : (
                        <></>
                    )}
                </Col>
                <Col md={6}>
                    <FormGroup switch>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            typeof="switch"
                            checked={hasEndDate}
                            onChange={() => setHasEndDate(!hasEndDate)}
                        />
                        <Label check>Does this employee have a finish date?</Label>
                    </FormGroup>
                    {hasEndDate ? (
                        <FormGroup>
                            <input
                                className="form-control"
                                id="endDate"
                                placeholder="date placeholder"
                                type="date"
                                {...register("endDate")}
                            />
                            <Label>Finish date</Label>
                        </FormGroup>
                    ) : (
                        <></>
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
                            className="form-control"
                            id="hoursPerWeek"
                            type="number"
                            defaultValue="40"
                            {...register("hoursPerWeek")}
                        />
                        <Label>Hours per week</Label>
                    </FormGroup>
                </Col>
            </Row>

            <FormGroup>
                <Button>Submit</Button>
            </FormGroup>
        </Form>
    );
};

export default EmployeeForm;
