import Benefits from "./components/Benefits";
import Home from "./components/Home";
import Nav from "./components/Nav";
import OurClasses from "./components/OurClasses";
import { AppProvider } from "./context/AppContext";


function App() {


  return (
    <AppProvider>
    <div className="app">
      <Nav />
      <Home/>
      <Benefits/>
      <OurClasses/>
    </div>
    </AppProvider>
  );
}

export default App; 
