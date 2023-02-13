import { createContext, ReactNode, useState } from "react";
import { BBStuff, Person } from "../models/stuff";


interface stuffContextObj {
  stuff: Person[],
  personInfo: Person | undefined,
  infoPanelVisibility: boolean,
  setInfoPanelVisibility: (value: boolean) => void,
  openInfo: (personId: number) => void,
}


export const StuffContext = createContext<stuffContextObj>({
  stuff: BBStuff,
  personInfo: undefined,
  infoPanelVisibility: false,
  setInfoPanelVisibility: (value: boolean) => {},
  openInfo: (personId: number) => {},
});


export const StuffContextProvider = (props: {children: ReactNode}) => {
  const stuff: Person[] = BBStuff;
  const [infoPanelVisibility, setInfoPanelVisibility] = useState<boolean>(false);
  const [personInfo, setPersonInfo] = useState<Person | undefined>();
  

  const openPersonInfo = (id: number) => {
    const newPersonInfo = stuff.find((person) => person.id === id);
    
    setPersonInfo(newPersonInfo);
    setInfoPanelVisibility(true);
  }
  

  const contextValue: stuffContextObj = {
    stuff: BBStuff,
    personInfo,
    infoPanelVisibility,
    setInfoPanelVisibility,
    openInfo: openPersonInfo,
  }

  return (
    < StuffContext.Provider value={contextValue}>
      {props.children}
    </ StuffContext.Provider>

  )
}
