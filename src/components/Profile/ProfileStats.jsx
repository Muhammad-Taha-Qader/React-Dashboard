const ProfileStats = ({ posts, followers, following }) => {
  return (
    <div className="flex justify-around bg-zinc-900  shadow-md rounded-lg p-4 mt-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold">{posts}</h2>
        <p className="text-gray-500">Posts</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold">{followers}</h2>
        <p className="text-gray-500">Followers</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold">{following}</h2>
        <p className="text-gray-500">Following</p>
      </div>
    </div>
  );
};

export default ProfileStats;
