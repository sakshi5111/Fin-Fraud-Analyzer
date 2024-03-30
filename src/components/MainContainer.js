const MainContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-4 p-6 text-center text-5xl">
        First Upload the CSV file of transactions
      </h1>
      <button className="border-solid border-2 p-3 bg-[#911c1c] text-white rounded-lg text-center">
        Upload
      </button>
    </div>
  );
};

export default MainContainer;
