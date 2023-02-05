import { React, useState } from "react";
import { useFormik } from "formik";
import "./styles.css";

const Features = () => {
  const [responseData, setResponseData] = useState(null);

  const formik = useFormik({
    initialValues: {
      publicKey: "",
      message: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.publicKey) {
        errors.publicKey = "Required";
      } else if (!/^[0-9]+\s[0-9]+$/.test(values.publicKey)) {
        errors.publicKey =
          "Invalid Public Key. Please Enter As: <X Y> where X is the first number and Y is the second in the key.";
      }

      if (!values.message) {
        errors.message = "Message is required.";
      } else if (!/^[0-9\s]+$/.test(values.message)) {
        errors.message =
          "Invalid Message. Please enter as numbers followed separated by spaces.";
      }

      return errors;
    },

    onSubmit: (values) => {
      console.log(values);
      fetch("http://127.0.0.1:5000/members", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values,
        }),
      })
        .then((response) => response.json())
        .then((data) => setResponseData(JSON.stringify(data)));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form_field">
          <label htmlFor="ticker">Ticker:</label>
          <textarea
            id="ticker"
            rows="1"
            name="ticker"
            type="ticker"
            onChange={formik.handleChange}
            value={formik.values.publicKey}
          />
          {formik.touched.publicKey && formik.errors.publicKey && (
            <div>{formik.errors.publicKey}</div>
          )}
        </div>
        <div className="form_field">
          <label htmlFor="price">Price:</label>
          <textarea
            id="price"
            rows="10"
            name="price"
            type="price"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message && (
            <div>{formik.errors.message}</div>
          )}
        </div>
        <button onClick={formik.handleReset}>Reset</button>
        <button type="submit">Submit</button>
      </form>
      <div className="field_padding">
        {responseData === null ? (
          <Typed
            strings={["Awaiting input..."]}
            typeSpeed={25}
            backSpeed={10}
            loop
          />
        ) : (
          <div>
            <h1 className="form_descriptions">
              {responseData}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
