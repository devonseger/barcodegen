import React, { useState } from "react";

export default function GetUpc({ updateUpc, error }) { // Receives updateUpc function from App.jsx as a prop
    const [upc, setUpc] = useState("")
    


    function handleSubmit(e) {
        e.preventDefault()
        updateUpc(upc)
        console.log(upc)
        setUpc("")
    }
    function handleChange(e) {
        console.log(e.target.value)
        setUpc(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="border-2 border-neutral-950 rounded-lg centered-input" onInput={handleChange} type="text" name="upc" placeholder="Enter UPC" />
            <button className="py-1 ml-4 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="submit">Submit</button>
            <br />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <br />
            
        </form>
    );
}