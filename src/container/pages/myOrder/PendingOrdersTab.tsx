import Index from "../../Index";
import PageIndex from "../../PageIndex";

function PendingOrdersTab() {
    const navigate = Index.useNavigate();
  return (
    <>
      <div className="view-quotation-sec pending-order-tab">
        <div className="track-order-btn-sec">
          <div className="track-btn-left">
            <div className="final-ammo">
              <p className="common-text">
                Order ID <span>#da68s7cz3x5c1</span>
              </p>
            </div>
            <p className="common-text">Wed, 1 Jan 2025</p>
          </div>
          <div className="track-btn-right">
            <div className="btn-sec">
              <Index.Button className="main-btn m-0"
               onClick={() => {
                navigate("/user/order-tracking");
              }}
              >Track Order</Index.Button>
            </div>
          </div>
        </div>
        <div className="order-main-sec">
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
          <div className="quantity-sec">
            <div className="input-wrapper">
              <p className="common-text">Quantity</p>
              <Index.Form.Select
                aria-label="Default select example"
                className="custom-input"
              >
                {/* <option>Select Quantity</option> */}
                <option value="1">200</option>
                <option value="2">100</option>
              </Index.Form.Select>
            </div>
          </div>
          <div className="quotation-right">
            <div className="btn-sec">
              <Index.Button className="main-btn border-btn m-0">
                Remove
              </Index.Button>
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
          <div className="quantity-sec">
            <div className="input-wrapper">
              <p className="common-text">Quantity</p>
              <Index.Form.Select
                aria-label="Default select example"
                className="custom-input"
              >
                {/* <option>Select Quantity</option> */}
                <option value="1">200</option>
                <option value="2">100</option>
              </Index.Form.Select>
            </div>
          </div>
          <div className="quotation-right">
            <div className="btn-sec">
              <Index.Button className="main-btn border-btn m-0">
                Remove
              </Index.Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default PendingOrdersTab;
