import React, { useEffect } from "react";
import "../Styling/Profile.css";
import ProfileIcon from "../assets/profile.png";
import LogoutIcon from "../assets/logout.png";
import cartIcon from "../assets/cart.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogOutUser } from "../Redux/Actions/userActions";
import Dashboard from "../assets/dashboard.png";
import EditIcon from "../assets/edit.png";
import ResetPasswordIcon from "../assets/resetPassword.png";
import Loader from "../components/Loader";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading } = useSelector(
    (state) => state.userData
  );

  const LogOutHandler = () => {
    dispatch(LogOutUser());
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="page-container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-8 col-md-12">
              <div className="card user-card-full">
                <div className="row ">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center ">
                      <div className="m-b-25">
                        <img
                          src={
                            user?.profilepicture && user?.profilepicture?.url
                              ? user.profilepicture.url
                              : ProfileIcon
                          }
                          className="img-radius"
                          alt="ProfileImage"
                        />
                      </div>

                      <h6 className="user-name">{user?.name}</h6>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600 your-profile">
                      Your Profile
                      <Link to={"/profile/update"}>
                        <img
                          src={EditIcon}
                          alt="edit profile"
                          data-tooltip="Update Profile"
                          className="edit-profile"
                        />
                      </Link>
                      <Link to={"/profile/update-password"}>
                        <img
                          src={ResetPasswordIcon}
                          alt="edit profile"
                          data-tooltip="Reset Password"
                          className="edit-profile"
                        />
                      </Link>
                    </h6>

                    <div className="card-block">
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{user?.email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">98979989898</h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        P
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Role</p>
                          <h6 className="text-muted f-w-400">{user?.role}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Account Created On</p>
                          <h6 className="text-muted f-w-400">
                            {String(user?.createdAt).substring(0, 10)}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="profile-button-container">
                      {user?.role === "admin" && (
                        <Link to={"/admin/dashboard"} title="Admin Dashboard">
                          <img
                            src={Dashboard}
                            alt="logout"
                            className="logout-image"
                            data-tooltip="See Dashboard"
                          />
                        </Link>
                      )}
                      <img
                        src={cartIcon}
                        alt="logout"
                        className="logout-image"
                        data-tooltip="View cart"
                        onClick={handleCart}
                        title="Your Cart"
                      />
                      <img
                        src={cartIcon}
                        alt="logout"
                        className="logout-image"
                        data-tooltip="Orders"
                        onClick={() => navigate("/all-orders")}
                        title="Orders"
                      />
                      <img
                        src={LogoutIcon}
                        alt="logout"
                        className="logout-image"
                        onClick={LogOutHandler}
                        data-tooltip="Logout"
                        title="Logout"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
