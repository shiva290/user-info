import React from "react";
import { useStyles } from "./style";

const UserComponent = ({ user, handleRefresh }) => {
  return (
    <div style={useStyles.userInfoContainer}>
      <div style={{ marginBottom: "8px" }}>
        <span style={useStyles.userInfoText}>Name: </span>
        <span>{`${user.name?.first ?? ""} ${user.name?.last ?? ""}`}</span>
      </div>
      <div>
        <span style={useStyles.userInfoText}>Email: </span>
        <span>{user.email ?? ""}</span>
      </div>
      <div>
        <button
          style={{
            backgroundColor: "grey",
            color: "white",
            borderRadius: "5px",
            padding: "5px",
            marginTop: "10px",
          }}
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default UserComponent;
