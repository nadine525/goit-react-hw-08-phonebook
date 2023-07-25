import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'components/Loader';
import AppBar from 'components/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <ToastContainer autoClose={3000} theme="dark" />
    </>
  );
};

export default Layout;
