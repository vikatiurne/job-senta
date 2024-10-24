import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default ({ component }) => {
    const container = document.querySelector("#portal");

    const [innerHtmlEmpty, setInnerHtmlEmpty] = useState(false);

    useEffect(() => {
        if (!innerHtmlEmpty) {
            container.innerHTML = "";
            setInnerHtmlEmpty(true);
        }
    }, [innerHtmlEmpty]);

    if (!innerHtmlEmpty) return;

    return createPortal(component, container);
}