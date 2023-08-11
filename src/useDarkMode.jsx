import React, { useEffect, useState } from "react";

const useDarkMode = () => {
    const [isDarkmode, setIsDarkmode] = useState(
        () => localStorage.theme === "dark"
    );
    const toggleDarkMode = () => {
        setIsDarkmode(!isDarkmode);
    };
    useEffect(() => {
        const html = window.document.documentElement;
        const prev = isDarkmode ? "light" : "dark";
        html.classList.remove(prev);
        const next = isDarkmode ? "dark" : "light";
        html.classList.add("theme", next);
        localStorage.setItem("theme", next);
    }, [isDarkmode]);
    return [isDarkmode, toggleDarkMode];
};

export default useDarkMode;
