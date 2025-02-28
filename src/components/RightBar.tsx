import { Users } from "../Data";
import OnlineFri from "./OnlineFri";

const RightBar = ({profile}) => {
  const HomeRightBar=()=>{
    return(
      <>
      <div className="flex items-center">
          <img
            src="../../pubic/assets/gift.png"
            alt=""
            className="w-[40px] h-[40px] mr-2 "
          />
          <span className="font-bold text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vitae
            neque aliquam?
          </span>
        </div>
        <img
          src="../../pubic/assets/ads.jpg"
          alt=""
          className="w-full rounded-lg mt-7 mb-7"
        />
        <h4 className="mb-[20px]"> Online Friends </h4>

        <ul className="list-none rightBar-FriendsList ">
          {Users.map((i) => (
            <OnlineFri key={i.id} users = {i}/>
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightBar=()=>{
    return (
      <>
      <h4 className="text-[18px] font-bold mb-[10px]"> User Infomation</h4>
      <div className="mb-7">
        <div className="rightbarInfo">
          <span className="rightbarKey">City: </span>
          <span className="rightbarValue">Mars</span>
        </div>
        <div className="rightbarInfo">
          <span className="rightbarKey">From: </span>
          <span className="rightbarValue">Mars</span>
        </div>
        <div className="rightbarInfo">
          <span className="rightbarKey">City: </span>
          <span className="rightbarValue">Mars</span>
        </div>
        <div className="rightbarInfo">
          <span className="rightbarKey">relationShip: </span>
          <span className="rightbarValue">Mars</span>
        </div>
      </div>
      <h4> User Friends</h4>
      <div className="flex flex-wrap justify-between rightBarFollowing">
        <div className="rightbarFollowing1">
          <img src="../../pubic/assets/people/2.jpg" alt="" />
          <span className="rightbarFollowingName">Zoker</span>
        </div>
        <div className="rightbarFollowing1">
          <img src="../../pubic/assets/people/2.jpg" alt="" />
          <span className="rightbarFollowingName">Zoker</span>
        </div>
        <div className="rightbarFollowing1">
          <img src="../../pubic/assets/people/2.jpg" alt="" />
          <span className="rightbarFollowingName">Zoker</span>
        </div>
        <div className="rightbarFollowing1">
          <img src="../../pubic/assets/people/2.jpg" alt="" />
          <span className="rightbarFollowingName">Zoker</span>
        </div>
        <div className="rightbarFollowing1">
          <img src="../../pubic/assets/people/2.jpg" alt="" />
          <span className="rightbarFollowingName">Zoker</span>
        </div>
        <div className="rightbarFollowing1">
          <img src="../../pubic/assets/people/2.jpg" alt="" />
          <span className="rightbarFollowingName">Zoker</span>
        </div>
        <div className="rightbarFollowing1">
          <img src="../../pubic/assets/people/2.jpg" alt="" />
          <span className="rightbarFollowingName">Zoker</span>
        </div>
        
      </div>
      
      </>
    )
  }
  return (
    <div className="flex-[3.5] ">
      <div className="pt-5 pr-5">
        {/* <ProfileRightBar/> */}
        <HomeRightBar/>
      </div>
    </div>
  );
};

export default RightBar;
