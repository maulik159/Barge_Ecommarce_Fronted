import Index from "../../Index";

function WelcomeName() {
  return (
    <>
      <div className="user-main name-sec">
        <div className="cus-container">
          <div className="welcome-sec">
            <div className="welcome-title-sec text-center">
              <h1 className="welcome-title">Welcome</h1>
              <p className="common-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temp
              </p>
            </div>
            <div className="welcome-form">
            <Index.Form>
              <div className="input-wrapper">
                <p className="input-label">Enter Full Name</p>
                <input
                  type="text"
                  name="email"
                  className="custom-input"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="btn-sec">
              <Index.Button className="main-btn">Continue</Index.Button>
              </div>
            </Index.Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeName;
