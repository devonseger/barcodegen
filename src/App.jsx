import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import GetUpc from "./components/GetUpc";
import Barcode from "./components/Barcode";
import Footer from "./components/Footer";
import "./index.css"; // Ensure styles are imported

function BarcodeWithParams() {
  const { upc } = useParams();
  const [error, setError] = useState("");

  return <Barcode upc={upc} updateError={setError} />;
}

function App() {
  const [upc, setUpc] = useState("");
  const [error, setError] = useState("");

  function updateUpc(newUpc) {
    setUpc(newUpc);
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert('URL copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  return (
    <Router>
      <div className="centered-container p-4 min-h-screen flex flex-col justify-between">
        <Routes>
          <Route path="/:upc" element={<BarcodeWithParams />} />
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center justify-center p-4 flex-grow">
                <h1 className="text-3xl font-bold underline pb-4">Barcode Generator</h1>
                <GetUpc updateUpc={updateUpc} error={error} />
                <Barcode upc={upc} updateError={setError} />
                {upc && (
                  <>
                    <br />
                    <button
                      type="button"
                      className="py-1 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      onClick={() => copyToClipboard(`http://barcode.delivery/${upc}`)}
                    >
                      Copy URL
                    </button>
                  </>
                )}
              </div>
            }
          />
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
