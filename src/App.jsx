import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LogInPage from './pages/LogInPage/LogInPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={<RestrictedRoute redirectTo="/contacts" component={RegisterPage} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/contacts" component={LogInPage} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="/login" component={ContactsPage} />}
        />
      </Route>
    </Routes>
  );
}
