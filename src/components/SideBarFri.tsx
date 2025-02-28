

const SideBarFri = ({user}) => {
  return (
    <li className="sideBarFriends">
      <img className="sideBarFriImg"
        src={user.profilePicture}
        alt=""
      />
      <span className="sideBar-name">{user.username}</span>
    </li>
  );
};

export default SideBarFri;
