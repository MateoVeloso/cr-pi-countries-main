import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";
import Form from "../views/Form/Form";
import Activities from "../views/Activities/Activities";
import { Nav } from "../components/Nav/Navbar";

export const AppRouter = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/";
  return (
    <div className="App">
      {!isLanding && <Nav />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};
