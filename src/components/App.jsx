import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Home } from 'pages/Home';
import { Registration } from 'pages/Registration';




export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="/register" component={Registration} />
      {/* <Route path="/login" component={Login} /> */}
      {/* <Route path="/contacts" component={Contacts} /> */}
  </Routes>
  )
};

