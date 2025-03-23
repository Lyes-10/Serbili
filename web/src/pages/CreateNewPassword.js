import React, { useState } from "react";
import logo from "../assets/icons/logo2.jpg";
import { useNavigate } from "react-router-dom";

function CreateNewCode(props) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError(
        "Password must be at least 8 characters long, including letters and numbers"
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords must match");
      return;
    }
    setError("");
    console.log({ password, confirmPassword });
    navigate("/login");
  };

  return (
    <div className="flex md:items-center py-16 md:py-0 justify-center h-screen px-[10px] sm:px-[1vw] md:px-[4vw] lg:px-[6vw] xl:px-[10vw] md:bg-white bg-[#FF6F00]">
      <div className="lg:py-10 flex lg:justify-between w-full md:justify-center md:items-center items-start lg:mx-20 mx:0 ">
        <div className="hidden lg:block text-[#727272] text">
          <h3 className="font-bold  mb-2">Important Information</h3>
          <p className="mb-14">
            Please <span className="font-bold">read</span> the information below
            and then <br /> kindly <span className="font-bold">share</span> the
            requested information.
          </p>
          <ul className="list-disc ml-5">
            <li>Do not reveal your password to anybody</li>
            <li>Do not reuse passwords</li>
            <li>Use Alphanumeric passwords</li>
          </ul>
        </div>
        <div className="bg-[#FF6F00] lg:w-1/2 w-full px-2 md:px-20 md:py-20 py-4 lg:mx-0 mx-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl lg:text-4xl font-bold text-white">
              Create New <br /> Password
            </h3>
            <img
              src={logo}
              alt=""
              className="xl:w-[90px] w-[70px] lg:w-[75px]"
            />
          </div>
          <p className="text-white text-[17px]">
            Type your new strong password:
          </p>
          <ul className="list-disc ml-6 text-white">
            <li>One capital letter & one small at least</li>
            <li>One special character</li>
            <li>Minimum 8 digits long</li>
          </ul>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="password"
              className="block text-white font-semibold mb-1 mt-3"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full py-2 rounded-xl border-[1px] border-black focus:outline-none px-2 md:mb-1 mb-1"
            />
            <label
              htmlFor="confirmPassword"
              className="block text-white font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full py-2 rounded-xl border-[1px] border-black focus:outline-none px-2 md:mb-1 mb-1"
            />
            {error && <div className="text-red-900">{error}</div>}
            <button
              type="submit"
              className="py-3 px-5 mt-6 bg-white text-[#FF6F00] font-medium rounded-md float-right"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNewCode;
