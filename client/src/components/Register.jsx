import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

import { useContext } from "react";

import AuthContext from "../contexts/authContext";
import useForm from "../hooks/useForm";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm-password",
  Username: "username",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const { values, onChange, onSubmit } = useForm(handleSubmit, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.ConfirmPassword]: "",
    [RegisterFormKeys.Username]: "",
  });

  async function handleSubmit() {
    try {
      setErrorMessage("");
      await registerSubmitHandler(values);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://t3.ftcdn.net/jpg/00/93/55/88/240_F_93558844_zsJSg3nGtgXX0HSToxWJeBjEt1OIyTHo.jpg)",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
        <MDBCardBody className="px-5">
          <form id="register" onSubmit={onSubmit}>
            <h2 className="text-uppercase text-center mb-5">
              Create an account
            </h2>
            <MDBInput
              wrapperClass="mb-4"
              label="Your Name"
              size="lg"
              name="username"
              id="username"
              type="text"
              onChange={onChange}
              values={values[RegisterFormKeys.Username]}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              name="email"
              id="email"
              type="email"
              onChange={onChange}
              values={values[RegisterFormKeys.Email]}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              name="password"
              id="password"
              type="password"
              onChange={onChange}
              values={values[RegisterFormKeys.Password]}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Repeat your password"
              size="lg"
              name="confirm-password"
              id="confirm-password"
              type="password"
              onChange={onChange}
              values={values[RegisterFormKeys.ConfirmPassword]}
            />

            <MDBBtn
              className="mb-4 w-100 gradient-custom-4"
              size="lg"
              type="submit"
            >
              Register
            </MDBBtn>
            {errorMessage && <p className="text-danger mb-3">{errorMessage}</p>}
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
