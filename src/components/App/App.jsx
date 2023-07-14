import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { Layout } from '../Layout/Layout';

import { Wrapper } from './App.styled';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';

import Home from 'pages/Home/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';

import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/login" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Wrapper>
  );
};
export default App;
