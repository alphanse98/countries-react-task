import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { dataaction } from "../Redux/Slices";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//looding
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
// import imgs from '../../imgc.png'

function Details() {
  let [county, setcountry] = useState({});
  const [openLoader, setOpenLoader] = useState(false);

  let { country_name } = useParams();
  console.log(county);

  let state = useSelector((state) => state);
  let Nave = useNavigate();

  let fun = async () => {
    let res = await axios.get("https://restcountries.com/v2/all");
    setcountry(...res.data.filter((ele) => ele.name == country_name));
    setOpenLoader(false);
  };

  useEffect(() => {
    setOpenLoader(true);
    if (state.reduxState.data.length > 0) {
      setcountry(
        ...state.reduxState.data.filter((ele) => ele.name == country_name)
      );
      setOpenLoader(false);
    } else {
      fun();
    }
  }, []);

  return (
    <div className={state.reduxState.dark ? "light-mode" : "dark-mode"}>
      <Header />

      <div className="detailBox">
        <div>
          <button onClick={() => Nave("/")}>Back</button>
        </div>

        <div className="flexBox">
          <img src={county?.flags?.png}></img>

          <div className="flexBoxTwo">
            <div className="flexdetails">
              <div>
                <p>{county?.name}</p>
                <h5>
                  Nantive name: <span>{county?.name}</span>
                </h5>
                <h5>
                  Popuiation: <span>{county?.population}</span>
                </h5>
                <h5>
                  Region: <span>{county?.region}</span>
                </h5>
                <h5>
                  Sub Region: <span>{county?.subregion}</span>
                </h5>
                <h5>
                  Capital: <span>{county?.capital}</span>
                </h5>
              </div>

              <div className="top_level">
                <h5>
                  Top Level Domain:{" "}
                  {county?.topLevelDomain?.map((ele, i) => (
                    <span key={i}>{ele}</span>
                  ))}
                </h5>
                <h5>
                  Currencies:{" "}
                  {county?.currencies?.map((ele, i) => (
                    <span key={i}>{ele.name}</span>
                  ))}
                </h5>
                <h5>
                  Top Level Domain: <span>{county?.capital}</span>
                </h5>
              </div>
            </div>

            <div className="Border-Countries">
              <h4>
                Border Countries :
                {county?.borders?.map((e, i) => (
                  <span key={i}>{e}</span>
                ))}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Details;
