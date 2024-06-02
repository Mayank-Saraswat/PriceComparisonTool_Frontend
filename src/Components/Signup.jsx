import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault(); // Prevent form from resetting
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      setTimeout(() => {
        setPasswordError("");
      }, 5000); // Clear error message after 5 seconds
      return;
    }
    axios
      .post("http://127.0.0.1:5000/signup", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        alert(
          "Account created successfully. Please login with your credentials."
        );
        navigate("/signin");
      })
      .catch(function (error) {
        console.log(error, "error");
        if (error.response.status === 401) {
          alert("Invalid credentials");
        }
      });
  };

  return (
    <>
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold md:text-2xl">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={registerUser}>
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600"
                    required
                  />
                  {passwordError && (
                    <p className="text-red-600">{passwordError}</p>
                  )}
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="terms">
                      I accept the{" "}
                      <a
                        className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <p className="text-sm">
                  Already have an account?{" "}
                  <Link to="/signin">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
                    >
                      Login here
                    </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
