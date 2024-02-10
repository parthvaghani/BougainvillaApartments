import React, { createContext, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
export const SubMenuVisibilityContext = createContext("");

export const DefaultLayout = ({ children }) => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  return (
    <SubMenuVisibilityContext.Provider
      value={{ subMenuVisible, setSubMenuVisible }}
    >
      <div className="My_app DefaultLayout">
        <Header />
        {children}
        <Footer />
      </div>
    </SubMenuVisibilityContext.Provider>
  );
};
