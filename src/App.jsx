import { Routes, Route } from "react-router-dom";
import { context } from "./context/Context";
import Navbar from "./layout/Navbar";
import Erorr from "./pages/Erorr/Erorr";
import Footer from "./layout/Footer";
import Home from "./pages/Home/Home";
import Overview from "./pages/HomeContext/Overview";
import Repositories from "./pages/HomeContext/Repositories";
import Following from "./pages/HomeContext/Folowing/Following";
import Project from "./pages/HomeContext/Project";
import Peckejs from "./pages/HomeContext/Peckejs"


const App = () => {
  return (
    <>
      <context.Provider value={"https://api.github.com/users/"}>
        <Navbar />
        <main>
          <Routes>
            <Route path="*" element={<Erorr />} />
            <Route path="/home" element={<Home />}>
              <Route index path="/home/oerview" element={<Overview />} />
              <Route path="home/repositories" element={<Repositories />} />
              <Route path="/home/following" element={<Following />} />
              <Route path="/home/project" element={<Project/>}/>
              <Route path="/home/pacejs" element={<Peckejs/>}/>
            </Route>
          </Routes>
        </main>
        <Footer />
      </context.Provider>
    </>
  );
};

export default App;
