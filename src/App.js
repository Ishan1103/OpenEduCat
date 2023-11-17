import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import MenuCard from "./components/MenuCard";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Classroom from "./pages/Classroom";
import Feedback from "./pages/Feedback";
import Calendar from "./pages/Calendar";
import Drive from "./pages/Drive";
import CampusHelpCenter from "./pages/CampusHelpCenter";
import BookAVenue from "./pages/BookAVenue";
import StudentForm from "./pages/StudentForm";
import Clubs from "./pages/Clubs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <MenuCard
          stuName="Ishan Tomar"
          stuEnroll="05418002720"
          stuBranch="Computer Science Engineering"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/campushelpcenter" element={<CampusHelpCenter />} />
          <Route path="/bookavenue" element={<BookAVenue />} />
          <Route path="/studentform" element={<StudentForm />} />
          <Route path="/clubs" element={<Clubs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
