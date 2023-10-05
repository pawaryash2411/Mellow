import React, { useState } from "react";
import "../Styling/Search.css";
import searchIcon from "../assets/searchIcon.png";
import { useDispatch } from "react-redux";
import { getProduct, getProductSearch } from "../Redux/Actions/productActions";
// import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      dispatch(getProductSearch(keyword));
      dispatch(getProduct(keyword));
    } else {
      dispatch(getProduct());
    }
  };

  return (
    <>
      <div className="search-container">
        <form className="search-form" onSubmit={searchHandler}>
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search Products..."
              className="input-search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" className="search-btn">
              <img
                src={searchIcon}
                alt="search-icon"
                className="search-icon-image"
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
