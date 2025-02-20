import PageIndex from "../../PageIndex";
import Index from "../../Index";

function WelcomeForm() {
  const navigate = Index.useNavigate();
  return (
    <>
      <div className="user-main">
        <div className="cus-container position-relative">
          <div className="back-btn-sec">
            <img
              src={PageIndex.Png.leftArrow}
              alt="leftArrow"
              className="back-arrow"
              onClick={() => {
                navigate("/user/welcome-gstin");
              }}
            />
          </div>
          <div className="welcome-sec">
            <div className="welcome-title-sec text-center">
              <h1 className="welcome-title">Welcome</h1>
              <p className="common-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temp
              </p>
            </div>
            <div className="welcome-form-sec">
              <Index.Form>
                <Index.Row>
                  <Index.Col xs={12} md={6}>
                    <div className="input-wrapper">
                      <p className="input-label">GSTIN</p>
                      <input
                        type="number"
                        name="email"
                        className="custom-input"
                        placeholder="5d98as4d8984c4as4dfa944"
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
                        placeholder="Enter phone number"
                      />
                    </div>
                  </Index.Col>
                  <Index.Col xs={12} md={6}>
                    <div className="input-wrapper">
                      <p className="input-label">Company Address</p>
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
                  <Index.Col xs={12} md={12}>
                    <div className="btn-sec form-btn-sec">
                    <Index.Button className="main-btn border-btn">Edit</Index.Button> 
                    <Index.Button className="main-btn"
                     onClick={() => {
                      navigate("/user/impa-code");
                    }}
                    >Continue</Index.Button> 
                    </div>
                  </Index.Col>
                </Index.Row>
                {/* <div className="input-wrapper">
              <p className="input-label">Enter GSTIN</p>
              <input
                type="text"
                name="email"
                className="custom-input"
                placeholder="Enter GSTIN"
              />
            </div>
            <div className="btn-sec">
            <Index.Button className="main-btn">Continue</Index.Button> 
            </div>*/}
              </Index.Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeForm;
