import React from "react";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

export const CountryList = () => {
  
  let state = useSelector((state) => state);
  // let dispatch = useDispatch();
  let Nave = useNavigate();
console.log(state.reduxState.data);
  return (
    <div >
      <div className="box ">
        {state.reduxState.data
          .filter(
            (ele) =>
            ele.region.includes(state.reduxState.search)||
              ele.name.includes(state.reduxState.search) ||
              ele.name.toLowerCase().includes(state.reduxState.search) 
              // ele.region.includes(state.reduxState.search)
          )
          .map((ele, index) => (
            <div key={index}>
              <div
                className="cart"
                onClick={() => {
                  Nave(`/country/${ele.name}`);
                }}
              >
                <img src={ele.flags.png}></img>
                <p className="Name">
                  <span>{ele.name}</span>
                </p>
                <h5>
                  Population: <span>{ele.population}</span>
                </h5>
                <h5>
                  Region: <span>{ele.region}</span>
                </h5>
                <h5>
                  Capital: <span>{ele.capital}</span>
                </h5>
                
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
