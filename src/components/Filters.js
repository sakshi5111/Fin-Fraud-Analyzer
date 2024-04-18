import React, { useState } from "react";

const Filters = () => {
  // Predefined rules
  const [rules, setRules] = useState([
    { id: 1, description: "Unusually large transaction amount" },
    {
      id: 2,
      description:
        "Multiple transactions from different locations in a short span of time",
    },
    { id: 3, description: "Transaction from a blacklisted IP address" },
    { id: 4, description: "Transaction made during unusual hours" },
    { id: 5, description: "Transaction from a high-risk country" },
    // Add more rules if needed
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newRule, setNewRule] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleAddRule = () => {
    if (newRule.trim() !== "") {
      setRules([...rules, { id: rules.length + 1, description: newRule }]);
    }
    setNewRule("");
    setShowModal(false);
  };
  const handleApplyRules = () => {
    setShowAlert(true);
  };
  return (
    <div className="mx-10 p-10">
      <h1 className="text-4xl md:text-5xl py-5 mb-5 font-semibold">
        Apply the Filters
      </h1>

      <button
        style={{ float: "right" }}
        className="bg-[#911c1c] hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4 mr-4"
        onClick={() => setShowModal(true)}>
        Add a Rule
      </button>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-[#911c1c] text-white">
          <tr>
            <th className="px-4 py-2">Checkbox</th>
            <th className="px-4 py-2">Serial Number</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule, index) => (
            <tr key={rule.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{rule.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="max-w-2xl mx-auto p-4 relative">
        {/* Existing code */}
        <div className="flex justify-center mt-4">
          {" "}
          {/* Centering container */}
          <button
            className="bg-[#911c1c] hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleApplyRules}>
            Apply
          </button>
        </div>
        {/* Existing code */}
        {showAlert && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-lg font-semibold mb-4">
                Rules Applied Successfully
              </p>
              <button
                className="bg-[#911c1c] hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowAlert(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Add a New Rule
                </h3>
                <input
                  className="border rounded-md px-3 py-2 w-full mb-4"
                  type="text"
                  placeholder="Enter new Rule"
                  value={newRule}
                  onChange={(e) => setNewRule(e.target.value)}
                />
                <div className="flex justify-end">
                  <button
                    className="bg-[#911c1c] hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={handleAddRule}>
                    Add
                  </button>
                  <button
                    className="bg-[#911c1c] hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
