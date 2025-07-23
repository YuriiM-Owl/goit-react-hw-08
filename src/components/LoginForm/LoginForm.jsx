import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="email">Email</label>
        <Field className={css.input} type="email" name="email" required />
        <ErrorMessage name="email" component="div" className={css.error} />

        <label className={css.label} htmlFor="password">Password</label>
        <Field className={css.input} type="password" name="password" required />
        <ErrorMessage name="password" component="div" className={css.error} />

        <button type="submit" className={css.button}>Log In</button>
      </Form>
    </Formik>
  );
}
