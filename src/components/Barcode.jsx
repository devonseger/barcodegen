import React, { useEffect, useRef } from "react";
import bwipjs from "bwip-js";

function Barcode({ upc, updateError }) {
  const canvasRef = useRef(null);

  function handleError(e) {
    const errorMessage = e.message.split("Error: ")[1] || e.message;
    console.error("Error generating barcode: ", errorMessage);
    updateError(errorMessage);
  }

  useEffect(() => {
    if (upc) {
      let barcodeType = "upca";

      if (upc.length === 11 || upc.length === 12) {
        barcodeType = "upca";
      } else if (upc.length === 8) {
        barcodeType = "ean8";
      }

      try {
        bwipjs.toCanvas(canvasRef.current, {
          bcid: barcodeType, // Barcode type
          text: upc,         // Text to encode
          scale: 3,          // Scaling factor
          height: 20,        // Bar height, in mm
          includetext: true, // Show human-readable text
          textxalign: "center", // Center the text
          backgroundcolor: "#FFFFFF", // Background color
        });
      } catch (e) {
        handleError(e);
      }
    }
  }, [upc]);

  return (
    <div className="mt-4">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default Barcode;
