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
              <img
                src={PageIndex.Svg.logo}
                alt="logo"
                className="header-logo"
              />
            </div>
            <div className="header-profile-sec">
              <div className="subscribe-main">
                <div className="input-wrapper ">
                  <div className="position-relative">
                    <img
                      src={PageIndex.Png.search}
                      alt="email"
                      className="email-ic"
                    />
                    <input
                      type="text"
                      name="email"
                      className="custom-input"
                      placeholder="Search product.."
                    />
                  </div>
                </div>
              </div>
              <div className="List-head-btn">
                <Index.Link className="list-btn" to={'/user/impa-code'}>
                <img src={PageIndex.Png.list} alt="list" className="list-ic" />
                 List <span>(01)</span></Index.Link>
              </div>
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
