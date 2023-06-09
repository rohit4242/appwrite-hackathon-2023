import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Directory from "../Routes/Directory";
import DoneTasks from "../Routes/DoneTasks";
import Home from "../Routes/Home";
import ImportantTasks from "../Routes/ImportantTasks";
import SearchResults from "../Routes/SearchResults";
import TaskOnly from "../Routes/TaskOnly";
import TodaysTasks from "../Routes/TodaysTasks";
import HeaderTasks from "./HeaderTasks";

const TasksSection = () => {
  return (
    <main className="min-h-screen px-3 pt-5 pb-8 m-auto sm:pb-16 md:px-8 md:w-full xl:w-8/12">
      <HeaderTasks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today" element={<TodaysTasks />} />
        <Route path="/important" element={<ImportantTasks />} />
        <Route
          path="/completed"
          element={<DoneTasks done={true} title="Completed tasks" />}
        />
        <Route
          path="/uncompleted"
          element={<DoneTasks done={false} title="Uncompleted tasks" />}
        />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/dir/:dir" element={<Directory />} />
        <Route path="/task/:taskId" element={<TaskOnly />} />
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </main>
  );
};

export default TasksSection;
