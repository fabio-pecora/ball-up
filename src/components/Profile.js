import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import "../Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [media, setMedia] = useState([
    "https://cdn.nba.com/videos/dribble-move.mp4",
    "https://cdn.nba.com/photos/dunk-action.jpg",
    "https://cdn.nba.com/photos/three-pointer.jpg",
    "https://cdn.nba.com/videos/crossover-highlight.mp4"
  ]);
  const [newMedia, setNewMedia] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      setUser({
        name: "Basketball Pro",
        email: "bballpro@example.com",
        level: "Advanced",
        introduction: "Passionate about basketball. Love playing and analyzing the game!",
        favTeams: "Los Angeles Lakers, Golden State Warriors",
        profilePicture: "https://cdn.nba.com/profiles/lebron.jpg",
        posts: 230,
        followers: 25.4,
        following: 180,
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
        <div className="profile-info">
          <h2 className="profile-name">{user.name}</h2>
          <div className="profile-stats">
            <span><strong>{user.posts}</strong> Posts</span>
            <span><strong>{user.followers}K</strong> Followers</span>
            <span><strong>{user.following}</strong> Following</span>
          </div>
          <div className="profile-actions">
            <button className="follow-btn">Follow</button>
            <button className="message-btn">Message</button>
          </div>
        </div>
      </div>
      <div className="profile-bio">
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
              {item.includes(".mp4") ? (
                <video width="100%" height="180" controls>
                  <source src={item} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
