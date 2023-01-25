import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkaction } from "../Redux/Slices";
import NightlightIcon from "@mui/icons-material/Nightlight";

function Header() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div >
      <div className="header">
        <h3 className="title">Where in the World ?</h3>

        <div onClick={() => dispatch(darkaction(!state.reduxState.dark))}>
          <span className="moon">
            <NightlightIcon />
          </span>
          <span className="Dark">Dark Mode</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
