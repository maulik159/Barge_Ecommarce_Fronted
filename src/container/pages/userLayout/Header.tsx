import React from "react";
import Index from "../../Index";
import PageIndex from "../../PageIndex";

function Header() {
  return (
    <>
      <div className="header-main">
        <div className="cus-container">
          <div className="header-wrapper">
          <div className="header-link-sec">
            <ul className="header-list">
              <li className="header-item">
                <Index.Link to={"/"} className="header-link">
                  Home
                </Index.Link>
              </li>
              <li className="header-item">
                <Index.Link to={"/"} className="header-link">
                  Home
                </Index.Link>
              </li>
              <li className="header-item">
                <Index.Link to={"/"} className="header-link">
                  Home
                </Index.Link>
              </li>
              <li className="header-item">
                <Index.Link to={"/"} className="header-link">
                  Home
                </Index.Link>
              </li>
            </ul>
          </div>
          <div className="header-logo-sec">
            <img src={PageIndex.Svg.logo} alt="logo" className="header-logo" />
          </div>
          <div className="header-profile-sec">
            <div className="profile-img-sec">
              <img
                src={PageIndex.Png.avtar}
                alt="avtar"
                className="profile-img"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
