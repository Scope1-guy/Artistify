import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logOut } from "../../services/firebase";
import "./Profile.css";

function Profile() {
  const { currentUser } = useContext(AuthContext);

  // const initial = currentUser.email[0].toUpperCase();
  return (
    <div className="page-container page-section profile">
      <div>
        <h1>Profile</h1>
        {/* <button>Edit Details</button> */}
      </div>

      <div className="profile_avatar">
        {currentUser.photoURL ? (
          <img src={currentUser.photoURL} alt="" referrerPolicy="no-referrer" />
        ) : (
          currentUser.email[0].toUpperCase()
        )}
      </div>
      <h1 className="profile__name">
        {currentUser.displayName || currentUser.email.split("@")[0]}
      </h1>
      <p className="profile__email">{currentUser.email}</p>

      <div>
        <h4>Favorites Genre</h4>
        <p>Empty</p>
      </div>

      <button className="profile_logout" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
}

export default Profile;
