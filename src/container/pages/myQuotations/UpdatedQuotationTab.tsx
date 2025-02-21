import PageIndex from "../../PageIndex";
import Index from "../../Index";
import React from "react";

function MyVerticallyCenteredModal(props: any) {
  return (
    <Index.Modal
      {...props}
      // size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="cus-modal purchase-order-modal"
    >
      <Index.Modal.Header className="cus-modal-header" closeButton>
        <Index.Modal.Title
          id="contained-modal-title-vcenter"
          className="cus-modal-title"
        >
          Generate Purchase Order
        </Index.Modal.Title>
      </Index.Modal.Header>
      <Index.Modal.Body className="cus-modal-body view-quotation-sec">
        <div className="modal-scrl-wrapper">
        <div className="modal-scroll-main">
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
        <div className="order-form-sec">
        <Index.Form>
                <Index.Row>
                  <Index.Col xs={12} md={6}>
                    <div className="input-wrapper">
                      <p className="input-label">Order No.</p>
                      <input
                        type="number"
                        name="email"
                        className="custom-input"
                        placeholder="Order No."
                      />
                    </div>
                  </Index.Col>
                  <Index.Col xs={12} md={6}>
                    <div className="input-wrapper">
                      <p className="input-label">Issue Date</p>
                      <input
                        type="date"
                        name="email"
                        className="custom-input"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </Index.Col>
                  <Index.Col xs={12} md={6}>
                    <div className="input-wrapper">
                      <p className="input-label">Address</p>
                      <input
                        type="text"
                        name="email"
                        className="custom-input"
                        placeholder="Enter address"
                      />
                    </div>
                  </Index.Col>
                  <Index.Col xs={12} md={6}>
                    <div className="input-wrapper">
                      <p className="input-label">Country/Region</p>
                      <Index.Form.Select
                        aria-label="Default select example"
                        className="custom-input"
                      >
                        <option>Select Country</option>
                        <option value="1">India</option>
                        <option value="2">USA</option>
                      </Index.Form.Select>
                    </div>
                  </Index.Col>
                  <Index.Col xs={12} md={6}>
                    <div className="input-wrapper">
                      <p className="input-label">State</p>
                      <Index.Form.Select
                        aria-label="Default select example"
                        className="custom-input"
                      >
                        <option>Select State</option>
                        <option value="1">Gujarat</option>
                        <option value="2">Maharashtra</option>
                      </Index.Form.Select>
                    </div>
                  </Index.Col>
                  <Index.Col xs={12} md={6}>
                    <div className="input-wrapper">
                      <p className="input-label">Zip Code / Postal Code</p>
                      <input
                        type="number"
                        name="email"
                        className="custom-input"
                        placeholder="Enter Zip Code / Postal Code"
                      />
                    </div>
                  </Index.Col>
                  <Index.Col xs={12} md={6}>
                    <div className="input-wrapper">
                      <p className="input-label">Phone Number</p>
                      <input
                        type="number"
                        name="email"
                        className="custom-input"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </Index.Col>
                  
                </Index.Row>
              </Index.Form>
        </div>
        </div>
          </div>
        <Index.Modal.Footer className="cus-modal-footer">
          <div className="btn-sec">
            <Index.Button className="main-btn border-btn m-0">
              Close
            </Index.Button>
            <Index.Button className="main-btn m-0">Generate Order</Index.Button>
          </div>
        </Index.Modal.Footer>
      </Index.Modal.Body>
    </Index.Modal>
  );
}

function UpdatedQuotationTab() {
  const navigate = Index.useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="user-main">
        <div className="cus-container">
          <div className="view-quotation-sec">
            <div className="quotation-tab-sec">
              <div className="quotation-box" onClick={() => setModalShow(true)}>
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
                <Index.Button className="main-btn">Send VIA Email</Index.Button>
              </div>
            </div>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdatedQuotationTab;
