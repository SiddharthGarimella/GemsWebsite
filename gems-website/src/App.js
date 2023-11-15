import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurPolicy from "./pages/OurPolicy/OurPolicy";
import ContactUs from "./pages/ContactUs/ContactUs";
import Programs from "./pages/Programs/Programs";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/AboutUs":
      component = <AboutUs />;
      break;
    case "/OurPolicy":
      component = <OurPolicy />;
      break;
    case "/ContactUs":
      component = <ContactUs />;
      break;
    case "/Programs":
      component = <Programs />;
      break;
    default:
      component = <Home />;
      break;
  }

  return (
    <div className="App">
      <Navbar />
      <div>{component}</div>
      <Footer />
    </div>
  );
}

export default App;
