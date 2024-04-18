import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [rows, setRows] = useState([]);
  const [imageToShow, setImageToShow] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImageToShow(null);
  };

  const handleGenerateClick = () => {
    if (!file) {
      // Set the image to show when file is not uploaded
      setImageToShow(
        <div className="flex flex-col items-center justify-center">
          <img
            className="h-1/4 w-1/3 align-middle"
            alt="file-not-found"
            src="https://as2.ftcdn.net/v2/jpg/01/74/27/71/1000_F_174277119_Jfcg8AV4OK5TytkHn2IVmOFGlVefNaLX.jpg"
          />
          <h1 className="text-xl font-bold">Please Upload the file first..</h1>
        </div>
      );
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      const rows = content.split("\n").slice(0, 8);
      setRows(rows);
    };

    reader.readAsText(file);
  };

  return (
    <div className="md:mx-10 p-10">
      <h1 className="md:text-5xl text-4xl py-5 mb-5 font-semibold">
        Upload Your File here...
      </h1>
      <div className="md:flex gap-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="my-4 md:my-0 py-2 px-4 border border-[#911c1c] rounded-lg"
        />
        <button
          className="bg-[#911c1c] hover:bg-[#911c1c] text-white font-bold py-2 px-4 rounded-lg mx-auto md:mx-0 block md:inline-block"
          onClick={handleGenerateClick}>
          Generate
        </button>
      </div>
      {/* Conditionally render the image */}
      {imageToShow && <div>{imageToShow}</div>}
      <div className="overflow-x-auto">
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
