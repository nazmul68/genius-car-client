import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";

const SingUp = () => {
  const { user, createUser } = useContext(authContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="hero my-20">
        <div className="hero-content grid md:grid-cols-2 gap-10 ">
          <div className="text-center lg:text-left  ">
            <img src={img} alt="login " className="w-4/5 mx-auto" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100 py-10 ">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-5xl font-bold text-center mb-5">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary hover:bg-black"
                />
              </div>
            </form>
            <p className="mx-8">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-500 font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
