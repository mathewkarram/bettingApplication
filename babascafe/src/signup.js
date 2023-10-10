import Button from "react-bootstrap/Button";
import './App.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
export  function SignUp() {
  const [email, setEmail] = useState(" ");

  function EmailCheck() {

    if(!email.includes("@")){
      alert("Please enter a valid email!");
    }else {
      alert("You have signed up for our Newsletter!");
    }
    
  }
    return(
     <div>
      <Container>
      <Row>
      <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
      <div class="header">
        <h2>Subscribe to our Newsletter</h2>
        <p>Recieve Weekly Updates and Exclusive Coupons!</p>
      </div>
      <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
      </Row>
      </Container>
      <Container>
      <Row>
      <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
      <div class="container">
        <form action="/signup" method="POST">
          <div class="form-group">
            <label className="formlabel" for="name">Name: </label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              required
            />
          </div>

          <div class="form-group">
            <label className="formlabel" for="email">Email: </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              required
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>

          <Button
            onClick={EmailCheck}
            variant="primary"
            type="submit"
          >
            Subscribe
          </Button>
        </form>
        
      </div>
      <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
      </Row>
      </Container>
      </div>
      );
  }