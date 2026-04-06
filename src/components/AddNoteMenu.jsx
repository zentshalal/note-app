import React from "react";

function AddNoteMenu({ saveNote }) {
    return (
        <div className="add-note-menu invisible fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Add New Note</h2>
                <input type="text" placeholder="Title" className="w-full mb-4 p-2 border-2 border-gray-300 rounded focus:outline-none" />
                <textarea placeholder="Content" className="w-full mb-4 p-2 border-2 border-gray-300 rounded focus:outline-none h-32 resize-none"></textarea>
                <div className="flex justify-end gap-x-4">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors cursor-pointer" onClick={() => document.querySelector(".add-note-menu").classList.add("invisible")}>Cancel</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors cursor-pointer" onClick={(e) => saveNote(e)}>Save Note</button>
                </div>
            </div>
        </div>
    )
}

export default AddNoteMenu;