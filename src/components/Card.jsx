import React from "react";

function Card({card : {id, title, content}}) {

    function onClickDeleteNote() {
        document.querySelector(".delete-menu").classList.remove("invisible");
        document.querySelector(".delete-menu button:last-child").dataset.id = id;
    }

    return (
        <div className="group relative p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>
                <button className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full transition-colors group/btn" onClick={onClickDeleteNote}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>

            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400">{content}</p>
        </div>
    )
}

export default Card;