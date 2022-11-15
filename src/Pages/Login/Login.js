import { data } from "autoprefixer";
import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);
        fetch(`http://localhost:5001/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // localStorage is the easiest but not the best place to store token
            localStorage.setItem("genius-token", data.token);
            navigate(from, { replace: true });
          })
          .catch((err) => console.error(err));
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
              <h1 className="text-5xl font-bold text-center mb-5">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
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
                  required
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
                  value="login"
                  className="btn btn-primary hover:bg-black"
                />
              </div>
            </form>
            <p className="mx-8">
              New to Genius Car{" "}
              <Link to="/signup" className="text-orange-500 font-bold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
