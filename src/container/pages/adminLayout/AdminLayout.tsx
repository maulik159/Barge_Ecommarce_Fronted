import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AdminLayout() {
  return (
    <>
      <div className="admin-main">
        <div className="admin-wrapper">
          <div className="admin-sidebar-main">
            <Sidebar />
          </div>
          <div className="admin-content-main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
