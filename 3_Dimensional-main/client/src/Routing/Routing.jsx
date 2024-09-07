import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/HomeScreen/Home';
import ProductScreen from '../pages/ProductScreen/ProductScreen';
import SignUpScreen from '../pages/SignUpScreen/SignUpScreen';
import ProductScreen2 from '../pages/ProductScreen2/productscreen2';
import ProductScreen3 from '../pages/productscreen3/productscreen';
import React, { createContext, useState } from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';



const Routing = () => {


  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/productscreen" element={<ProductScreen />} />
          <Route path="/productscreen2" element={<ProductScreen2 />} />
          <Route path="/productscreen3" element={<ProductScreen3 />} />
        </Routes>
      </Router>
      </Provider>
  );
};

export default Routing;