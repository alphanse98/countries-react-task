import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchaction } from "../Redux/Slices";
// import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [RegionFilter, setRegionFilter] = useState({ name: "Filter By Region" ,value:""});
  let[DisplayFilter,setDisplayFilter]=useState(false);
  let dispatch = useDispatch();
  let selectOption = (param) => {
    setRegionFilter(param)
    dispatch(searchaction(param.value));
  };

  return (
    <div className="searchBox">
      <div className="intBox">
        <input
          onChange={(e) => dispatch(searchaction(e.target.value))}
          placeholder="Search for a country..."
        ></input>
      </div>
      <div className="select" onClick={()=>setDisplayFilter(!DisplayFilter)}>
        {RegionFilter.name}
        <div className={DisplayFilter ? "FilterBox":"none"}  >
          <p onClick={()=>selectOption({name:"All",value:""})}>All</p>
          <p onClick={()=>selectOption({name:"Africa",value:"Africa"})}>Africa</p>
          <p onClick={()=>selectOption({name:"America",value:"America"})}>America</p>
          <p onClick={()=>selectOption({name:"Asia",value:"Asia"})}>Asia</p>
          <p onClick={()=>selectOption({name:"Europe",value:"Europe"})}>Europe</p>
          <p onClick={()=>selectOption({name:"Oceania",value:"Oceania"})}>Oceania</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
