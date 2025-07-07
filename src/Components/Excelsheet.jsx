import React from "react";
import { useState, useEffect } from "react";
import Spreadsheet, { createFormulaParser } from "react-spreadsheet";

const Excelsheet = () => {
  const customCreateFormulaParser = (data) =>
    createFormulaParser(data, { SUM: undefined });

  const [data, setData] = useState([]);

  useEffect(() => {
    const generateData = () => {
      const cellWidth = 104; // Approx cell width in px
      const cellHeight = 28; // Approx cell height in px

      const columns = Math.floor(window.innerWidth / cellWidth);
      const rows = Math.floor(window.innerHeight / cellHeight);

      const newData = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => ({ value: "" }))
      );

      // Optional: set some sample values
      if (newData[0]?.[0]) newData[0][0].value = "Vanilla";
      if (newData[0]?.[1]) newData[0][1].value = "Chocolate";

      setData(newData);
    };

    generateData();

    // Optional: regenerate on resize
    window.addEventListener("resize", generateData);
    return () => window.removeEventListener("resize", generateData);
  }, []);

  return (
   <div className=" h-[490px] overflow-x-scroll">
     <Spreadsheet
      data={data}
      onChange={setData}
      createFormulaParser={customCreateFormulaParser}
    />
   </div>
  );
};

export default Excelsheet;
