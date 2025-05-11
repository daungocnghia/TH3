import { useEffect, useState } from "react";
import { fetchModel } from "../../lib/fetchModelData";

function UserDetail({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchModel(`/user/${userId}`).then(setUser);
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>{user.first_name} {user.last_name}</h2>
      <p>Location: {user.location}</p>
      <p>Occupation: {user.occupation}</p>
      <p>About: {user.description}</p>
    </div>
  );
}

export default UserDetail;
