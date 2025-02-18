import Index from "../Index";
import PageIndex from "../PageIndex";

function Login() {
  return (
    <>
      <div className="login-wrapper">
        <div className="login-left cus-center">
          <div className="login-left-main">
            <h1 className="auth-title">Get started now</h1>
            <Index.Button className="google-btn cus-center">
              <img
                src={PageIndex.Png.google}
                alt="google"
                className="google-ic"
              />{" "}
              Sign up with Google
            </Index.Button>
            <p className="or-text">
              <span>OR</span>
            </p>

            <div className="input-wrapper">
              <p className="input-label">Email / Phone No.</p>
              <input
                type="text"
                name="email"
                className="custom-input"
                placeholder="Enter your Email / Phone No."
              />
            </div>
            <Index.Button className="main-auth-btn">Sign in</Index.Button>
            <div className="auth-link-sec">
            <Index.Link to={'/signup'} className="auth-link">Don't have an account? Sign up</Index.Link>
            </div>
            
          </div>
        </div>
        <div className="login-right cus-center">
          {/* <img src={PageIndex.Png.authBg} alt="img" className="auth-img" /> */}
          <div className="auth-content-sec">
            <p className="common-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
