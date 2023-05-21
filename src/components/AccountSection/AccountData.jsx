import React, { useContext } from "react";
import avatar1 from "../../assets/avatar-1.jpg";
import LayoutMenus from "../Utilities/LayoutMenus";
import DarkMode from "./DarkMode";
import DeleteTasks from "./DeleteTasks";
import TasksDone from "./TasksDone";
import { MenusContext } from "../../Context/Menus/MenusContext";

const AccountData = () => {
  const { state, dispatch } = useContext(MenusContext);

  const closeMenuHandler = () => {
    dispatch({ type: "CLOSE_MENU_ACCOUNT" });
  };

  return (
    <LayoutMenus
      menuOpen={state.menuAccountOpened}
      closeMenuHandler={closeMenuHandler}
      className="top-0 right-0 "
    >
      <section className="flex flex-col h-full p-5">
        <span className="flex items-center mx-auto">
          <span className="font-medium">Hi, User!</span>
          <img src={avatar1} alt="User" className="w-10 ml-4 rounded-full" />
        </span>

        <DarkMode />

        <TasksDone />
        <DeleteTasks />
        <a
          href="https://github.com/rohit4242"
          className="mt-4 bg-[#00B3B2] p-2 rounded-md text-center transition hover:bg-[#009F9F] text-slate-200"
        >
          Made by Rohit Luni
        </a>
      </section>
    </LayoutMenus>
  );
};

export default AccountData;
