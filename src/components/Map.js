import React from "react";
import LocationIcon from "../icons/location.png";
import MicIcon from "../icons/mic.png";
import MapImage from "../img/map-img.png";
import CommandIcon from "../icons/command-symbol.png";

function Map() {
  return (
    <div>
      <div className="m-5  max-w-fit cursor-pointer bg-white rounded-lg inline-block">
        <div className="">
          <div className="px-4 py-2 bg-gray-100 border-b rounded-t-lg flex justify-between items-center">
            <div className="flex justify-center items-center">
              <img className="m-1 w-4 h-4" src={LocationIcon} alt="mail" />
              <span className="ml-1 text-sm font-medium text-gray-500 ">
                Philz Coffee
              </span>
              <span className="ml-2 text-xs text-gray-400">Location</span>
            </div>
            <div>
              <img className="m-1 w-4 h-4" src={MicIcon} alt="mic" />
            </div>
          </div>
          <div>
            <img src={MapImage} alt="map" />
          </div>
          <div className="px-4 py-5">
            <div className="my-2">
              <h2 className="text-2xl font-medium">Philz Coffee</h2>
              <span className="my-2 text-gray-700">
                Custom-blended java in casual
              </span>
            </div>
            <p className="text-sm text-gray-500">
              2006 Stevens Creek Blvd <br />
              Cupertino, CA 95014
            </p>
            <div className="flex py-4">
              <button className="px-4 py-2 m-1 bg-slate-100 whitespace-nowrap border text-sm rounded-xl">
                Get direction
              </button>
              <button className="px-4 py-2 m-1 bg-slate-100 whitespace-nowrap border text-sm rounded-xl">
                See details
              </button>
              <button className="px-4 py-2 m-1 bg-slate-100 whitespace-nowrap border text-sm rounded-xl">
                Find more cafes nearby
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
    </div>
  );
}

export default Map;
