import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/loader";
import Error from "./components/errorPlaceholder";
import UserComponent from "./components/user";

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    featchUser();
  }, []);

  const featchUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://randomuser.me/api");
      const { results } = await response.data;
      const { name, email } = results[0];
      setUser({ name, email });
      localStorage.setItem(
        "name",
        JSON.stringify(`${name.title} ${name.first} ${name.last}`)
      );
      localStorage.setItem("email", JSON.stringify(email));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "16px", backgroundColor: "#f7f7f7" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "16px" }}>User Info</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        user && <UserComponent user={user} handleRefresh={featchUser} />
      )}
    </div>
  );
};

export default App;
