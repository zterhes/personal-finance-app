import { Outlet } from "react-router-dom";
import illustration from "../assets/illustration-authentication.svg";
import logo from "../assets/logo-large.svg";

export const AuthenticationLayout = () => {
  return (
    <div className="w-full h-full md:flex bg-beige-100">
      <div className="w-full flex md:hidden bg-grey-900 justify-center items-center py-300 px-500 rounded-b-lg">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="w-4/12 h-screen p-250 max-md:hidden">
        <div
          style={{
            backgroundImage: `url(${illustration})`,
          }}
          className="w-full bg-center bg-cover bg-no-repeat h-full rounded-lg p-500 justify-between flex flex-col"
        >
          <img src={logo} alt="logo" className="w-32" />
          <div className="flex flex-col items-center justify-center">
            <h1 className=" text-white text-text-preset-1 leading-text-preset-1 font-bold">
              Keep track of your money and save for your future
            </h1>
            <p className="text-white text-text-preset-4 leading-text-preset-4">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-8/12 h-screen flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};
