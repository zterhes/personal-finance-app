import VerticalSideBar from "./VerticalSideBar";
import HorizontalSideBar from "./HorizontalSideBar";

const SideBar = () => {
  return (
    <>
      <VerticalSideBar className=" max-lg:hidden sticky top-0" />
      <HorizontalSideBar className="lg:hidden" />
    </>
  );
};

export default SideBar;
