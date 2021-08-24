import { useEffect, useState } from "react";

import api from "./services/api";

function App() {

  const [phone, setPhone] = useState([]);

  useEffect(() => {
    api.get('phones').then(response => {
      console.log(response.data);
    })
  }, []);

  return (
    <h1>Hello World</h1>
  );
}

export default App;