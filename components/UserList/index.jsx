import { useEffect, useState } from "react";
import { fetchModel } from "../../lib/fetchModelData";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchModel("/user/list").then(setUsers);
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.first_name} {user.last_name}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
