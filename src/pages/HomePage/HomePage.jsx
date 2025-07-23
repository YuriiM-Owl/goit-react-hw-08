import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1>Welcome to Contact Book</h1>
      <p>Securely manage your private contacts</p>
    </div>
  );
}
