import Index from "../../Index";
import PageIndex from "../../PageIndex";

function WelcomeGstin() {
  const navigate = Index.useNavigate();
  return (
    <>
      <div className="user-main name-sec">
        <div className="cus-container position-relative">
            <div className="back-btn-sec" >
            <img src={PageIndex.Png.leftArrow} alt="leftArrow" className="back-arrow" 
             onClick={() => {
              navigate("/user/welcome-name");
            }}/>
            </div>
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
                <p className="input-label">Enter GSTIN</p>
                <input
                  type="text"
                  name="email"
                  className="custom-input"
                  placeholder="Enter GSTIN"
                />
              </div>
              <div className="btn-sec">
              <Index.Button className="main-btn"
              onClick={() => {
                navigate("/user/welcome-form");
              }}
              >Continue</Index.Button>
              </div>
            </Index.Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomeGstin