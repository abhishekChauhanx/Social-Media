const OnlineFri = ({ users }) => {
  console.log(users);
  return (
    <li className="flex items-center rightBar-Friends mb-[15px]">
      <div className="relative mr-2 rightBar-imgContainer">
        <img
          src={users.profilePicture}
          className="w-[40px] h-[40px] rounded-full object-cover"
          alt=""
        />
        <span className="absolute right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full rightbar-online bottom-1"></span>
      </div>
      <span className="font-semibold rightBar-userName ">{users.username}</span>
    </li>
  );
};

export default OnlineFri;
