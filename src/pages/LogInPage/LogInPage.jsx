import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LogInPage.module.css';

export default function LogInPage() {
  return (
    <div className={css.container}>
      <h1>Log In</h1>
      <LoginForm />
    </div>
  );
}
