import React from "react";
import { Moon } from 'lucide-react';

function Navbar() {
    return (
        <nav className="px-6 py-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold ">Quick Notes</h2>
            <div className="flex items-center gap-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors">+ Add Note</button>
                <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded cursor-pointer transition-colors">🌙</button>
            </div>
        </nav>
    );
}

export default Navbar;