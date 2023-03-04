import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { SelectedPage } from "../types/enums";

interface AppContextType {
  selectedPage: SelectedPage;
  setSelectedPage: (selectedPage: SelectedPage) => void;
  isTopOfPage: boolean
}
interface AppProviderProps {
    children: ReactNode
}
export const AppContext = createContext<AppContextType>({
    selectedPage: SelectedPage.Home,
    setSelectedPage: () => { },
    isTopOfPage: true
});

export function AppProvider({ children }: AppProviderProps) {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY === 0){
            setIsTopOfPage(true)
            setSelectedPage(SelectedPage.Home)

        }
        if(window.scrollY !== 0){
            setIsTopOfPage(false)
        }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <AppContext.Provider value={{ selectedPage, setSelectedPage,isTopOfPage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
