import React from "react";
import { useState, useEffect } from "react";
import Spreadsheet, { createFormulaParser } from "react-spreadsheet";

const Excelsheet = () => {
  const customCreateFormulaParser = (data) =>
    createFormulaParser(data, { SUM: undefined });

  const [data, setData] = useState([]);

  useEffect(() => {
    const generateData = () => {
      const cellWidth = 104;
      const cellHeight = 28;

      const columns = Math.floor(window.innerWidth / cellWidth);
      const rows = Math.floor(window.innerHeight / cellHeight);

      const newData = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => ({ value: "" }))
      );

      //  sample values
      // sample values with custom text color
      if (newData[0]?.[0]) {
        newData[0][0] = { value: "launch soc..", className: "text-red-500 " };
      }
      if (newData[0]?.[1]) {
        newData[0][1] = { value: "15-11-2024" };
      }
      if (newData[0]?.[2]) {
        newData[0][2] = {
          value: "in-process",
          className: "bg-yellow-300 px-2 py-1 m-3 text-white rounded-full",
        };
      }

      if (newData[0]?.[3]) {
        newData[0][3] = { value: "Aisha patel" };
      }

      if (newData[0]?.[4]) {
        newData[0][4] = { value: "Medium", className: "text-green-600" };
      }

      setData(newData);
    };

    generateData();

    // resize
    window.addEventListener("resize", generateData);
    return () => window.removeEventListener("resize", generateData);
  }, []);

  return (
    <div className=" h-[490px] w-7xs overflow-x-scroll overflow-y-scroll">
      <Spreadsheet
        data={data}
        onChange={setData}
        createFormulaParser={customCreateFormulaParser}
      />
    </div>
  );
};

export default Excelsheet;
