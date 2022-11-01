import React from 'react';
import { useState, useEffect } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('')
    const [loginDetails, setLoginDetails] = useState({
        userName: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        if (event.target.name === "email") {
            validateEmail(event);
        } else setLoginDetails({ ...loginDetails, [event.target.name]: event.target.value });
    }
    const validateEmail = (event) => {
        var email = event.target.value

        if ((validator.isEmail(email))) {
            setEmailError('')
        }else{
            setEmailError('Enter valid Email!')
        }
        setLoginDetails({ ...loginDetails, [event.target.name]: event.target.value });
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
        navigate('/home');
    }
    const getDataFromLocalStorage = () => {
        if (localStorage.getItem("loginDetails") !== null) {
            let userCredentials = JSON.parse(localStorage.getItem("loginDetails"));
            setLoginDetails(userCredentials);
        }
    }
    useEffect(() => {
        getDataFromLocalStorage();
    }, []);
    return (
        <Container>
            <Row>
                <Col xs={6}> <h1>Login Page </h1>
                    <Form horizontal id="loginForm">
                        <FormGroup controlId="formUserName">
                            <FormControl type="text" name="userName" placeholder="User Name" onChange={handleChange} value={loginDetails.userName} />
                        </FormGroup>
                        <FormGroup controlId="formEmail">
                            <FormControl type="email" name="email" placeholder="Email Address" pattern=".+@beststartupever\.com" onChange={handleChange} value={loginDetails.email} />
                            <span style={{fontSize: '12px',
                                color: 'red',
                            }}>{emailError}</span>
                        </FormGroup>
                        <FormGroup controlId="formPassword">
                            <FormControl type="password" name="password" placeholder="Password" onChange={handleChange} value={loginDetails.password} />
                        </FormGroup>
                        <FormGroup controlId="formSubmit">
                            <Button variant="secondary" size="lg" type="submit" disabled={loginDetails.userName.length === 0 || loginDetails.email.length === 0 || loginDetails.password.length === 0 || !validator.isEmail(loginDetails.email)} onClick={handleFormSubmit}>
                                Submit
                            </Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default LoginPage;