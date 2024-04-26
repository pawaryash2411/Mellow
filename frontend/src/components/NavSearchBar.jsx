import React from "react";

const NavSearchBar = () => {
  return (
    <>
      <form className="form-inline px-lg-5" noValidate="" method="get">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "rgb(230,230,230)", color: "black" }}
              >
                All
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <div className="dropdown-item" href="#">
                    Dry Fruits
                  </div>
                </li>
                <li>
                  <div className="dropdown-item" href="#">
                    Jewelries
                  </div>
                </li>
                <li>
                  <div className="dropdown-item" href="#">
                    Carpets
                  </div>
                </li>
                <li>
                  <div className="dropdown-item" href="#">
                    Garments
                  </div>
                </li>
                <li>
                  <div className="dropdown-item" href="#">
                    Handicrafts
                  </div>
                </li>
                <li>
                  <div className="dropdown-item" href="#">
                    Gifting
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            size={50}
            name="query"
            id="query"
            placeholder="Search Tajalli's Products"
          />

          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-warning"
              style={{ backgroundColor: "orange" }}
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NavSearchBar;
