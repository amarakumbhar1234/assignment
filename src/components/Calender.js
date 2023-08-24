import React from "react";
import MicIcon from "../icons/mic.png";
import EventImage from "../img/event-img.png";
import commandIcon from "../icons/command-symbol.png";

function Calender() {
  return (
    <div className="m-5  max-w-fit cursor-pointer bg-white rounded-lg inline-block">
      <div className="">
        <div className="px-4 py-2 bg-gray-100 border-b rounded-t-lg flex justify-between items-center">
          <div className="flex justify-center items-center">
            <span className="ml-1 text-sm font-medium text-gray-500 ">
              See my avalibility : today
            </span>
          </div>
          <div>
            <img className="m-1 w-4 h-4" src={MicIcon} alt="mic" />
          </div>
        </div>
        <div className="px-4 py-5">
          <div>
            <title className="text-2xl font-medium block">
              Available until 1 PM
            </title>
          </div>
          <div className="my-5 text-sm text-gray-700">
            <p>Would you like to create an event for</p>
            <p>Coffee with Marisa at 11 AM ?</p>
          </div>
          <div className="my-4">
            <img src={EventImage} alt="map" />
          </div>
          <div className="flex">
            <button className="px-4 py-2 m-1 bg-slate-100 whitespace-nowrap border text-sm rounded-xl">
              Create Event
            </button>
            <button className="px-4 py-2 m-1 bg-slate-100 whitespace-nowrap border text-sm rounded-xl">
              Edit Event
            </button>
            <button className="px-4 py-2 m-1 bg-slate-100 whitespace-nowrap border text-sm rounded-xl">
              Full Calender
            </button>
            <button className="px-4 py-2 m-1 bg-slate-100 whitespace-nowrap border text-sm rounded-xl">
              Dismiss
            </button>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="d-flex items-center">
            <img
              className="m-1 w-3 h-3 inline-block"
              src={commandIcon}
              alt="more actions"
            />
            <span className="ml-1 text-xs text-gray-400">More actions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
