import { BrowserRouter, Route, Routes as Routess } from "react-router-dom";
import Login from "../container/auth/Login";
import UserLayout from "../container/pages/userLayout/UserLayout";
import Dashboard from "../container/pages/dashboard/Dashboard";
import SignUp from "../container/auth/SignUp";
import Otp from "../container/auth/Otp";
import Home from "../container/pages/home/Home";
import WelcomeName from "../container/pages/welcome/WelcomeName";
import WelcomeGstin from "../container/pages/welcome/WelcomeGstin";
import WelcomeForm from "../container/pages/welcome/WelcomeForm";
import ImpaCode from "../container/pages/impaCode/ImpaCode";
import MyQuotations from "../container/pages/myQuotations/MyQuotations";
import QuotationsView from "../container/pages/myQuotations/QuotationsView";
import NegotiateQuotation from "../container/pages/myQuotations/NegotiateQuotation";
import ForwardedQuotations from "../container/pages/myQuotations/ForwardedQuotations";
import Quotation from "../container/pages/myQuotations/Quotation";
import MyOrder from "../container/pages/myOrder/MyOrder";
import OrderTracking from "../container/pages/myOrder/OrderTracking";
import AdminLayout from "../container/pages/adminLayout/AdminLayout";


function Routes() {
  return (
    <>
      <BrowserRouter>
        <Routess>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/otp" element={<Otp />} />
            <Route path="/user" element={<UserLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="welcome-name" element={<WelcomeName />} />
              <Route path="welcome-gstin" element={<WelcomeGstin />} />
              <Route path="welcome-form" element={<WelcomeForm />} />
              <Route path="impa-code" element={<ImpaCode />} />
              <Route path="my-quotations" element={<MyQuotations />} />
              <Route path="quotations-view" element={<QuotationsView />} />
              <Route path="negotiate-quotation" element={<NegotiateQuotation />} />
              <Route path="forwarded-quotation" element={<ForwardedQuotations />} />
              <Route path="quotation" element={<Quotation />} />
              <Route path="my-order" element={<MyOrder />} />
              <Route path="order-tracking" element={<OrderTracking />} />
              
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routess>
      </BrowserRouter>
    </>
  );
}

export default Routes;
