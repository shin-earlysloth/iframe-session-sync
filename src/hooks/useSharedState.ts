import { useState } from "react";

const useSharedState = () => {
  const [state, setState] = useState<any>();

  setInterval(() => {
    const data = window.sessionStorage.getItem("temp");
    setState(data);
  }, 1000);

  return state;
};

export default useSharedState;
