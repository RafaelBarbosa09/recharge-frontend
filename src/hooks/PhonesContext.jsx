import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

export const PhonesContext = createContext({});

export function PhonesProvider(props) {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    api.get('phones').then(response => {
      setPhones(response.data);
    })
  }, []);

  async function createPhone(phoneParam) {
    const response = await api.post('/phones', phoneParam)
    
    const phone = response.data;

    setPhones([...phones, phone]);
  }

  return (
    <PhonesContext.Provider value={{ phones, createPhone }}>
      {props.children}
    </PhonesContext.Provider>
  );
}

export function usePhones() {
  return useContext(PhonesContext);
}