import React from "react";
import PageIndex from "../../PageIndex";
import Index from "../../Index";
import Search from "../../../comman/Search";
import CategoriesChart from "./CategoriesChart";
import RevenueChart from "./RevenueChart";
import TopUserTab from "./TopUserTab";
import DropOffTab from "./DropOffTab";
import NewUsersJoinedTab from "./NewUsersJoinedTab";
import ExistingUsersTab from "./ExistingUsersTab";
import TopOrderListed from "./TopOrderListed";
import OrderReturnsTab from "./OrderReturnsTab";
import WarehouseStatusChart from "./WarehouseStatusChart";
import OrderOverViewChart from "./OrderOverViewChart";
import QuotationChart from "./QuotationChart";

function Dashboard() {
  return (
    <>
      <div className="right-con-sec">
        <div className="dash-right-sec">
          <div className="admin-header-sec">
            <div className="dash-header-left">
              <h1 className="header-title">Dashboard</h1>
            </div>
            <div className="header-right-sec">
              <Search />
              <img
                src={PageIndex.Png.notification}
                alt="notification"
                className="notification-ic header-ic"
              />
              <img
                src={PageIndex.Png.user}
                alt="user"
                className="user-ic header-ic"
              />
            </div>
          </div>
         <div className="main-scroll-sec">
         <div className="adm-content-sec">
            <Index.Row>
              <Index.Col md={6} lg={4}>
                <div className="admin-card">
                  <h6 className="admin-card-title">Statistics</h6>

                  <div className="statistics-card">
                    <div className="stat-ic-det">
                      <div className="statistics-ic-sec cus-center">
                        <img
                          src={PageIndex.Png.doller}
                          alt=""
                          className="statistics-ic"
                        />
                      </div>
                      <div className="statistics-chandler-sec">
                        <p className="common-text statis-tit">
                          Active Chandlers
                        </p>
                        <p className="common-text statis-val">568</p>
                      </div>
                    </div>
                    <div className="statistics-perc-sec">
                      <p className="common-text cus-center">
                        <img
                          src={PageIndex.Png.upArrow}
                          alt="upArrow"
                          className="up-arrow"
                        />{" "}
                        25%
                      </p>
                    </div>
                  </div>
                  <div className="statistics-card">
                    <div className="stat-ic-det">
                      <div className="statistics-ic-sec cus-center">
                        <img
                          src={PageIndex.Png.time}
                          alt=""
                          className="statistics-ic"
                        />
                      </div>
                      <div className="statistics-chandler-sec">
                        <p className="common-text statis-tit">
                          Inactive Chandlers
                        </p>
                        <p className="common-text statis-val">1856</p>
                      </div>
                    </div>
                    <div className="statistics-perc-sec">
                      <p className="common-text cus-center">
                        <img
                          src={PageIndex.Png.upArrow}
                          alt="upArrow"
                          className="up-arrow"
                        />{" "}
                        25%
                      </p>
                    </div>
                  </div>
                  <div className="statistics-card">
                    <div className="stat-ic-det">
                      <div className="statistics-ic-sec cus-center">
                        <img
                          src={PageIndex.Png.dollerSign}
                          alt=""
                          className="statistics-ic"
                        />
                      </div>
                      <div className="statistics-chandler-sec">
                        <p className="common-text statis-tit">
                          Pending Quotation
                        </p>
                        <p className="common-text statis-val">56</p>
                      </div>
                    </div>
                    <div className="statistics-perc-sec">
                      <p className="common-text cus-center">
                        <img
                          src={PageIndex.Png.upArrow}
                          alt="upArrow"
                          className="up-arrow"
                        />{" "}
                        25%
                      </p>
                    </div>
                  </div>
                  <div className="statistics-card">
                    <div className="stat-ic-det">
                      <div className="statistics-ic-sec cus-center">
                        <img
                          src={PageIndex.Png.product}
                          alt=""
                          className="statistics-ic"
                        />
                      </div>
                      <div className="statistics-chandler-sec">
                        <p className="common-text statis-tit">Approved PO</p>
                        <p className="common-text statis-val">2089</p>
                      </div>
                    </div>
                    <div className="statistics-perc-sec">
                      <p className="common-text cus-center">
                        <img
                          src={PageIndex.Png.upArrow}
                          alt="upArrow"
                          className="up-arrow down-arrow"
                        />{" "}
                        25%
                      </p>
                    </div>
                  </div>
                </div>
              </Index.Col>
              <Index.Col md={6} lg={8}>
                <div className="admin-card prod-over-main">
                  <h6 className="admin-card-title">Products Overview</h6>
                  <Index.Row>
                    <Index.Col md={12} lg={6}>
                      <div className="overview-prod-sec">
                        {/* <div className="prod-head-sec"></div>
                      <div className="prod-body-sec"></div> */}
                        <Index.Table className="overview-prod-table">
                          <thead>
                            <tr>
                              <th>Products</th>
                              <th>Selling</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <p className="common-text tab-prod-title">
                                  Lorem Ipsum
                                </p>
                                <p className="common-text tab-prod-qty">
                                  Qty Sold - 9000
                                </p>
                              </td>
                              <td>
                                <p className="common-text">90%</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="common-text tab-prod-title">
                                  Lorem Ipsum
                                </p>
                                <p className="common-text tab-prod-qty">
                                  Qty Sold - 9000
                                </p>
                              </td>
                              <td>
                                <p className="common-text">90%</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="common-text tab-prod-title">
                                  Lorem Ipsum
                                </p>
                                <p className="common-text tab-prod-qty">
                                  Qty Sold - 9000
                                </p>
                              </td>
                              <td>
                                <p className="common-text">90%</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="common-text tab-prod-title">
                                  Lorem Ipsum
                                </p>
                                <p className="common-text tab-prod-qty">
                                  Qty Sold - 9000
                                </p>
                              </td>
                              <td>
                                <p className="common-text">90%</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="common-text tab-prod-title">
                                  Lorem Ipsum
                                </p>
                                <p className="common-text tab-prod-qty">
                                  Qty Sold - 9000
                                </p>
                              </td>
                              <td>
                                <p className="common-text">90%</p>
                              </td>
                            </tr>
                          </tbody>
                        </Index.Table>
                      </div>
                    </Index.Col>
                    <Index.Col md={12} lg={6}>
                      <Index.Row>
                        <Index.Col md={12} lg={12}>
                          <div className="purchase-ord-box">
                            <p className="admin-card-title">Purchase Order</p>
                            <p className="purch-value">568</p>
                          </div>
                        </Index.Col>
                        <Index.Col md={12} lg={12}>
                          <div className="chart-sec categories-chart-sec purchase-ord-box">
                            <CategoriesChart />
                          </div>
                        </Index.Col>
                      </Index.Row>
                    </Index.Col>
                  </Index.Row>
                </div>
              </Index.Col>
            </Index.Row>
            <Index.Row>
              <Index.Col md={6} lg={12}>
                <div className="admin-card mt-20">
                  <Index.Row>
                    <Index.Col md={6} lg={10}>
                      <div>
                        <RevenueChart />
                      </div>
                    </Index.Col>
                    <Index.Col md={6} lg={2}>
                      <div className="chart-data-sec">
                        <div className="purchase-ord-box">
                          <p className="common-text">Purchase Order</p>
                          <p className="purch-value">1,200,000</p>
                        </div>
                        <div className="purchase-ord-box">
                          <p className="common-text">Purchase Order</p>
                          <p className="purch-value">568</p>
                        </div>
                        <div className="purchase-ord-box">
                          <p className="common-text">Purchase Order</p>
                          <p className="purch-value">568</p>
                        </div>
                      </div>
                    </Index.Col>
                  </Index.Row>
                </div>
              </Index.Col>
            </Index.Row>
          </div>
          <div className="order-over-chart">
            <div className="order-over-left">
              <Index.Row>
                <Index.Col sm={12} md={4} lg={4}>
                  <div className="admin-card">
                    <div className="admin-card-header">
                      <p className="admin-card-title m-0">Orders Overview</p>
                      <Index.Link
                        to={"/"}
                        className="common-text view-all-link"
                      >
                        View all
                      </Index.Link>
                    </div>
                    <div className="ord-over-chart">
                      <OrderOverViewChart />
                    </div>
                  </div>
                </Index.Col>
                <Index.Col sm={12} md={4} lg={4}>
                  <div className="admin-card">
                    <div className="admin-card-header">
                      <p className="admin-card-title m-0">Warehouse Status </p>
                      <Index.Link
                        to={"/"}
                        className="common-text view-all-link"
                      >
                        View all
                      </Index.Link>
                    </div>
                    <div className="warehouse-status-chart">
                      <WarehouseStatusChart />
                    </div>
                  </div>
                </Index.Col>
                <Index.Col sm={12} md={4} lg={4}>
                  <div className="admin-card">
                    <div className="admin-card-header">
                      <p className="admin-card-title m-0">Logistics Overview</p>
                      <Index.Link
                        to={"/"}
                        className="common-text view-all-link"
                      >
                        View all
                      </Index.Link>
                    </div>
                    <div className="logistics-ove-sec">
                      <div className="logis-box">
                        <div className="statistics-card">
                          <div className="stat-ic-det">
                            <div className="statistics-ic-sec cus-center">
                              <img
                                src={PageIndex.Png.doller}
                                alt=""
                                className="statistics-ic"
                              />
                            </div>
                            <div className="statistics-chandler-sec">
                              <p className="common-text statis-tit">
                                Active Deliveries
                              </p>
                              <p className="common-text statis-val">68</p>
                            </div>
                          </div>
                          {/* <div className="statistics-perc-sec">
                      <p className="common-text cus-center">
                        <img
                          src={PageIndex.Png.upArrow}
                          alt="upArrow"
                          className="up-arrow"
                        />{" "}
                        25%
                      </p>
                    </div> */}
                        </div>
                        <div className="statistics-perc-sec">
                          <p className="common-text per-text cus-center">
                            <img
                              src={PageIndex.Png.upArrow}
                              alt="upArrow"
                              className="up-arrow"
                            />{" "}
                            25%
                          </p>
                          <p className="common-text comp-text">
                            compared to 7 days ago{" "}
                          </p>
                        </div>
                      </div>
                      <div className="logis-box">
                        <div className="statistics-card">
                          <div className="stat-ic-det">
                            <div className="statistics-ic-sec cus-center">
                              <img
                                src={PageIndex.Png.doller}
                                alt=""
                                className="statistics-ic"
                              />
                            </div>
                            <div className="statistics-chandler-sec">
                              <p className="common-text statis-tit">Shipment</p>
                              <p className="common-text statis-val">1255</p>
                            </div>
                          </div>
                          {/* <div className="statistics-perc-sec">
                      <p className="common-text cus-center">
                        <img
                          src={PageIndex.Png.upArrow}
                          alt="upArrow"
                          className="up-arrow"
                        />{" "}
                        25%
                      </p>
                    </div> */}
                        </div>
                        <div className="statistics-perc-sec">
                          <p className="common-text per-text cus-center">
                            <img
                              src={PageIndex.Png.upArrow}
                              alt="upArrow"
                              className="up-arrow"
                            />{" "}
                            25%
                          </p>
                          <p className="common-text comp-text">
                            compared to 7 days ago{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Index.Col>
              </Index.Row>
            </div>
            {/* <div className="order-over-right">
            <div className="admin-card">
                  <div className="admin-card-header">
                    <p className="admin-card-title m-0">Logistics Overview</p>
                    <Index.Link to={"/"} className="common-text view-all-link">
                      View all
                    </Index.Link>
                  </div>
                  <div className="logistics-ove-sec">
                  <div className="statistics-card">
                    <div className="stat-ic-det">
                      <div className="statistics-ic-sec cus-center">
                        <img
                          src={PageIndex.Png.doller}
                          alt=""
                          className="statistics-ic"
                        />
                      </div>
                      <div className="statistics-chandler-sec">
                        <p className="common-text statis-tit">
                          Active Chandlers
                        </p>
                        <p className="common-text statis-val">568</p>
                      </div>
                    </div>
                    <div className="statistics-perc-sec">
                      <p className="common-text cus-center">
                        <img
                          src={PageIndex.Png.upArrow}
                          alt="upArrow"
                          className="up-arrow"
                        />{" "}
                        25%
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
            </div> */}
          </div>
          <div className="user-analytics-sec">
            <Index.Row>
              <Index.Col sm={12} md={4} lg={4}>
                <div className="admin-card">
                  <div className="admin-card-header">
                    <p className="admin-card-title m-0">Quotation Analysis</p>
                    <Index.Link to={"/"} className="common-text view-all-link">
                      View all
                    </Index.Link>
                  </div>
                  <div className="quotation-chart">
                      <QuotationChart />
                    </div>
                </div>
              </Index.Col>
              <Index.Col sm={12} md={4} lg={8}>
                <div className="admin-card">
                  <div className="admin-card-header">
                    <p className="admin-card-title m-0">User Analytics</p>
                  </div>
                  <div className="user-tab-sec">
                    <div className="quotations-tab-sec cus-tab-sec">
                      <Index.Tabs
                        defaultActiveKey="topUser"
                        id="uncontrolled-tab-example"
                        className="mb-3 cus-tabs"
                      >
                        <Index.Tab
                          eventKey="topUser"
                          title="Top User"
                          className="cus-tab"
                        >
                          <div className="tab-content-main">
                            <TopUserTab />
                          </div>
                        </Index.Tab>
                        <Index.Tab
                          eventKey="dropOff"
                          title="drop Off"
                          className="cus-tab"
                        >
                          <div className="tab-content-main">
                            <DropOffTab />
                          </div>
                        </Index.Tab>
                        <Index.Tab
                          eventKey="newUsersJoined"
                          title="New Users Joined"
                          className="cus-tab"
                        >
                          <div className="tab-content-main">
                            <NewUsersJoinedTab />
                          </div>
                        </Index.Tab>
                        <Index.Tab
                          eventKey="existingUsers"
                          title="Existing Users"
                          className="cus-tab"
                        >
                          <div className="tab-content-main">
                            <ExistingUsersTab />
                          </div>
                        </Index.Tab>
                      </Index.Tabs>
                    </div>
                  </div>
                </div>
              </Index.Col>
            </Index.Row>
          </div>

          <div className="user-analytics-sec">
            <Index.Row>
              <Index.Col sm={12} md={12} lg={12}>
                <div className="admin-card">
                  {/* <div className="admin-card-header">
                    <p className="admin-card-title m-0">User Analytics</p>
                  </div> */}
                  <div className="user-tab-sec position-relative">
                    <div className="week-drop-sec">
                     <div className="input-wrapper">
                     <Index.Form.Select
                        aria-label="Default select example"
                        className="custom-input"
                      >
                        {/* <option>Select Quantity</option> */}
                        <option value="1">Week</option>
                        <option value="2">Month</option>
                      </Index.Form.Select>
                     </div>
                    </div>
                    <div className="quotations-tab-sec cus-tab-sec">
                      <Index.Tabs
                        defaultActiveKey="topOrderListed"
                        id="uncontrolled-tab-example"
                        className="mb-3 cus-tabs"
                      >
                        <Index.Tab
                          eventKey="topOrderListed"
                          title="Top Order Listed"
                          className="cus-tab"
                        >
                          <div className="tab-content-main">
                            <TopOrderListed />
                          </div>
                        </Index.Tab>
                        <Index.Tab
                          eventKey="orderReturns"
                          title="Order Returns"
                          className="cus-tab"
                        >
                          <div className="tab-content-main">
                            <OrderReturnsTab />
                          </div>
                        </Index.Tab>
                      </Index.Tabs>
                    </div>
                  </div>
                </div>
              </Index.Col>
            </Index.Row>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
