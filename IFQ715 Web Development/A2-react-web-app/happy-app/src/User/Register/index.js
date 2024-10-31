//src/User/Register/index.js
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import React, {useState} from 'react';
import TextField from "../../Components/TextField.js"

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const register = (event) => {
    event.preventDefault();
  
    const API_URL = `https://d2h6rsg43otiqk.cloudfront.net/prod`;
    const url = `${API_URL}/user/register`;

    console.log("Request body:", JSON.stringify({ email, password }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "EzensCqxyl63t09mVG6jr2AXriDQeimS95s4CdpV",
      },
      body: JSON.stringify({
          email: email.trim(),
          password: password.trim()
      }),
    })
    .then((res) => {
      console.log("Response:", res);
      return res.json();
  })
    .then((data) => {
      if (data.error) {
          setError(true);
          setMessage(data.message);
      } else {
          setError(false);
          setMessage(data.message);
          // Reset fields after successful registration
          setEmail("");
          setPassword("");
      }
    })
    .catch((err) => {
        console.error("Registration error:", err);
        setError(true);
        setMessage("An error occurred during registration.");
    });
  };

 return (
   <Container fluid="lg" className="pt-2">
     <main className="flex-grow-1">
       <Row className="viewport-height-75 align-items-center">
         <Col md={6} lg={7}>
           <div style={{ width: "100%" }}>
             <h1 className="mb-5">Register</h1>
             {message && (
                <Alert variant={!error ? "success" : "danger"}>
                  {message}
                </Alert>
              )}
             <Form className=" mb-3"onSubmit={register}>
               <Row className="g-3">
                 <TextField text="Email" type="email" size={6} value={email} onChange={(e) => setEmail(e.target.value)}/>
                 <TextField text="Password" type="password" size={6} value={password} onChange={(e) => setPassword(e.target.value)}/>
                 <TextField
                   text="Address"
                   type="text"
                   size={12}
                   placeholder={"1234 Main St"}
                 />
                 <TextField
                   text="Address 2"
                   type="text"
                   size={12}
                   placeholder={"Apartment, studio, or floor"}
                 />
                 <TextField text="City" type="text" size={6} />
                 <TextField
                   text="State"
                   type="text"
                   size={4}
                   Component={({ id }) => (
                     <Form.Select id={id}>
                       <option>...</option>
                     </Form.Select>
                   )}
                 />
                 <TextField text="Postcode" type="text" size={2} />
                 <div className="col-12">
                   <Button type="submit" variant="primary">
                     Register
                   </Button>
                 </div>
               </Row>
             </Form>
           </div>
         </Col>
       </Row>
     </main>
   </Container>
 );
}

