import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div className={css.container}>
      <h1>Register</h1>
      <RegistrationForm />
    </div>
  );
}
