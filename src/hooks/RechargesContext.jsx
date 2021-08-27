import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

export const RechargesContext = createContext({});

export function RechargesProvider(props) {
  const [recharges, setRecharges] = useState([]);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    api.get('rechargs').then(response => {
      setRecharges(response.data);
    })
  }, []);


  useEffect(() => {
    api.get('phones').then(response => {
      setPhones(response.data);
    })
  }, []);

  async function createRecharge(rechargParam) {
    const response = await api.post('/rechargs', rechargParam)
    console.log(`response --> ${response.data}`)
    
    const recharge = response.data;

    setRecharges([...recharges, recharge]);
  }

  return (
    <RechargesContext.Provider value={{ recharges, createRecharge, phones }}>
      {props.children}
    </RechargesContext.Provider>
  );
}

export function useRecharges() {
  return useContext(RechargesContext);
}