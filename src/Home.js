import React from "react";
import axios from "axios";
import { useEffect } from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataaction } from "./component/Redux/Slices";
import Header from "./component/header/Header";
import Search from "./component/search/Search";
import { CountryList } from "./component/CountryList/CountryList";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";




function Home() {
  

  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  const [openLoader, setOpenLoader] = useState(false);


  useEffect(() => {
    setOpenLoader(true);
    let fun = async () => {
      let res = await axios.get("https://restcountries.com/v2/all");
      dispatch(dataaction(res.data));
      setOpenLoader(false);
    };
    fun();
  }, []);



  return (
    <div className={state.reduxState.dark ? "light-mode" : "dark-mode"}>
      <Header />
      <Search />
      <CountryList />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Home;
