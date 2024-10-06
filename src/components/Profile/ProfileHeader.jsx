
const ProfileHeader = ({ name, location, profilePic }) => {
  return (
    <div className="flex flex-col items-center bg-zinc-900 shadow-lg rounded-lg p-6">
      <img
        src={profilePic}
        alt={`${name}'s profile`}
        className="w-32 h-32 rounded-full border-4 border-indigo-500 mb-4"
      />
      <h1 className="text-3xl font-bold mb-1">{name}</h1>
      <p className="text-gray-500">{location}</p>
    </div>
  );
};

export default ProfileHeader;
