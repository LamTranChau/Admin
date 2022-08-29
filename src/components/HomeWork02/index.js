import { useState } from "react";
import User from "./User";

const HomeWork02 = () => {
  const [users, setUsers] = useState([]);
  const onAdd = () => {
    setUsers([
      ...users,
      { id: Math.random(), name: "chau", phone: "12" },
    ]);
  }
  const onDelete = (id) => {
    const newUsers = users.filter((a) => {
      return a.id !== id;
    });
    setUsers(newUsers);
  }
  return (
    <div>
      <button
        onClick={onAdd}
      >
        Add
      </button>
      

      {users.map((user) => {
        return (
          <User key={user.id} data={user} onDelete={onDelete} />
        );
      })}
    </div>
  );
};

export default HomeWork02;
