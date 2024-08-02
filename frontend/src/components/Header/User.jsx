import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { userid } = useParams();
    return (
        <div
            className="text-3xl bg-gray-600 rounded-full text-white p-5 m-8 
  shadow-lg shadow-orange-700"
        >
            User: <span className="text-green-500 font-semibold">{userid}</span>
        </div>
    );
}

export default User;
