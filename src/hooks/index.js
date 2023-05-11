import { useState } from "react";

const useField = (type, name) => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const clearinput = () => {
    setValue("");
  };

  return { type, name, value, onChange, clearinput };
};

export default useField;
