"use client";

import { createContext, useContext, useState } from "react";

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [curSector, setCurSector] = useState(0);

  const incSector = () => {
    setCurSector((prev) => prev + 1);
  };

  const decSector = () => {
    setCurSector((prev) => {
      return prev - 1 > 0 ? prev - 1 : 0;
    });
  };

  const setSector = (num) => {
    setCurSector(num);
  };

  return (
    <BackgroundContext.Provider
      value={{ curSector, incSector, decSector, setSector }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);
