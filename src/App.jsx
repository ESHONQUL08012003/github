
import { context } from "./context/Context";
import Navbar from "./layout/Navbar";
// import Erorr from "./pages/Erorr/Erorr";
import Footer from "./layout/Footer";
import Home from "./pages/Home/Home";



const App = () => {
  return (
    <>
      <context.Provider value={"https://api.github.com/users/"}>
        <Navbar />
        <main>
          <Home/>
        </main>
        <Footer />
      </context.Provider>
    </>
  );
};

export default App;
