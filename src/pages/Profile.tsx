import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

const Profile = () => {
  return (
    <div>
      <TopBar />
      <div className="flex profile">
        <SideBar />
        <div className="flex-[9] profile-right">
          <div className="profileRightTop">
            <div className="profile-cover h-[320px] relative">
              <img
                src="../../pubic/assets/post/3.jpg"
                alt=""
                className="profileCoverImg w-full h-[250px] object-cover"
              />
              <img
                src="../../pubic/assets/people/3.jpg"
                alt=""
                className="profileProfileImg w-[150px] h-[150px] object-cover absolute top-[50%] left-[45%] border-white border-2 rounded-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center profile-ingo">
              <h4 className=" profileInfo text-[24px]">Zoker Chauhan</h4>
              <span className="font-semibold profileDes">
                Zokerad edwdawfc eesfs egs esn
              </span>
            </div>
          </div>
          <div className="flex profileRightBottom">
            <Feed />
            <RightBar profile/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
