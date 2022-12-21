import { context } from "./context/Context";
import Navbar from "./layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Home from "./pages/Home/Home";
import PullRequests from "./pages/PullRequests/PullRequests";
import Issues from "./pages/Issues/Issues";
import Marketplace from "./pages/Marketplace";
import Explore from "./pages/Explore";
import CodeSpase from "./pages/CodeSpase";
import Erorr from "./components/Erorr";
import Overview from "./components/Overview";
import Repositories from "./components/Repositories";
import Following from "./components/Folowing";
import Project from "./components/Project";
import Peckejs from "./components/Peckejs";
import Startes from "./components/Startes";

const App = () => {
  return (
    <>
      <context.Provider value={"https://api.github.com/users/`"}>
        <Navbar />
        <main>
          <Routes>
            <Route path="*" element={<Erorr />} />
            <Route path="/home" element={<Home />}>
              <Route path="/home" element={<Overview />} />
              <Route path="/home/repositories" element={<Repositories />} />
              <Route path="/home/following" element={<Following />} />
              <Route path="/home/project" element={<Project />} />
              <Route path="/home/pacejs" element={<Peckejs />} />
              <Route path="/home/star" element={<Startes />} />
            </Route>
            <Route path="/pulRAequest" element={<PullRequests />} />
            <Route path="/issue" element={<Issues />} />
            <Route path="/codeSpace" element={<CodeSpase />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/Explore" element={<Explore />} />
          </Routes>
        </main>

        <Footer />
      </context.Provider>
    </>
  );
};

export default App;
