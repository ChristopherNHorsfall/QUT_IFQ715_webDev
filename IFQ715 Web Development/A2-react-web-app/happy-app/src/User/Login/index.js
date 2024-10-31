//src/User/Login/index.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TextField from "../../Components/TextField";

export default function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState("mike@gmail.com");
    const [password, setPassword] = useState("password");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const API_URL = 'https://d2h6rsg43otiqk.cloudfront.net/prod';
        const url = `${API_URL}/user/login`;
    
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": "EzensCqxyl63t09mVG6jr2AXriDQeimS95s4CdpV",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
    
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`HTTP error! status: ${response.status} - ${errorMessage}`);
            }
    
            const data = await response.json();
            localStorage.setItem("token", data.token);
            setIsLoggedIn(true);
            navigate("/");
        } catch (error) {
            setMessage(error.message);
        }

    };

    return (
        <Container fluid="lg" className="pt-2">
            <main className="flex-grow-1">
                <Row className="viewport-height-75 align-items-center">
                    <Col md={6} lg={7}>
                        <h1 className="mb-5">Login</h1>
                        <Form onSubmit={handleLogin}>
                            <TextField 
                                text="Email" 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="mike@gmail.com"
                            />
                            <TextField 
                                text="Password" 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password"
                            />
                            {message && <p>{message}</p>}
                            <Button type="submit" variant="primary" className="mt-3">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </main>
        </Container>
    );
}