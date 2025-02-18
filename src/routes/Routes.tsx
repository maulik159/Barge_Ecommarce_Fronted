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


function Routes() {
  return (
    <>
      <BrowserRouter>
        <Routess>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<Otp />} />
            <Route path="/user" element={<UserLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="welcome-name" element={<WelcomeName />} />
              <Route path="welcome-gstin" element={<WelcomeGstin />} />
              <Route path="welcome-form" element={<WelcomeForm />} />
              <Route path="impa-code" element={<ImpaCode />} />
              
            </Route>
        </Routess>
      </BrowserRouter>
    </>
  );
}

export default Routes;
