import { Formik, Form, Field, ErrorMessage } from "formik";

import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contacts/operations";

import css from "./ContactForm.module.css";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be no more than 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .matches(
      /^[0-9]+(-[0-9]+)*$/,
      "Phone number must contain only digits and '-' and must start or end with a digit"
    )
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be no more than 50 characters")
    .required("Phone number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        name: values.name,

        number: values.number,
      })
    );

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <div>
          <label htmlFor="name">Name</label>

          <Field type="text" name="name" id="name" />

          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div>
          <label htmlFor="number">Phone</label>

          <Field type="text" name="number" id="number" />

          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
