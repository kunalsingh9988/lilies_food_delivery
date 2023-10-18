import React, { useState } from "react";
import "./Profile.css";
import { auth } from "../../firebase_config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signUserOut = async () => {
    setIsLoading(true);
    navigate("/products");
    await signOut(auth);
  };

  return (
    <>
      <Link className="backLink" to="/products">
        <BsArrowLeft className="backIcon" />
      </Link>

      <div id="profile">
        <div className="profileContainer">
          <img src={user.photoURL} alt="" />
          <h1>Your Profile</h1>
          <p>
            <span>Your Name :</span> {user.displayName}
          </p>
          <p>
            <span>Your Email :</span> {user.email}
          </p>
          <button onClick={signUserOut}>
            {isLoading ? "loading..." : "sign Out"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
