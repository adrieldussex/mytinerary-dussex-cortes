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
  let userRole = "";
  let admin = "";
  let newCity = "";
  let editCity = "";
  let myTineraries = "";
  let newTineraries = "";

  if (localStorage.length > 0) {
    let user = JSON.parse(localStorage.getItem("user"));
    userRole = user.role;
  }

  if (userRole == "admin") {
    newCity = <NewCity />;
    editCity = <EditCity />;
    myTineraries = <MyTinerares />;
    newTineraries = <NewItinerary />;
    
    console.log("is admin");
  } else if (userRole == "user") {
    
    newCity = <UnderConstruction />;
    editCity = <UnderConstruction />;
    myTineraries = <MyTinerares />;
    newTineraries = <NewItinerary />;
    
    console.log("is a user");
  } else {
    
    newCity = <UnderConstruction />;
    editCity = <UnderConstruction />;
    myTineraries = <UnderConstruction />;
    newTineraries = <UnderConstruction />;

    console.log("is no user");
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <WebsiteLayout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/mytineraries" element={myTineraries} />
          <Route path="/newitinerary" element={newTineraries} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/newcity" element={newCity} />
          <Route path="/*" element={<UnderConstruction />} />
          <Route path="/cities/:id" element={<City />} />
          <Route path="/editcity" element={editCity} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
