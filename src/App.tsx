import Home from "./components/Home";
import Nav from "./components/Nav";
import { AppProvider } from "./context/AppContext";


function App() {
  return (
    <AppProvider>
    <div className="app">
      <Nav />
      <Home/>
    </div>
    </AppProvider>
  );
}

export default App; 
