import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getProoductList, updateProduct } from "../features/products/productSlice";

const ProductControllerSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),
    description: Yup.string()
    .min(2, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
    image:Yup.string().required("Required")
});
const ProductController = (props) =>{
const dispatch=   useDispatch();
  const {isAddNewProduct,ProductData, setIsModalVisible} =props
  const [EditProductData, setEditProductData] = useState({
    title: "",
    description: "",
    image: "",
  })
  const { loading, productList, error } = useSelector(
    (state) => state.products
  );


  const  addProduct =async (values) =>{
    if (isAddNewProduct) {
      const requiredObject = {
        productTitle:values.title,
        productDescription:values.description,
        productImageUrl:values.image
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requiredObject)
    };
      const response = await fetch("http://localhost:3050/products",requestOptions);

      const data = await response.json()

      if (data) {
        const id = productList.length+1;
      dispatch(getProoductList())
        setIsModalVisible(false)
      }
    
    } else {
      const requiredObject = {
        productTitle:values.title,
        productDescription:values.description,
        productImageUrl:values.image
      }
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requiredObject)
    };
      const response = await fetch(`http://localhost:3050/products/${ProductData.id}`,requestOptions);

      const data = await response.json()
      dispatch(getProoductList())
      setIsModalVisible(false)
    }
  }
  

  useEffect(() => {
    if (!isAddNewProduct) {
     setEditProductData({
      title: ProductData.title,
      description: ProductData.description,
      image: ProductData.image,
     })
    }else{
      setEditProductData({
        title: "",
        description: "",
        image: "",
      })
    }
    return () =>{
      setEditProductData({
        title: "",
        description: "",
        image: "",
      })
    }
  }, [isAddNewProduct])
  
  return  <div className="row">
  <div className="col-10 mx-auto">
  <Formik
     initialValues={EditProductData}
     validationSchema={ProductControllerSchema}
     enableReinitialize
     onSubmit={addProduct}
   >
     {({ errors, touched }) => (
       <Form>
         <Field
           name="title"
           render={({ field, form: { isSubmitting } }) => (
             <div className="form-group">
               <label htmlFor="title">Title</label>
               <input
                 className="form-control form-control-lg"
                 {...field}
                 disabled={isSubmitting}
                 type="text"
                 placeholder="title"
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
           name="description"
           as="description"
           render={({ field, form: { isSubmitting } }) => (
             <div className="form-group">
               <label htmlFor="description">description</label>
               <input
                 className="form-control form-control-lg"
                 {...field}
                 disabled={isSubmitting}
                 type="description"
                 placeholder="discription"
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
           name="image"
           render={({ field, form: { isSubmitting } }) => (
             <div className="form-group">
               <label htmlFor="image">Image URL</label>
               <input
                 className="form-control form-control-lg"
                 {...field}
                 disabled={isSubmitting}
                 type="text"
                 placeholder="image"
               />
               {errors.image && touched.image ? (
                 <div>{errors.image}</div>
               ) : (
                 <div></div>
               )}
             </div>
           )}
         />
         <button type="submit" className="btn btn-inline">Submit</button>
       </Form>
     )}
   </Formik>
  </div>
 </div>
}

export default ProductController;
