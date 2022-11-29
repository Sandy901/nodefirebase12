import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  getProoductList,
  updateProduct,
} from "../features/products/productSlice";
import { Link } from "react-router-dom";

const SignupControllerSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
  image: Yup.string().required("Required"),
});
const Signup = (props) => {
  const dispatch = useDispatch();
  const { isAddNewProduct, ProductData, setIsModalVisible } = props;

  const { loading, productList, error } = useSelector(
    (state) => state.products
  );

  const handleSignup = async (values) => {
    if (isAddNewProduct) {
      const requiredObject = {
        productTitle: values.title,
        productDescription: values.description,
        productImageUrl: values.image,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requiredObject),
      };
      const response = await fetch(
        "http://localhost:3050/products",
        requestOptions
      );

      const data = await response.json();

      if (data) {
        const id = productList.length + 1;
        dispatch(getProoductList());
        setIsModalVisible(false);
      }
    } else {
      const requiredObject = {
        productTitle: values.title,
        productDescription: values.description,
        productImageUrl: values.image,
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requiredObject),
      };
      const response = await fetch(
        `http://localhost:3050/products/${ProductData.id}`,
        requestOptions
      );

      const data = await response.json();
      dispatch(getProoductList());
      setIsModalVisible(false);
    }
  };

  return (
    <div className="row py-5">
      <div className="col-10 mx-auto">
        <Formik
          validationSchema={SignupControllerSchema}
          enableReinitialize
          onSubmit={handleSignup}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="email"
                render={({ field, form: { isSubmitting } }) => (
                  <div className="form-group">
                    <label htmlFor="title">Email</label>
                    <input
                      className="form-control form-control-lg"
                      {...field}
                      disabled={isSubmitting}
                      type="text"
                      placeholder="Enter Email"
                    />
                    {errors.title && touched.title ? (
                      <div>{errors.title}</div>
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
                    {errors.title && touched.title ? (
                      <div>{errors.title}</div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                )}
              />
              
             <div className="d-flex justify-content-md-between">
             <button type="submit" className="btn btn-inline">
                Submit
              </button>
              
             </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
