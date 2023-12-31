import React from "react";
import { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

import { useContext } from "react";
import useForm from "../hooks/useForm";
import AuthContext from "../contexts/authContext";

const LoginFormKyes = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const { values, onChange, onSubmit } = useForm(handleSubmit, {
    [LoginFormKyes.Email]: "",
    [LoginFormKyes.Password]: "",
  });

  async function handleSubmit() {
    try {
      setErrorMessage("");
      await loginSubmitHandler(values);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <form id="login" onSubmit={onSubmit}>
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">Login</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  name="email"
                  id="email"
                  type="email"
                  size="lg"
                  onChange={onChange}
                  value={values[LoginFormKyes.Email]}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  name="password"
                  id="password"
                  type="password"
                  size="lg"
                  onChange={onChange}
                  value={values[LoginFormKyes.Password]}
                />

                <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                  Login
                </MDBBtn>
                {errorMessage && (
                  <p className="text-danger mb-3">{errorMessage}</p>
                )}
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <a href="/register" style={{ color: "#393f81" }}>
                    Register here
                  </a>
                </p>

                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </div>
              </form>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
