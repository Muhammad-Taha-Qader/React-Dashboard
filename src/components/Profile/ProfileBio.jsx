const ProfileBio = ({ bio }) => {
  return (
    <div className="bg-zinc-900  shadow-md rounded-lg p-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">About Me</h2>
      <p className="text-gray-700">{bio}</p>
    </div>
  );
};

export default ProfileBio;
