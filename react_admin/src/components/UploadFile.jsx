import React, { Fragment, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import {  Field } from "formik";
const UploadFile = (props) => {

  const { label, name, type, ...rest } = props;
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview();
    }
  }, [image]);
  return (
    <div>
      <Field
        name={name}
        render={({ field, form }) => {
          const { setFieldValue } = form;
          return (
            <Fragment>
              {preview ? (
                <img
                  className="img-preview"
                  src={preview}
                  style={{ objectFit: "cover" }}
                  onClick={() => {
                    const imageFile = document.getElementById(name);
                    console.log(imageFile);
                    imageFile.value = "";

                    setImage();
                    setPreview();
                  }}
                  width={150}
                  height={150}
                />
              ) : (
                <button
                  className="upload margin-end-3"
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef.current.click();
                  }}
                >
                  <svg
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="upload-svg"
                  >
                    <path
                      d="M18 4l-1.5-3h-9L6 4H1v17h22V4h-5zM8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div className="f-s-12">Upload</div>
                </button>
              )}
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                id={name}
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file && file.type.substr(0, 5) === "image") {
                    setImage(file);
                    setFieldValue(name, file);
                  } else {
                    setImage(null);
                  }
                }}
              />
            </Fragment>
          );
        }}
      />
    </div>
  );
};

export default UploadFile;
