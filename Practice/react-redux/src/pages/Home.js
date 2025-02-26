import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  function handleFormInput(event) {
    const { name, value } = event.target;
    setFormInput(() => {
      return {
        ...formInput,
        [name]: value,
      };
    });
  }

  const addUser = (e) => {
    e.preventDefault();
    console.log(formInput);
    dispatch(setUsers(formInput));
  };

  return (
    <div>
      <form>
        <label>Name</label>
        <br />
        <input
          name="name"
          type="text"
          value={formInput.name}
          onChange={handleFormInput}
        />
        <br />
        <label>Age</label>
        <br />
        <input
          name="age"
          type="text"
          value={formInput.age}
          onChange={handleFormInput}
        />
        <br />
        <label>email</label>
        <br />
        <input
          name="email"
          type="text"
          value={formInput.email}
          onChange={handleFormInput}
        />
        <br />
        <label>Contact</label>
        <br />
        <input
          name="contact"
          type="number"
          value={formInput.contact}
          onChange={handleFormInput}
        />
        <br />
        <button type="submit" onClick={addUser}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Home;
