import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Erorr from "./pages/Erorr/Erorr";
import Footer from "./layout/Footer";
import "./App.css";
import  {context}  from "./context/Context";
import Home from "./pages/Home/Home";
import PullRequests from "./pages/PullRequests";
function App() {
  return (
    <>
      <context.Provider value={"https://api.github.com/users/"}>
        <Navbar />
        <Routes>
          <Route path="*" element={<Erorr />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pulrequest" element={<PullRequests />} />
        </Routes>
        <Footer />
      </context.Provider>
    </>
  );
}

export default App;
