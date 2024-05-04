import { useState, useEffect } from "react";
import { getProfile, updateProfile } from "../controllers/profileController";
const Profile = ({ userId }) => {
  const [profile, setProfile] = useState({});
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile(userId);
      setProfile(data);
    };
    fetchProfile();
  }, [userId]);
  const handleUpdate = async () => {
    await updateProfile(userId, profile);
    setEditing(false);
  };
  return (
    <div>
      <h1>Profile</h1>
      {!editing ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Age: {profile.age}</p>
          <p>Bio: {profile.bio}</p>
          {profile.photoUrl && (
            <img src={profile.photoUrl} alt="Profile Picture" />
          )}
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      ) : (
        <div>
          <label>
            Name:
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </label>

          <label>
            Age:
            <input
              type="number"
              value={profile.age}
              onChange={(e) => setProfile({ ...profile, age: e.target.value })}
            />
          </label>

          <label>
            Bio:
            <textarea
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            />
          </label>

          <label>
            Photo URL:
            <input
              type="text"
              value={profile.photoUrl}
              onChange={(e) =>
                setProfile({ ...profile, photoUrl: e.target.value })
              }
            />
          </label>

          <button onClick={handleUpdate}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
