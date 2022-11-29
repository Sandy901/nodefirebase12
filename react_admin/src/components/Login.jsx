import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { useNavigate } from "react-router";

const initialValues = { email: "",
password: "",}
const LoginControllerSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate =  useNavigate();

  

  const handleLogin = async (values) => {
    const requiredObject = {
        email:values.email,
        password:values.password,
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requiredObject)
    };
      const response = await fetch("http://localhost:3050/login",requestOptions);
      const data = await response.json();
      dispatch(loginUser(data.data))
      navigate("/dashboard")

  };

  return (
    <div className="row py-5">
      <div className="col-10 mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={LoginControllerSchema}
          enableReinitialize
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="email"
                render={({ field, form: { isSubmitting } }) => (
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-control form-control-lg"
                      {...field}
                      disabled={isSubmitting}
                      type="text"
                      placeholder="Enter Email"
                    />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                )}
              />

              <Field
                name="password"
                as="password"
                render={({ field, form: { isSubmitting } }) => (
                  <div className="form-group">
                    <label htmlFor="password">Passowrd</label>
                    <input
                      className="form-control form-control-lg"
                      {...field}
                      disabled={isSubmitting}
                      type="password"
                      placeholder="Enter Password"
                    />
                    {errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                )}
              />
              
              <button type="submit" className="btn btn-inline">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
