import Index from "../Index";
import PageIndex from "../PageIndex";

function Otp() {
  return (
    <>
    <div className="login-wrapper">
        <div className="login-left cus-center">
            {/* <img src={PageIndex.Png.leftArrow} alt="leftArrow" className="back-arrow" /> */}
          <div className="login-left-main">
            <h1 className="auth-title">Enter OTP</h1>
            <Index.Form>
              <div className="input-wrapper mb-0">
                <p className="input-label">Enter OTP</p>
                <div className="otp-input-main">
                <input
                  type="number"
                  name="email"
                  className="custom-input otp-input"
                />
                <input
                  type="number"
                  name="email"
                  className="custom-input otp-input"
                />
                <input
                  type="number"
                  name="email"
                  className="custom-input otp-input"
                />
                <input
                  type="number"
                  name="email"
                  className="custom-input otp-input"
                />
                </div>
                {/* <div className="input-wrapper"> */}
                <p className="input-label resend-otp">Resend OTP? <span>00:36</span></p>
                {/* </div> */}
              </div>

              <Index.Button className="main-auth-btn">Proceed to Login</Index.Button>
            </Index.Form>
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
  )
}

export default Otp