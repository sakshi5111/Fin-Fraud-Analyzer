import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [rows, setRows] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleGenerateClick = () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      const rows = content.split("\n").slice(0, 5);
      setRows(rows);
    };

    reader.readAsText(file);
  };

  return (
    <div className="m-20 p-20">
      <div className="flex gap-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="py-2 px-4 border border-[#911c1c] rounded-lg"
        />
        <button
          className="bg-[#911c1c] hover:bg-[#911c1c] text-white font-bold py-2 px-4 rounded-lg"
          onClick={handleGenerateClick}>
          Generate
        </button>
      </div>
      <div>
        <table className="table-auto w-full mt-2 rounded-md">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border">
                {row.split(",").map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2 font-semibold">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Upload;
