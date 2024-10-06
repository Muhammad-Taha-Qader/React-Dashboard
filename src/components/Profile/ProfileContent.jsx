
const ProfileContent = ({ activeTab }) => {
  return (
    <div className="bg-zinc-900  shadow-md rounded-lg p-4 mt-4">
      {activeTab === 'posts' && <p>Your Posts will be displayed here...</p>}
      {activeTab === 'followers' && <p>Your Followers will be displayed here...</p>}
      {activeTab === 'following' && <p>Your Following will be displayed here...</p>}
    </div>
  );
};

export default ProfileContent;
