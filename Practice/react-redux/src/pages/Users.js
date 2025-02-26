import React from "react";
import { useSelector } from "react-redux";
import { deleteUsers } from "../slices/userSlice";
import { useDispatch } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userInfo.users);
  console.log(users);

  function removeUser(index) {
    dispatch(deleteUsers(index));
  }

  return (
    <div>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              <h1>{user.name}</h1>
              <h2>{user.age}</h2>
              <h2>{user.email}</h2>
              <h2>{user.contact}</h2>
              <button onClick={() => removeUser(index)}>X Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
