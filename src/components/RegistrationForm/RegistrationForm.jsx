import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">Name</label>
        <Field className={css.input} type="text" name="name" required />
        <ErrorMessage name="name" component="div" className={css.error} />

        <label className={css.label} htmlFor="email">Email</label>
        <Field className={css.input} type="email" name="email" required />
        <ErrorMessage name="email" component="div" className={css.error} />

        <label className={css.label} htmlFor="password">Password</label>
        <Field className={css.input} type="password" name="password" required />
        <ErrorMessage name="password" component="div" className={css.error} />

        <button type="submit" className={css.button}>Register</button>
      </Form>
    </Formik>
  );
}
