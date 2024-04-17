import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleUploadClick = () => {
    navigate("/dashboard/upload");
  };

  return (
    <div className="text-center items-center">
      <h1 className="m-4 p-6  text-5xl">
        First Upload the CSV file of transactions
      </h1>
      <button
        className="border-solid border-2 p-3 bg-[#911c1c] text-white rounded-lg text-center font-bold"
        onClick={handleUploadClick}>
        Upload
      </button>
    </div>
  );
};

export default Dashboard;
