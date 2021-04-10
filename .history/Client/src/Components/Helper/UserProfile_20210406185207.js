import React, { useEffect, useState } from "react";
import SingalPost from "../Posts/SingalPost";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Helper/Spinner";
import { useHistory } from "react-router-dom";
import decode from "jwt-decode";
import { AuthAction } from "../../Actions";

const UserProfile = () => {
  const { authData, loading } = useSelector((state) => state.AuthReducer);
  const [isUser, setisUser] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(  const { authData, loading } = useSelector((state) => state.AuthReducer);
);
  useEffect(() => {
    let data = localStorage.getItem("profile");
    if (data) {
      const decodedToken = decode(
        JSON.parse(localStorage.getItem("profile")).token
      );
      if (decodedToken.exp && decodedToken.exp * 1000 < new Date().getTime()) {
        localStorage.clear();
        history.push("/login");
      } else {
        dispatch(AuthAction.getLoginuser());
        return setisUser(true);
      }
    }
    history.push("/login");
  }, [dispatch, history]);
  if (loading) return <Spinner />;
  return (
    <>
      {isUser && (
        <div className="space-y-8">
          <div className="h-64 w-full bg-white mt-3">
            <div className="flex flex-col justify-center items-center h-full text-blue-700">
              {authData?.user?.avatar ? (
                <img
                  src={authData?.user?.avatar}
                  className="inline-block object-cover w-12 h-12 rounded-full"
                  alt=""
                />
              ) : (
                <span className="w-12 h-12 flex items-center justify-center rounded-full text-white font-bold bg-blue-600">
                  {authData?.user?.name.charAt(0)}
                </span>
              )}
              <h1 className="text-2xl font-semibold">{authData.user.name}</h1>
              <h4 className="text-sm font-semibold">{authData.user.email}</h4>
            </div>
          </div>
          <div className="flex flex-wrap ">
            {authData?.user?.createdposts.map((post) => (
              <SingalPost key={post._id} post={post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
