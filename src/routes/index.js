import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home";
import { useDispatch, useSelector } from "react-redux";

import { Provider } from "react-redux";
import { ReduxState } from "../component/Redux/ReduxStore";
import Details from "../component/Details/Details";
const RoutesComponent = () => {
  return (
    <Provider store={ReduxState}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/country/:country_name" element={<Details />}></Route>
          </Routes>
        </Router>
      </Provider>
  )
}

export default RoutesComponent