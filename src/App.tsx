import Benefits from "./pages/Benefits";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import OurClasses from "./pages/OurClasses";
import { AppProvider } from "./context/AppContext";
import Footer from "./components/Footer";


function App() {


  return (
    <AppProvider>
      <div className="app">
        <Nav />
        <Home />
        <Benefits />
        <OurClasses />
        <ContactUs />
        <Footer/>
      </div>
    </AppProvider>
  );
}

export default App; 
