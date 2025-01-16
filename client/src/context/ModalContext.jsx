import { createContext, useState } from "react";

export const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const toggleScrollBody = (flag) => {
    const classBody = document.querySelector("body");
    if (flag) {
      classBody.classList.remove("is-overflow");
    } else {
      classBody.classList.add("is-overflow");
    }
  };

  const [showModalCareerGoal, setShowModalCareerGoal] = useState(false);

  const fnShowModalCareerGoal = () => {
    toggleScrollBody(showModalCareerGoal);
    setShowModalCareerGoal(!showModalCareerGoal);
  };

  return (
    <ModalContext.Provider
      value={{
        showModalCareerGoal,
        fnShowModalCareerGoal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
