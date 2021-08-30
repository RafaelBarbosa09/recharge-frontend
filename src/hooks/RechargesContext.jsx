import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

export const RechargesContext = createContext({});

export function RechargesProvider(props) {
  const [recharges, setRecharges] = useState([]);

  useEffect(() => {
    api.get('rechargs').then(response => {
      setRecharges(response.data);
    })
  }, []);

  async function createRecharge(rechargParam) {
    const response = await api.post('/rechargs', rechargParam)
    
    const recharge = response.data;

    setRecharges([...recharges, recharge]);
  }

  return (
    <RechargesContext.Provider value={{ recharges, createRecharge }}>
      {props.children}
    </RechargesContext.Provider>
  );
}

export function useRecharges() {
  return useContext(RechargesContext);
}