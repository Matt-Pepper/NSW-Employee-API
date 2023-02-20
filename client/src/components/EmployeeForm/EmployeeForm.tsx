import { useState } from "react";
import { Button, Col, Form, FormGroup, FormText, Input, Label, Row } from "reactstrap";

const EmployeeForm = () => {
    const [hasEndDate, setHasEndDate] = useState(false);
    return (
        <Form style={{ padding: "40px" }}>
            <h2>Personal Information</h2>
            <Row>
                <Col md={4}>
                    <FormGroup floating>
                        <Input id="firstName" name="firstName" placeholder="First name" />
                        <Label for="firstName">First name</Label>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup floating>
                        <Input
                            id="middleName"
                            name="middleName"
                            placeholder="Middle name optional"
                        />
                        <Label for="middleName">Middle name (optional)</Label>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup floating>
                        <Input id="lastName" name="lastName" placeholder="Last name" />
                        <Label for="lastName">Last name</Label>
                    </FormGroup>
                </Col>
            </Row>
            <h2>Contact Details</h2>
            <Row>
                <Col md={6}>
                    <FormGroup floating>
                        <Input id="email" name="email" type="email" placeholder="Email address" />
                        <Label for="email">Email address</Label>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup floating>
                        <Input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            pattern="(\\+61|0)[0-9]{9}"
                            placeholder="Phone number"
                        />
                        <Label for="phoneNumber">Phone number</Label>
                        <FormText>Must be an Australian number</FormText>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup floating>
                <Input
                    id="address"
                    name="address"
                    type="textarea"
                    placeholder="Residential address"
                />
                <Label for="address">Residential address</Label>
                <FormText>Street address - Suburb - State - Postcode</FormText>
            </FormGroup>
            <h2>Employee Status</h2>
            <FormGroup tag="fieldset">
                <legend>What is the contract type?</legend>
                <FormGroup check>
                    <Input name="isPermanent" type="radio" value="permanent" defaultChecked />
                    <Label check>Permanent</Label>
                </FormGroup>
                <FormGroup check>
                    <Input name="isPermanent" type="radio" value="contract" />
                    <Label>Contract</Label>
                </FormGroup>
            </FormGroup>
            <FormGroup>
                <Label>Start date</Label>
                <Input id="startDate" name="startDate" placeholder="date placeholder" type="date" />
            </FormGroup>
            <FormGroup switch>
                <Input
                    type="switch"
                    checked={hasEndDate}
                    onChange={() => setHasEndDate(!hasEndDate)}
                />
                <Label check>Is there an end date for this contract?</Label>
            </FormGroup>
            {hasEndDate ? (
                <FormGroup>
                    <Label>Finish date</Label>
                    <Input
                        id="endDate"
                        name="startDate"
                        placeholder="date placeholder"
                        type="date"
                    />
                </FormGroup>
            ) : (
                <></>
            )}
            <FormGroup tag="fieldset">
                <legend>Is this employee full-time or part-time?</legend>
                <FormGroup check>
                    <Input name="isFullTime" type="radio" value="fulltime" defaultChecked />
                    <Label check>Full-time</Label>
                </FormGroup>
                <FormGroup check>
                    <Input name="isFullTime" type="radio" value="parttime" />
                    <Label check>Part-time</Label>
                </FormGroup>
            </FormGroup>

            <FormGroup floating>
                <Input id="hours" name="hours" type="number" defaultValue="40" />
                <Label>Hours per week</Label>
            </FormGroup>
            <FormGroup>
                <Button>Submit</Button>
            </FormGroup>
        </Form>
    );
};

export default EmployeeForm;
