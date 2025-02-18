import { useState, useEffect } from "react";
import NavBar from "../components/NavBar"; // Ensure exact case
import "../Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [media, setMedia] = useState([]);
  const [newMedia, setNewMedia] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      setUser({
        name: "Guest User",
        email: "guest@example.com",
        level: "Beginner",
        introduction: "Welcome to my profile!",
        favTeams: "Not provided",
        profilePicture: "https://via.placeholder.com/150",
      });
    }
  }, []);

  const handleAddMedia = () => {
    if (newMedia.trim() !== "") {
      setMedia([...media, newMedia]);
      setNewMedia("");
    }
  };

  if (!user) {
    return <div className="profile-message">Loading profile...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="profile-image"
        />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        <p className="profile-level">{user.level}</p>
      </div>
      <div className="profile-bio">
        <h3>Introduction</h3>
        <p>{user.introduction}</p>
      </div>
      <div className="profile-favorites">
        <h3>Favorite NBA Teams</h3>
        <p>{user.favTeams}</p>
      </div>
      <div className="profile-media">
        <h3>Basketball Highlights</h3>
        <div className="media-grid">
          {media.map((item, index) => (
            <div key={index} className="media-item">
              {item.includes("youtube") ? (
                <iframe width="100%" height="200" src={item} frameBorder="0" allowFullScreen></iframe>
              ) : (
                <img src={item} alt="User Upload" className="media-image" />
              )}
            </div>
          ))}
        </div>
        <div className="media-input">
          <input
            type="text"
            placeholder="Paste image/video URL"
            value={newMedia}
            onChange={(e) => setNewMedia(e.target.value)}
          />
          <button onClick={handleAddMedia} className="add-media-button">
            Add Media
          </button>
        </div>
      </div>
    </div>
  );
}
