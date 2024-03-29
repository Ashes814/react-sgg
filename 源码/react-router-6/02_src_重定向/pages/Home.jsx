import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Home() {
  const [sum, setSum] = useState(1);
  return (
    <div>
      <h3>Home</h3>
      {sum === 2 ? <Navigate to="/about" /> : <h4>Sum: {sum}</h4>}
      <button onClick={() => setSum(2)}>Turn Sum To 2</button>
    </div>
  );
}
