import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'components/Loader';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000} limit={1} theme="dark" />
    </div>
  );
};
