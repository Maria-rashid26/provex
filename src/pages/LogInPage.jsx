import React, { useState } from "react";

export const LogInPage = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "Maria rashid" && password === "mmmm") {
      onSubmit();
    } else {
      setErrorMessage("Incorrect username or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-auto bg p-8 rounded-lg shadow-xl shadow-gray-300 w-[400px] space-y-4 bg-gray-100/20 border-t border-gray-100 mt-9"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

      <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
        Username
      </label>
      <input
        type="text"
        id="username"
        className="w-full border p-2 rounded "
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="w-full border p-2 rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 "
      >
        Log In
      </button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
};
