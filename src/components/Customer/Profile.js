// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import styles from "./customer.module.css";
import loadingAnim from "../../images/loading.gif";

const Profile = () => {
  const { loading, user } = useAuth0();
  
  if (loading || !user) {
    return (
      <img className="pageLoader" src={loadingAnim} alt="loading"/>
  );
  }

  return (
    <Fragment>
      <img className={styles.userProfilePic} src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.gender}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
  );
};

export default Profile;