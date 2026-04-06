import React from "react";
import { useState } from "react";

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onClickDarkMode = () => {
        setIsDarkMode(prev => !prev);
        document.documentElement.classList.toggle("dark");
    }

    const onClickAddNote = () => {
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