import React from "react";
import {
  TrashIcon,
  DotsHorizontalIcon,
  ThumbUpIcon,
  ThumbDownIcon,
} from "@heroicons/react/outline";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { PostAction } from "../../Actions";

const SingalPost = ({ UpdateListner, post }) => {
  const { creator } = post;
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.AuthReducer);
  //listner

  const DeleteListner = (id) => {
    dispatch(PostAction.removePost(id));
  };
  const likepostListner = (id) => {
    dispatch(PostAction.likePost(id));
  };
  const Likes = () => {
    //
    if (post.likeCount.length > 0) {
      return post.likeCount.find((like) => like === authData?.user?._id) ? (
        <>
          <ThumbUpIcon className="h-5 w-5 space-x-2" />
          &nbsp;
          {post.likeCount.length > 2
            ? `You and ${post.likeCount.length - 1} others`
            : `${post.likeCount.length} like${
                post.likeCount.length > 1 ? "s" : ""
              }`}
        </>
      ) : (
        <>
          <ThumbDownIcon className="h-5 w-5 space-x-2" />
          &nbsp;{post.likeCount.length}{" "}
          {post.likeCount.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbDownIcon className="h-5 w-5 space-x-2" />
        &nbsp;Like
      </>
    );
  };

  return (
    <div className="w-full md:w-1/2">
      <div className=" md:mx-2 mb-4 shadow-lg">
        <div className="bg-white rounded-lg ">
          <img
            className="h-56 w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80"
            alt=""
          />
          <div className="p-4 pb-3 max-h-screen">
            <span className="block text-blue-700 font-semibold mb-2 text-2xl md:text-base lg:text-lg">
              {post?.title}
            </span>
            <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              {post?.message}
            </div>

            <div className="my-4">
              {post?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center">
              <div>
                {creator?.avatar ? (
                  <img
                    className="w-12 h-12 object-cover rounded-full shadow-xl"
                    src={creator.avatar}
                    alt="avatar"
                  />
                ) : (
                  <span className="w-12 h-12 flex items-center uppercase justify-center rounded-full text-white font-bold bg-blue-600">
                    {creator?.name?.charAt(0)}
                  </span>
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm tracking-tighter text-black">
                  {creator?.name}
                </p>
                <p className="text-gray-400">
                  <Moment fromNow>{post.createdAt}</Moment>
                </p>
              </div>
            </div>
          </div>
          {authData && (
            <div className="flex items-center border-t-2 border-blue-700 m-2 justify-between">
              <button
                className="btn-post"
                onClick={() => likepostListner(post._id)}
              >
                <Likes />
              </button>
              {authData?.user?._id === post?.creator?._id && (
                <>
                  <button
                    className="btn-post"
                    onClick={() => DeleteListner(post._id)}
                  >
                    <span className="mr-2">
                      <TrashIcon className="h-5 w-5" />
                    </span>
                  </button>
                  <button
                    className="btn-post"
                    onClick={() => UpdateListner(post._id)}
                  >
                    <span className="mr-2">
                      <DotsHorizontalIcon className="h-5 w-5" />
                    </span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingalPost;
