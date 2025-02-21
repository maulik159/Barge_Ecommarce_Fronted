import Index from "../../Index";
import UpdatedQuotationTab from "./UpdatedQuotationTab";
import AdminQuotationTab from "./AdminQuotationTab";

function Quotation() {
  return (
    <>
    <div className="user-main">
      <div className="cus-container">
        <div className="quotations-wrapper">
          <div className="title-sec">
            <h6 className="main-title">Quotations</h6>
          </div>
          <div className="quotations-tab-sec cus-tab-sec">
            <Index.Tabs
              defaultActiveKey="updatedQuotation"
              id="uncontrolled-tab-example"
              className="mb-3 cus-tabs"
            >
              <Index.Tab
                eventKey="updatedQuotation"
                title="My Updated Quotations"
                className="cus-tab"
              >
                <div className="tab-content-main">
                  <UpdatedQuotationTab />
                </div>
              </Index.Tab>
              <Index.Tab
                eventKey="adminQuotation"
                title="Admin Quotation"
                className="cus-tab"
              >
                <div className="tab-content-main">
                 <AdminQuotationTab />
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

export default Quotation