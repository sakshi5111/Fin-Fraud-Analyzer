/* stylelint-disable */
import MainContainer from "./MainContainer";
import SideBarLinks from "./SideBarLinks";

const SideBar = () => {
  return (
    <div className="flex">
      <div className="border-r-4">
        <div className="mt-4 pt-4 pb-8 mb-4 w-64">
          <img
            className="ml-8 w-48"
            src="https://securseed.com/wp-content/uploads/2023/06/securseed_Color_D-5.png"
            alt="logo"
          />
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

/* stylelint-enable */
