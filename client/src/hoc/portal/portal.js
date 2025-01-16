import { createPortal } from "react-dom";
import { useEffect, useState } from "react";


const PortalComponent = ({ component }) => {
  const container = document.querySelector("#portal");
  const [innerHtmlEmpty, setInnerHtmlEmpty] = useState(false);

  useEffect(() => {
    if (!innerHtmlEmpty) {
      container.innerHTML = "";
      setInnerHtmlEmpty(true);
    }
  }, [innerHtmlEmpty, container]);

  if (!innerHtmlEmpty) return null; 

  return createPortal(component, container);
};

export default PortalComponent;