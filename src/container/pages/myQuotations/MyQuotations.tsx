import Index from "../../Index";
import ReceivedQuotationTab from "./ReceivedQuotationTab";
import RequestedQuotationTab from "./RequestedQuotationTab";
import InNegotiationsTab from "./InNegotiationsTab";
import ClosedQuotationsTab from "./ClosedQuotationsTab";

function MyQuotations() {
  return (
    <>
      <div className="user-main">
        <div className="cus-container">
          <div className="quotations-wrapper">
            <div className="title-sec">
              <h6 className="main-title">My Quotations</h6>
            </div>
            <div className="quotations-tab-sec cus-tab-sec">
              <Index.Tabs
                defaultActiveKey="receivedQuotation"
                id="uncontrolled-tab-example"
                className="mb-3 cus-tabs"
              >
                <Index.Tab
                  eventKey="receivedQuotation"
                  title="Received Quotation"
                  className="cus-tab"
                >
                  <div className="tab-content-main">
                    <ReceivedQuotationTab />
                  </div>
                </Index.Tab>
                <Index.Tab
                  eventKey="requestedQuotation"
                  title="Requested Quotation"
                  className="cus-tab"
                >
                  <div className="tab-content-main">
                   <RequestedQuotationTab />
                  </div>
                </Index.Tab>
                <Index.Tab eventKey="inNegotiations" 
                title="In Negotiations"
                className="cus-tab">
                  <div className="tab-content-main">
                    <InNegotiationsTab />
                  </div>
                </Index.Tab>
                <Index.Tab
                  eventKey="closedQuotations"
                  title="Closed Quotations"
                  className="cus-tab"
                >
                  <div className="tab-content-main">
                    <ClosedQuotationsTab />
                  </div>
                </Index.Tab>
              </Index.Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyQuotations;
