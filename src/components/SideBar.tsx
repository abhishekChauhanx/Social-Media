import { SlFeed } from "react-icons/sl";
import { BsFillChatSquareHeartFill } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { MdGroups2 } from "react-icons/md";
import { IoBookmarks } from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineCastForEducation } from "react-icons/md";
import SideBarFri from "./SideBarFri";
import { Users } from "../Data";
const SideBar = () => {
  return (
    <div className="flex-[3] h-[calc(100vh-50px)] overflow-y-scroll sticky  top-[50px]">
      <div className="p-5">
        <ul className="list-none sideBarlist">
          <li className="sideBarItems">
            <SlFeed className="inline-block sideBarIcons" />
            <span className="item-text">Feed</span>
          </li>
          <li className="sideBarItems">
            <BsFillChatSquareHeartFill className="inline-block sideBarIcons" />
            <span className="item-text">Chats</span>
          </li>
          <li className="sideBarItems">
            <BiSolidVideos className="inline-block sideBarIcons" />
            <span className="item-text">Videos</span>
          </li>
          <li className="sideBarItems">
            <MdGroups2 className="inline-block sideBarIcons" />
            <span className="item-text">Groups</span>
          </li>
          <li className="sideBarItems">
            <IoBookmarks className="inline-block sideBarIcons" />
            <span className="item-text">Bookmarks</span>
          </li>
          <li className="sideBarItems">
            <CiCalendarDate className="inline-block sideBarIcons" />
            <span className="item-text">Events</span>
          </li>
          <li className="sideBarItems">
            <BsFillQuestionSquareFill className="inline-block sideBarIcons" />
            <span className="item-text">Questions</span>
          </li>
          <li className="sideBarItems">
            <MdWorkOutline className="inline-block sideBarIcons" />
            <span className="item-text">Jobs</span>
          </li>
          <li className="sideBarItems">
            <MdOutlineCastForEducation className="inline-block sideBarIcons" />
            <span className="item-text">Courses</span>
          </li>
        </ul>
        <button className="sideBarBtn w-[150px] border-none p-[10px] rounded-lg font-bold bg-white text-black">
          Show More
        </button>
        <hr className="mt-[20px] mb-[20px]" />
        <ul className="list-none sideBarFriendsList ">
          {Users.map((i) => (
            <SideBarFri key={i.id} user={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
