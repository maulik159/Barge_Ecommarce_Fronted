import Index from "../Index";
import PageIndex from "../PageIndex";

function SignUp() {

  return (
    <>
      <div className="login-wrapper">
        <div className="login-left cus-center">
            <img src={PageIndex.Png.leftArrow} alt="leftArrow" className="back-arrow" />
          <div className="login-left-main">
            <h1 className="auth-title">Sign up</h1>
            <Index.Form>
              <div className="input-wrapper">
                <p className="input-label">Email / Phone No.</p>
                <input
                  type="text"
                  name="email"
                  className="custom-input"
                  placeholder="Enter your Email / Phone No."
                />
              </div>

              <div className="checkbox-wrapper">
              <Index.Form.Check
                type="checkbox"
                className="cus-checkbox"
                label="By signing up, I agree with the Terms of Use & Privacy Policy"
              />
              </div>

              <Index.Button className="main-auth-btn">Sign up</Index.Button>
            </Index.Form>
            <div className="auth-link-sec">
              <Index.Link to={"/"} className="auth-link">
                Already have an account? Log in
              </Index.Link>
            </div>
          </div>
        </div>
        <div className="login-right cus-center">
          {/* <img src={PageIndex.Png.authBg} alt="img" className="auth-img" /> */}
          <div className="auth-content-sec">
            <p className="common-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
