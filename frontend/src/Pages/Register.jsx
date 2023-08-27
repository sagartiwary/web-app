import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const initState = {
  name: "",
  email: "",
  password: "",
};
export const Register = () => {
  const [user, setUser] = useState(initState);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      axios
        .post("https://backend-api-cak8.onrender.com/user/register", user)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Registration Successful");
            navigate("/login");
          } else {
            toast.error("Registration Failed");
          }
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("Invalid Credentials");
    }
    setUser(initState);
  };
  const { name, email, password } = user;
  return (
    <>
      <div className="">
        <h1 className="text-center font-serif text-4xl mt-6 font-bold">
          Sign up
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center max-w-md border shadow-xl rounded-md border-gray-300 m-auto mt-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={name}
            onChange={handleChange}
            className="border-b-2 w-[80%] border-gray-400 px-2 py-2 mt-7 bg-white text-md text-gray-600  my-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            className="mb-3 border-b-2 w-[80%] border-gray-400 px-2 py-2 bg-white text-md text-gray-600 "
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            className="mb-3 border-b-2 w-[80%] border-gray-400 px-2 py-2 bg-white text-md text-gray-600 "
          />
          <p className="text-center">
            Already a member ? <span className="font-bold"><Link to={"/login"}>Log in</Link></span>
          </p>
          <button
            type="submit"
            className="my-8 block mx-auto border border-gray-300 px-14 py-3 bg-black text-white rounded hover:bg-gray-700 duration-150 hover:ease-in-out transition"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};
