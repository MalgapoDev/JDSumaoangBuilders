import { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [sectionToScroll, setSectionToScroll] = useState(null);

  return (
    <ScrollContext.Provider value={{ sectionToScroll, setSectionToScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
