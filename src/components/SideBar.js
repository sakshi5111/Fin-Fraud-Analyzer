import MainContainer from "./MainContainer";
import { logo_url } from "../utils/constants";
import SideBarLinks from "./SideBarLinks";

const SideBar = () => {
  return (
    <div className="flex">
      <div className="">
        <div className="mt-4 pt-4 pb-8 mb-4 bg-white w-64">
          <img className="ml-8 w-48 bg-white" src={logo_url} alt="logo" />
        </div>
        <SideBarLinks />
      </div>
      <div>
        <MainContainer />
      </div>
    </div>
  );
};

export default SideBar;
