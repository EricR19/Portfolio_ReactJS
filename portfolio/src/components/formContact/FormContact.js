import React from "react";
import "./formContact.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Forms = (
  <div>
    <h1 className="title">Contact me</h1>
    <Formik
      initialValues={{ email: "", message: "", names: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.names) {
          errors.names = "Required";
        }
        if (!values.message) {
          errors.message = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          const comentario = {
            nombre: values.names,
            correo: values.email,
            mensaje: values.message,
          };
          fetch(
            "https://jsonplaceholder.typicode.com/comments",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(comentario),
            },
            console.log(comentario)
          );
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="main">
            <div className="tittle">Let's talk</div>
            <div className="intro">
              Please if you want to contact me send me and email
            </div>
            <div className="input-name">
              <input
                type="names"
                name="names"
                onChange={handleChange}
                onBlur={handleBlur}
                className="txt-name"
                id="txtName"
                placeholder="Name"
              ></input>
              {errors.names && touched.names && errors.names}
            </div>
            <div className="email">Email</div>
            <div className="input-email">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="txt-input"
                s
                placeholder="Email"
              ></input>
              {errors.email && touched.email && errors.email}
              <div className="text-Msg">
                <div className="Message"> Insert your Message</div>
                <textarea
                  type="message"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                ></textarea>
                {errors.message && touched.message && errors.message}
              </div>
              <div>
                <div>
                  <button>Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  </div>
);
