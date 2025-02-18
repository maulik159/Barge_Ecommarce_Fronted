import React from "react";
import Index from "../../Index";
import PageIndex from "../../PageIndex";

function Footer() {
  return (
    <>
      <div className="footer-main">
        <div className="cus-container">
          <div className="footer-wrapper">
            <div className="footer-top">
              <div className="footer-link-row">
                <div className="footer-link-sec">
                  <h6 className="footer-title">Support</h6>
                  <ul className="footer-list">
                    <li className="footer-list-item">
                      <Index.Link to={"/"} className="footer-link">
                        Irure in molli
                      </Index.Link>
                    </li>
                    <li className="footer-list-item">
                      <Index.Link to={"/"} className="footer-link">
                        Officia sit laborum
                      </Index.Link>
                    </li>
                    <li className="footer-list-item">
                      <Index.Link to={"/"} className="footer-link">
                        Lorem ea quis labore
                      </Index.Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-link-sec">
                  <h6 className="footer-title">Community</h6>
                  <ul className="footer-list">
                    <li className="footer-list-item">
                      <Index.Link to={"/"} className="footer-link">
                        Nisi velit ut
                      </Index.Link>
                    </li>
                    <li className="footer-list-item">
                      <Index.Link to={"/"} className="footer-link">
                        Pariatur elit esse
                      </Index.Link>
                    </li>
                    <li className="footer-list-item">
                      <Index.Link to={"/"} className="footer-link">
                        Laborum aliquip do
                      </Index.Link>
                    </li>
                  </ul>
                </div>

                <div className="footer-link-sec">
                  <h6 className="footer-title">About</h6>
                  <ul className="footer-list">
                    <li className="footer-list-item">
                      <Index.Link to={"/"} className="footer-link">
                        Aute com
                      </Index.Link>
                    </li>
                    <li className="footer-list-item">
                      <Index.Link to={"/"} className="footer-link">
                        Volupta
                      </Index.Link>
                    </li>
                    <li className="footer-list-item">
                      <Index.Link to={"/"} className="footer-link">
                        Nulla min
                      </Index.Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-link-sec subscribe-sec">
                  <h6 className="footer-title">Subscribe to our newsletter</h6>
                  <p className="common-text">
                    For announcements and exclusive deals
                  </p>
                  <div className="subscribe-main">
                    <div className="input-wrapper ">
                      <div className="position-relative">
                        <img
                          src={PageIndex.Png.email}
                          alt="email"
                          className="email-ic"
                        />
                        <input
                          type="text"
                          name="email"
                          className="custom-input"
                          placeholder="Input your email"
                        />
                      </div>
                    </div>
                    <div className="btn-sec">
                      <Index.Button className="main-btn mt-0">
                        Subscribe
                      </Index.Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-privacy-sec">
                <p className="common-text">© 2025 Company, Inc.</p>
                <Index.Link to={"/"} className="footer-link">
                  Privacy Terms
                </Index.Link>
                <Index.Link to={"/"} className="footer-link">
                  Terms
                </Index.Link>
              </div>
              <div className="footer-social-sec">
                <ul className="footer-social-ul">
                  <li className="footer-social-li">
                    <Index.Link to={'/'} className="footer-social-link"><img src={PageIndex.Png.internet} alt="internet" className="soc-ic net-ic" /></Index.Link>
                  </li>
                  <li className="footer-social-li">
                    <Index.Link to={'/'} className="footer-social-link"><img src={PageIndex.Png.facebook} alt="facebook" className="soc-ic" /></Index.Link>
                  </li>
                  <li className="footer-social-li">
                    <Index.Link to={'/'} className="footer-social-link"><img src={PageIndex.Png.twitter} alt="twitter" className="soc-ic" /></Index.Link>
                  </li>
                  <li className="footer-social-li">
                    <Index.Link to={'/'} className="footer-social-link"><img src={PageIndex.Png.instagram} alt="instagram" className="soc-ic" /></Index.Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
