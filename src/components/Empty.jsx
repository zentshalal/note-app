import React from "react";

function Empty() {
    return (
        <div className="w-2/3 flex flex-col items-center gap-y-4 p-4 text-black mt-20">
            <h2 className="font-bold text-xl">No notes yet</h2>
            <p className="text-gray-500 text-center">Create your first note to get started!</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors">+ Add Your First Note</button>
        </div>
    )
}

export default Empty;