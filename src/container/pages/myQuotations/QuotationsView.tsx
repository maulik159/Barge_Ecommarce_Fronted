import PageIndex from "../../PageIndex";
import Index from "../../Index";

function QuotationsView() {
  const navigate = Index.useNavigate();
  return (
    <>
      <div className="user-main">
        <div className="cus-container">
          <div className="view-quotation-sec">
          <div className="title-sec">
              <h6 className="main-title">Quotation ID: <span>e524eas6d4as</span> </h6>
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
                <div className="quotation-right">
                <p className="quot-value">6,000$</p>
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
                <div className="quotation-right">
                <p className="quot-value">10,000$</p>
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
                <div className="quotation-right">
                <p className="quot-value">4,000$</p>
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
                <div className="quotation-right">
                <p className="quot-value">6,000$</p>
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
                <div className="quotation-right">
                <p className="quot-value">16,000$</p>
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
                <div className="quotation-right">
                <p className="quot-value">9,000$</p>
                </div>
              </div>
              <div className="btn-sec form-btn-sec">
                    <Index.Button className="main-btn border-btn"
                     onClick={() => {
                        navigate("/user/negotiate-quotation");
                      }}>Negotiate</Index.Button> 
                    <Index.Button className="main-btn">Generate PO</Index.Button> 
                    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuotationsView;
