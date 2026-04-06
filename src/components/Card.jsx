import React from "react";

function Card({card : {title, content}}) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700">{content}</p>
        </div>
    )
}

export default Card;