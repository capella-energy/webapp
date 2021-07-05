import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./login.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/comingsoon");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-center mb-4"
          >
            Sign Up
          </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group data-aos="fade-up" data-aos-duration="700" id="email">
              <Form.Control
                type="email"
                placeholder="Email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group
              data-aos="fade-up"
              data-aos-duration="900"
              id="password"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group
              data-aos="fade-up"
              data-aos-duration="1200"
              id="password-confirm"
            >
              <Form.Control
                type="password"
                placeholder="Password Confirmation"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button
              data-aos="fade-up"
              data-aos-duration="1500"
              disabled={loading}
              className="w-100"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div
        data-aos="fade-up"
        data-aos-duration="1800"
        className="w-100 text-center mt-2"
      >
        Already have an account?{" "}
        <Link className="links" to="/login">
          Log In
        </Link>
      </div>
    </div>
  );
}
