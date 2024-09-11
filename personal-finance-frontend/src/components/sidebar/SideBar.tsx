import VerticalSideBar from "./VerticalSideBar";
import HorizontalSideBar from "./HorizontalSideBar";

const SideBar = () => {
  return (
    <>
      <VerticalSideBar className=" max-lg:hidden" />
      <HorizontalSideBar className="lg:hidden" />
    </>
  );
};

export default SideBar;
