import Index from "../../Index";
import AdminQuotationTab from "../myQuotations/AdminQuotationTab";
import UpdatedQuotationTab from "../myQuotations/UpdatedQuotationTab";
import CompletedOrdersTab from "./CompletedOrdersTab";
import PendingOrdersTab from "./PendingOrdersTab";

function MyOrder() {
  return (
    <>
    <div className="user-main">
      <div className="cus-container">
        <div className="quotations-wrapper">
          <div className="title-sec">
            <h6 className="main-title">My Order</h6>
          </div>
          <div className="quotations-tab-sec cus-tab-sec order-tab">
            <Index.Tabs
              defaultActiveKey="pendingOrders"
              id="uncontrolled-tab-example"
              className="mb-3 cus-tabs"
            >
              <Index.Tab
                eventKey="pendingOrders"
                title="Pending Orders"
                className="cus-tab"
              >
                <div className="tab-content-main">
                  <PendingOrdersTab />
                </div>
              </Index.Tab>
              <Index.Tab
                eventKey="completedOrders"
                title="Completed Orders"
                className="cus-tab"
              >
                <div className="tab-content-main">
                 <CompletedOrdersTab />
                </div>
              </Index.Tab>
             
            </Index.Tabs>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default MyOrder