import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import { Registration } from 'pages/Registration';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { userRefresh } from '../redux/auth/operations';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';


export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => { dispatch(userRefresh())}, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Registration />} />}/>
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}/>
        <Route path="/contacts" element={<PrivateRoute redirectTo='/login' element={<Contacts />} />}/>

      </Route>
    </Routes>
  )
};

