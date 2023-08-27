import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../context/authContext";
import { toast } from "react-toastify";
const initState = {
  email: "",
  password: "",
};
export const Login = () => {
  const [user, setUser] = useState(initState);
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsAuth } = useContext(auth);
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
    if (email && password) {
      axios
        .post("https://backend-api-cak8.onrender.com/user/login", user)
        .then((res) => {
          if (res.status === 200) {
            setIsAuth(true);
            navigate("/");
            toast.success(`${res.data.msg}`);
          } else {
            setIsAuth(false);
            toast.error("Login Failed");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Invalid Credentials");
    }
    setUser(initState);
  };

  // location.state, { replace: true };
  const { email, password } = user;
  return (
    <>
      <div className="">
        <h1 className="text-center font-serif text-4xl mt-6 font-bold">
          Sign in
        </h1>
        <div className="flex flex-row justify-center  items-center sm:flex-col md:flex-row mt-10 max-w-8xl space-x-4">
          <div>
            <img
              className="md:w-full "
              src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="author"
            />
          </div>
          <div className="">
            {" "}
            <form
              onSubmit={handleSubmit}
              // className="flex flex-col items-center border shadow-xl rounded-md border-gray-300 "
              className=""
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                className="mb-3 border-b-2 w-[80%] border-gray-400 px-2 py-6 bg-white text-md text-gray-600 "
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
                className="mb-3 border-b-2 w-[80%] border-gray-400 px-2 py-6 bg-white text-md text-gray-600 "
              />
              <p className="text-center">
                Don't have an account?{" "}
                <span className="font-bold">
                  <Link to={"/register"}>Sign up</Link>
                </span>
              </p>
              <button
                type="submit"
                className="my-8 block mx-auto border border-gray-300 px-14 py-3 bg-black text-white rounded hover:bg-gray-700 duration-150 hover:ease-in-out transition"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
