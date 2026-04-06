import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme-preference");
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    function onClickDarkMode() {
        setIsDarkMode(prev => !prev);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme-preference", isDarkMode ? "light" : "dark");
    }

    function onClickAddNote() {
        document.querySelector(".add-note-menu").classList.remove("invisible");
    }

    return (
        <nav className="px-6 py-8 flex items-center justify-between sm:flex-row flex-col gap-y-4">
            <h2 className="text-3xl font-bold ">Quick Notes</h2>
            <div className="flex items-center gap-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors" onClick={onClickAddNote}>+ Add Note</button>
                <button className="set-dark bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded cursor-pointer transition-colors" onClick={onClickDarkMode}>
                    {isDarkMode ? "☀️" : "🌙"}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;