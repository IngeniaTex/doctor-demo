import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
