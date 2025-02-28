import React from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="flex w-full homeContainer ">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
