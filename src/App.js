
import "./App.scss";
import Navbar from "./components/Appbar/Navbar";
import ContainerWithAppbar from "./components/Containerwithappbar/ContainerWithAppbar";
import Loginpage from "./pages/AuthPages/Loginpage";
import Signuppage from "./pages/AuthPages/Signuppage";

const App = () => {
  return (
    <>
       <ContainerWithAppbar />
      {/* <Loginpage/> */}
    </>
  );
};

export default App;
