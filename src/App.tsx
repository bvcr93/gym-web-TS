import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { SelectedPage } from "./types/enums";




function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);


  return (
    <div className="app bg-gray-20">
      <Nav
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}       
      />

    </div>
  );
}

export default App;
