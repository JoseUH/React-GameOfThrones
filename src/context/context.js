import React,{ useState, useEffect, createContext} from "react";

export const SWContext = createContext();

const BASEURL = "https://api.got.show/api/show";

export const SWContextProvider =({ children }) => {

    const [characters, setCharacters] = useState([]);
    
  useEffect(() => {
    
    const getCharacters = async () => {
        const charactersAPI = await fetch(`${BASEURL}/characters`);
        const charactersJSON = await charactersAPI.json();
        setCharacters(charactersJSON);
        
        
    };
    getCharacters();
  }, []);



  return (
    <SWContext.Provider value={{ characters }}>
      {children}
    </SWContext.Provider>
  );    
}