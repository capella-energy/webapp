import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-center mb-4"
          >
            Log In
          </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group data-aos="fade-up" data-aos-duration="700" id="email">
              <Form.Control
                className="form-input"
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
            <Button
              data-aos="fade-up"
              data-aos-duration="1200"
              disabled={loading}
              className="w-100"
              type="submit"
            >
              Log In
            </Button>
          </Form>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="w-100 text-center mt-3"
          >
            <Link className="links" to="/forgot-password">
              Forgot Password?
            </Link>
          </div>
        </Card.Body>
      </Card>
      <div
        data-aos="fade-up"
        data-aos-duration="1800"
        className="w-100 text-center mt-2"
      >
        Need an account?{" "}
        <Link className="links" to="/signup">
          Sign Up
        </Link>
      </div>
    </>
  );
}
