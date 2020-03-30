import React, { useState } from "react";

export const countContext = React.createContext();

const Store = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <countContext.Provider value={[count, setCount]}>
      {children}
    </countContext.Provider>
  );
};

export default Store;
