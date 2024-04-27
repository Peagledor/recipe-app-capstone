import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.userData);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user?.username}</p>
    </div>
  );
};

export default Profile;
