import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded',
            disableMutationObserver: false,
            mirror: false,
        });
    }, []);

    return <>{children}</>;
};

export default AOSWrapper;