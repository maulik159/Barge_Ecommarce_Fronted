import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function UserLayout() {
  return (
    <>
    <div className="main-user-wrapper">
        <div className="header-sec-main">
            <Header />
        </div>
        <div className="content-sec-main">
        <Outlet />
        </div>
        <div className="footer-sec-main">
            <Footer />
        </div>
    </div>
    </>
  )
}

export default UserLayout