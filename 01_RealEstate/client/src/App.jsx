import Header from "./components/header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/testimonials.jsx";
import Contact from "./components/Contact.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
