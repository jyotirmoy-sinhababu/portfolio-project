import { useState } from 'react';
import { createContext } from 'react';

export const booleanContext = createContext();

const MyContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <booleanContext.Provider
      value={{
        isOpen,
        toggleSidebar,
      }}
    >
      {children}
    </booleanContext.Provider>
  );
};

export default MyContext;
