import React from "react";
import Index from "../../Index";
import PageIndex from "../../PageIndex";

function OrderTracking() {
  return (
    <>
      <div className="user-main">
        <div className="cus-container">
          <div className="order-tracking-sec">
            <div className="title-sec">
              <h6 className="main-title">Ordder Tracking</h6>
            </div>
            <Index.Row>
              <Index.Col xs={12} md={6}>
                <div className="tracking-prod-sec">
                  <div className="order-invoice-sec">
                    <p className="common-text">Order number #586789963</p>
                    <p className="common-text">View invoice</p>
                  </div>
                  <div className="track-product-sec">
                    <h6 className="track-sub-tit">Product</h6>
                  </div>
                  <div className="product-inner-sec">
                    <div className="quotation-box">
                      <div className="quotation-left">
                        <div className="product-img-sec">
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
                          <p className="quot-value">Product Name</p>
                          <p className="common-text">Quantity: 200</p>
                        </div>
                      </div>
                      <div className="quotation-right">
                        <p className="quot-value">56,000$</p>
                      </div>
                    </div>
                    <div className="quotation-box">
                      <div className="quotation-left">
                        <div className="product-img-sec">
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
                          <p className="quot-value">Product Name</p>
                          <p className="common-text">Quantity: 200</p>
                        </div>
                      </div>
                      <div className="quotation-right">
                        <p className="quot-value">56,000$</p>
                      </div>
                    </div>
                    <div className="quotation-box">
                      <div className="quotation-left">
                        <div className="product-img-sec">
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
                          <p className="quot-value">Product Name</p>
                          <p className="common-text">Quantity: 200</p>
                        </div>
                      </div>
                      <div className="quotation-right">
                        <p className="quot-value">56,000$</p>
                      </div>
                    </div>
                  </div>
                  <div className="deliver-sec">
                  <div className="track-product-sec">
                    <h6 className="track-sub-tit">Deliver To</h6>
                  </div>
                  <div className="deliver-prof-det">
                        <div className="deliver-img-sec">
                            <img src={PageIndex.Png.avtar} alt="avtar" className="deliv-img" />
                        </div>
                        <div className="deliv-add-sec">
                            <p className="common-text">Austin Foley</p>
                            <p className="deliver-contect"><img src={PageIndex.Png.telephone} alt="telephone" className="deliver-con-ic"/>(458) 632-8404</p>
                            <p className="deliver-contect"><img src={PageIndex.Png.location} alt="telephone" className="deliver-con-ic"/>27 Mongolia, Phoenix, AZ</p>
                        </div>
                  </div>
                  </div>
                  <div className="payment-sec">
                  <div className="track-product-sec">
                    <h6 className="track-sub-tit">Payment Method</h6>
                  </div>
                  <div className="visa-sec">
                  <img src={PageIndex.Png.visa} alt="visa" className="deliver-con-ic"/>
                  <p className="common-text">Visa****64</p>
                  </div>
                  </div>
                </div>
              </Index.Col>
              <Index.Col xs={12} md={6}>
                <div className="track-ord-sec">
                <div className="title-sec">
              <h6 className="main-title">Track your Order</h6>
            </div>
                    <div className="timeline-sec">
                        <ul className="timeline-ul">
                            <li className="timeline-li d-flex active">
                                <div className="timeline-img-sec">
                                    <img src={PageIndex.Png.product} alt="product" className="timeline-ic" />
                                </div>
                                <div className="timeline-date-sec">
                                    <p className="common-text">04 March</p>
                                    </div>
                                <div className="timeline-detail">
                                    <p className="common-text status-text">Packed</p>
                                    <p className="common-text">Consectetur amet in excepteur mollit velit tempor pariatur fugiat culpa sit tempor </p>
                                
                                </div>
                            </li>
                            <li className="timeline-li d-flex active">
                                <div className="timeline-img-sec">
                                    <img src={PageIndex.Png.location} alt="product" className="timeline-ic" />
                                </div>
                                <div className="timeline-date-sec">
                                    <p className="common-text">04 March</p>
                                    </div>
                                <div className="timeline-detail">
                                    <p className="common-text status-text">Packed</p>
                                    <p className="common-text">Consectetur amet in excepteur mollit velit tempor pariatur fugiat culpa sit tempor </p>
                                
                                </div>
                            </li>
                            <li className="timeline-li d-flex">
                                <div className="timeline-img-sec">
                                    <img src={PageIndex.Png.delivery} alt="product" className="timeline-ic" />
                                </div>
                                <div className="timeline-date-sec">
                                    <p className="common-text">04 March</p>
                                    </div>
                                <div className="timeline-detail">
                                    <p className="common-text status-text">Packed</p>
                                    <p className="common-text">Consectetur amet in excepteur mollit velit tempor pariatur fugiat culpa sit tempor </p>
                                
                                </div>
                            </li>
                            <li className="timeline-li d-flex">
                                <div className="timeline-img-sec">
                                    <img src={PageIndex.Png.time} alt="product" className="timeline-ic" />
                                </div>
                                <div className="timeline-date-sec">
                                    <p className="common-text">04 March</p>
                                    </div>
                                <div className="timeline-detail">
                                    <p className="common-text status-text">Packed</p>
                                    <p className="common-text">Consectetur amet in excepteur mollit velit tempor pariatur fugiat culpa sit tempor </p>
                                
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
              </Index.Col>
            </Index.Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderTracking;
