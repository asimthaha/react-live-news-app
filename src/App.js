import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LiveNewsView from "./components/LiveNewsView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="" element={<HomestayLogin />}></Route>
        <Route path="add" element={<HomestayAdd />}></Route> */}
        {/* <Route path="search" element={<NewCoursSearch />}></Route>
        <Route path="delete" element={<NewCourseDelete />}></Route> */}
        <Route path="" element={<LiveNewsView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
