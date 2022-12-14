import "./App.css";
import Hero from "./pages/Hero";
import Cities from "./pages/Cities";
import NewCity from "./pages/NewCity";
import WebsiteLayout from "./layouts/WebsiteLayout";
import UnderConstruction from "./pages/UnderConstruction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import EditCity from "./pages/EditCity";
import City from "./pages/City";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MyTinerares from "./pages/MyTinerares";
import NewItinerary from "./pages/NewItinerary";

function App() {
  let user = "";

  if (localStorage.length > 0) {
    user = JSON.parse(localStorage.getItem("user")).role;
    console.log(user);
  } else {
    console.log(user);
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <WebsiteLayout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/mytineraries" element={user == "" ? <UnderConstruction /> : <MyTinerares />}/>
          <Route path="/newitinerary" element={user == "" ? <UnderConstruction /> : <NewItinerary />}/>
          <Route path="/newcity" element={user == "admin" ? <NewCity /> : <UnderConstruction />} />
          <Route path="/editcity" element={user == "admin" ? <EditCity /> : <UnderConstruction/>} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/*" element={<UnderConstruction />} />
          <Route path="/cities/:id" element={<City />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
