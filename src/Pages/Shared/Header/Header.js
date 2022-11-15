import React from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log(`signout successful ${user?.email}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const menuItems = (
    <>
      <li className="font-semibold mx-2">
        <Link className="btn btn-ghost normal-case" to="/home">
          Home
        </Link>
      </li>

      {user?.email ? (
        <>
          <li className="font-semibold mx-2">
            <Link className="btn btn-ghost normal-case" to="/orders">
              Orders
            </Link>
          </li>
          <li className="font-semibold mx-2">
            <button
              onClick={handleLogout}
              className="btn btn-ghost normal-case"
            >
              Log out
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="font-semibold mx-2">
            <Link className="btn btn-ghost normal-case" to="/login">
              Login
            </Link>
          </li>
          <li className="font-semibold mx-2">
            <Link className="btn btn-ghost normal-case" to="/signup">
              Sign up
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar h-24 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link className="normal-case text-xl mx-4">
            <img className=" h-8 md:h-12" src={logo} alt="logo  " />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <button
            className=" mr-5 font-bold bg-warning px-3 py-2 rounded hover:bg-black"
            style={{ color: "#ffff" }}
          >
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
