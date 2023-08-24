import React from "react";
import MailIcon from "../icons/mail.png";
import MicIcon from "../icons/mic.png";
import CommandIcon from "../icons/command-symbol.png";

const Mail = () => {
  return (
    <div className="m-5 min-w-[420px] cursor-pointer bg-white rounded-lg inline-block">
      <div className="">
        <div className="px-4 py-2 bg-gray-100 border-b rounded-t-lg flex justify-between items-center">
          <div className="flex justify-center items-center">
            <img className="m-1 w-4 h-4" src={MailIcon} alt="mail" />
            <span className="ml-1 text-sm font-medium text-gray-500 ">
              Coffee?
            </span>
            <span className="ml-2 text-xs text-gray-400">
              Mail from Marisa Lu
            </span>
          </div>
          <div>
            <img className="m-1 w-4 h-4" src={MicIcon} alt="mic" />
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="flex justify-between items-start">
            <h2 className="text-xl">Marisa Lu</h2>
            <span className="text-xs text-gray-400">Just Now</span>
          </div>
          <div>
            <title className="text-2xl font-medium block">Coffee?</title>
          </div>
          <div className="my-5 text-sm text-gray-700">
            <p className="my-4">Hello Jason,</p>
            <p>
              Was wondaring if you'd be intersted in meeting my team at Philz
              Coffee at 11AM today. No pressure if can't make it, although I
              think you guys would really get along!
            </p>
            <p className="my-4">Marisa</p>
            <hr />
          </div>
          <div className="flex">
            <button className="px-4 py-2 m-1 bg-slate-100 border text-sm rounded-xl">
              Reply
            </button>
            <button className="px-4 py-2 m-1 bg-slate-100 border text-sm rounded-xl">
              Forward
            </button>
            <button className="px-4 py-2 m-1 bg-slate-100 border text-sm rounded-xl">
              Delete
            </button>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="d-flex items-center">
            <img
              className="m-1 w-3 h-3 inline-block"
              src={CommandIcon}
              alt="more actions"
            />
            <span className="ml-1 text-xs text-gray-400">More actions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
