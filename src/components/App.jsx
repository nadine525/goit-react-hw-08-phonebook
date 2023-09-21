import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import Layout from './Layout/Layout';
// import Home from 'pages/Home/Home';
// import Registration from 'pages/Registration/Registration';
// import Login from 'pages/Login/Login';
// import Contacts from 'pages/Contacts/Contacts';
import { userRefresh } from '../redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';

import ThemeProvider from 'hooks/useTheme';

const Home = lazy(() => import('pages/Home/Home'));
const Registration = lazy(() => import('pages/Registration/Registration'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const isRefreching = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(userRefresh()) }, [dispatch]);

  return (
    
    isRefreching ? (
    <b>Refreshing user...</b>
    ) : (
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Layout />}>

              <Route index element={<Home />} />
              <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Registration />} />}/>
              <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}/>
              <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}/>

          </Route>
            </Routes>
        </ThemeProvider>)
  )
};

