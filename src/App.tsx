import Benefits from "./pages/Benefits";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import OurClasses from "./pages/OurClasses";
import { AppProvider } from "./context/AppContext";


function App() {


  return (
    <AppProvider>
      <div className="app">
        <Nav />
        <Home />
        <Benefits />
        <OurClasses />
        <ContactUs />
      </div>
    </AppProvider>
  );
}

export default App; 
