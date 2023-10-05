import React, { useState } from "react";
import "../Styling/Login.css";
import RegisterImage from "../assets/register.jpg";
import { NavLink } from "react-router-dom";
import { userRegister } from "../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import ProfileIcon from "../assets/profile.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const userRegisterData = useSelector((state) => state.userData);
  const { isAuthenticated } = userRegisterData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = newUser;
  const [avatar, setAvatar] = useState(ProfileIcon);
  const [avatarPreview, setAvatarPreview] = useState(ProfileIcon);

  const registerSubmit = (e) => {
    e.preventDefault();

    const userForm = new FormData();
    userForm.set("name", name);
    userForm.set("email", email);
    userForm.set("password", password);
    userForm.set("avatar", avatar);
    dispatch(userRegister(userForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
  };

  if (isAuthenticated) {
    navigate("/");
  }

  return (
    <div className="container p-5">
      <div className="row d-flex justify-content-start align-items-center login-container">
        <div className="col-lg-5 col-10">
          <div className="pb-5 mt-5">
            <img src={RegisterImage} alt="" className="login-image" />
          </div>
        </div>
        <div className="col-lg-4 offset-lg-2 col-md-6 offset-md-3">
          <div className="mt-1 mt-md-5">
            <h1 className="login-system-register">Register a New Account</h1>
            <form className="pt-4" onSubmit={registerSubmit}>
              <div className="d-flex flex-column pb-3">
                <label for="email" className="login-text">
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={registerDataChange}
                  placeholder="Enter User Name"
                  className="login-input"
                />
              </div>

              <div className="d-flex flex-column pb-3">
                <label for="email" className="login-text">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={registerDataChange}
                  placeholder="Enter your Email Address"
                  className="login-input"
                />
              </div>
              <div className="d-flex flex-column pb-3">
                <label for="password" className="login-text">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={registerDataChange}
                  className="login-input"
                  placeholder="Enter your password"
                />
              </div>

              <div className="d-flex flex-column pb-3">
                <label for="password" className="login-text">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="login-input"
                  placeholder="Enter your Confirm password"
                />
              </div>

              <div className="d-flex flex-column pb-3">
                <label for="avatar" className="login-text">
                  Profile Image
                </label>
                <div className="avatar-preview-container">
                  <img
                    src={avatarPreview}
                    alt="preview"
                    className="avatar-preview"
                    data-tooltip="Default Image"
                  />
                  <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    className="avatar-input"
                    onChange={registerDataChange}
                    accept="image/*"
                  />
                </div>
              </div>

              <button className="login-button mt-4">
                <span>Register</span>
              </button>

              <div className="register mt-5">
                <p>
                  Already have an Account?
                  <NavLink to="/login" className="register-account">
                    {" "}
                    Login to your existing Account
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
