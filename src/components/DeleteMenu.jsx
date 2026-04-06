import React from "react";

function DeleteMenu({ deleteNote }) {

    return (
        <div className="delete-menu invisible fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Delete Note</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Are you sure you want to delete this note?</p>
                <div className="flex justify-end gap-x-4">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors cursor-pointer" onClick={() => document.querySelector(".delete-menu").classList.add("invisible")}>Cancel</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors cursor-pointer" onClick={(e) => deleteNote(e)}>Delete Note</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteMenu;