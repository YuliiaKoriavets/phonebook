import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';
// import { selectIsFetchingCurrentUser } from 'redux/auth/authSelectors';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser)

  useEffect(() => {
    dispatch(fetchCurrentUser());
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
