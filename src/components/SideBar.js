import MainContainer from "./MainContainer";

const SideBar = () => {
  return (
    <div className="flex">
      <div className="bg-[#6044ed] pt-12 w-1/6">
        <ul className="mx-8 text-2xl font-semibold text-white">
          <li className="mr-4 my-3 py-6 mt-14 cursor-pointer hover:border-solid hover:border-y-2 hover:border-gray-500 hover:rounded-lg">
            <i className="fa-solid fa-house px-2"></i>DashBoard
          </li>
          <li className="mr-4 my-3 py-6 cursor-pointer hover:border-solid hover:border-y-2 hover:border-gray-500 hover:rounded-lg">
            <i className="fa-solid fa-upload px-2"></i>Upload
          </li>
          <li className="mr-4 my-3 py-6 cursor-pointer hover:border-solid hover:border-y-2 hover:border-gray-500 hover:rounded-lg">
            <i className="fa-solid fa-filter px-2"></i>Filters
          </li>
          <li className="mr-4 my-3 py-6 cursor-pointer hover:border-solid hover:border-y-2 hover:border-gray-500 hover:rounded-lg">
            <i className="fa-solid fa-right-from-bracket px-2"></i>Sign Out
          </li>
        </ul>
      </div>
      <div>
        <MainContainer />
      </div>
    </div>
  );
};

export default SideBar;
