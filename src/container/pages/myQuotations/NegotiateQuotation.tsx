import Index from "../../Index";
import PageIndex from "../../PageIndex";


function NegotiateQuotation() {
    const navigate = Index.useNavigate();
    return (
      <>
        <div className="user-main">
          <div className="cus-container">
            <div className="view-quotation-sec negotiate-quotation-sec">
            <div className="title-sec">
                <h6 className="main-title">Negotiate Quotation</h6>
              </div>
              <div className="quotation-tab-sec">
                <div className="quotation-box">
                  <div className="quotation-left">
                    <div className="quotation-img-sec">
                      <img
                        src={PageIndex.Png.dummy}
                        alt="product"
                        className="product-img"
                      />
                    </div>
                    <div className="quotation-id-sec">
                      <div className="quotation-id-main">
                        <p className="quot-id-text common-text">
                        Code: <span>SWE-1</span>
                        </p>
                      </div>
                      <p className="quot-value">Green Sweater</p>
                    </div>
                  </div>
                  <div className="quotation-right negotiate-right">
                  <div className="input-wrapper">
                      <p className="common-text">Percentage</p>
                      <input
                        type="number"
                        name="email"
                        className="custom-input"
                        placeholder="10%"
                      />
                    </div>
                    <div className="input-wrapper">
                      <p className="common-text">Final Amount </p>
                      <div className="final-ammo common-text">7852</div>
                    </div>
                  </div>
                </div>
                <div className="quotation-box">
                  <div className="quotation-left">
                    <div className="quotation-img-sec">
                      <img
                        src={PageIndex.Png.dummy}
                        alt="product"
                        className="product-img"
                      />
                    </div>
                    <div className="quotation-id-sec">
                      <div className="quotation-id-main">
                        <p className="quot-id-text common-text">
                        Code: <span>SWE-1</span>
                        </p>
                      </div>
                      <p className="quot-value">Green Sweater</p>
                    </div>
                  </div>
                  <div className="quotation-right negotiate-right">
                  <div className="input-wrapper">
                      <p className="common-text">Percentage</p>
                      <input
                        type="number"
                        name="email"
                        className="custom-input"
                        placeholder="10%"
                      />
                    </div>
                    <div className="input-wrapper">
                      <p className="common-text">Final Amount </p>
                      <div className="final-ammo common-text">7852</div>
                    </div>
                  </div>
                </div>
                <div className="quotation-box">
                  <div className="quotation-left">
                    <div className="quotation-img-sec">
                      <img
                        src={PageIndex.Png.dummy}
                        alt="product"
                        className="product-img"
                      />
                    </div>
                    <div className="quotation-id-sec">
                      <div className="quotation-id-main">
                        <p className="quot-id-text common-text">
                        Code: <span>SWE-1</span>
                        </p>
                      </div>
                      <p className="quot-value">Green Sweater</p>
                    </div>
                  </div>
                  <div className="quotation-right negotiate-right">
                  <div className="input-wrapper">
                      <p className="common-text">Percentage</p>
                      <input
                        type="number"
                        name="email"
                        className="custom-input"
                        placeholder="10%"
                      />
                    </div>
                    <div className="input-wrapper">
                      <p className="common-text">Final Amount </p>
                      <div className="final-ammo common-text">7852</div>
                    </div>
                  </div>
                </div>
                <div className="quotation-box">
                  <div className="quotation-left">
                    <div className="quotation-img-sec">
                      <img
                        src={PageIndex.Png.dummy}
                        alt="product"
                        className="product-img"
                      />
                    </div>
                    <div className="quotation-id-sec">
                      <div className="quotation-id-main">
                        <p className="quot-id-text common-text">
                        Code: <span>SWE-1</span>
                        </p>
                      </div>
                      <p className="quot-value">Green Sweater</p>
                    </div>
                  </div>
                  <div className="quotation-right negotiate-right">
                  <div className="input-wrapper">
                      <p className="common-text">Percentage</p>
                      <input
                        type="number"
                        name="email"
                        className="custom-input"
                        placeholder="10%"
                      />
                    </div>
                    <div className="input-wrapper">
                      <p className="common-text">Final Amount </p>
                      <div className="final-ammo common-text">7852</div>
                    </div>
                  </div>
                </div>
                <div className="quotation-box">
                  <div className="quotation-left">
                    <div className="quotation-img-sec">
                      <img
                        src={PageIndex.Png.dummy}
                        alt="product"
                        className="product-img"
                      />
                    </div>
                    <div className="quotation-id-sec">
                      <div className="quotation-id-main">
                        <p className="quot-id-text common-text">
                        Code: <span>SWE-1</span>
                        </p>
                      </div>
                      <p className="quot-value">Green Sweater</p>
                    </div>
                  </div>
                  <div className="quotation-right negotiate-right">
                  <div className="input-wrapper">
                      <p className="common-text">Percentage</p>
                      <input
                        type="number"
                        name="email"
                        className="custom-input"
                        placeholder="10%"
                      />
                    </div>
                    <div className="input-wrapper">
                      <p className="common-text">Final Amount </p>
                      <div className="final-ammo common-text">7852</div>
                    </div>
                  </div>
                </div>
                <div className="btn-sec form-btn-sec">
                      <Index.Button className="main-btn"
                       onClick={() => {
                          navigate("/user/forwarded-quotation");
                        }}>Send Negotiated Amount</Index.Button> 
                      </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default NegotiateQuotation