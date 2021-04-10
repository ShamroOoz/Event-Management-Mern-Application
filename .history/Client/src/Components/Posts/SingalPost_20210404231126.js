import React from "react";
import {
  TrashIcon,
  DotsHorizontalIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import Moment from "react-moment";

const SingalPost = ({
  UpdateListner,
  DeleteListner,
  post,
  likepostListner,
}) => {
  console.log(post.creator);
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
              {post.title}
            </span>
            <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              {post.message}
            </div>

            <div className="my-4">
              {post.tags.map((tag, index) => (
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
                <img
                  className="w-12 h-12 object-cover rounded-full shadow-xl"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                  alt="avatar"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm tracking-tighter text-black">
                  {post.creator.name}
                </p>
                <p className="text-gray-400">
                  <Moment fromNow>{post.createdAt}</Moment>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center border-t-2 border-blue-700 m-2 justify-between">
            <button
              className="btn-post"
              onClick={() => likepostListner(post._id)}
            >
              <span className="mr-2">
                <ThumbUpIcon className="h-5 w-5 space-x-2" />
              </span>
              <span>{post.likeCount}</span>
            </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingalPost;
