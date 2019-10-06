// @flow
import React from 'react';
import { Button, Col, Form, FormGroup, FormText, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = "Please enter the username";
    }
    if (!values.password) {
        errors.password = "Please enter the Password";
    }
    return errors;
}

const renderField = ({
    input,
    label,
    type,
    icon,
    className,
    meta: { touched, error, warning }
}) => (
        <FormGroup>
            <InputGroup className={className}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <i className={icon}></i>
                    </InputGroupText>
                </InputGroupAddon>
                <Input {...input} type={type} placeholder={label}/><br />
            </InputGroup>
            {touched && ((error && <FormText color="danger">{error}</FormText>))}
        </FormGroup>
)

let LoginForm = props => {
    const { handleSubmit, submitting } = props
    return(
        <Form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p className="text-muted">Sign In to your account</p>
            <Field component={renderField} icon="icon-user" type="text" label="Username" className="mb-3" name="username"/>
            <Field component={renderField} icon="icon-lock" type="password" label="Password" className="mb-4" name="password" />
            <Row>
            <Col xs="6">
                <Button color="primary" className="px-4" disabled={submitting} type="submit">Login</Button>
            </Col>
            <Col xs="6" className="text-right">
                <Button color="link" className="px-0">Forgot password?</Button>
            </Col>
            </Row>
        </Form>
    )
}

export default reduxForm({
    form: 'login',
    validate
})(LoginForm);