// MANIPULADORES
// Quadro 18 – Manipulador de evento de mudança de valor
import React, { useState } from "react";
function Input() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return <input type="text" value={value} onChange={handleChange} />;
}
export default Input;
