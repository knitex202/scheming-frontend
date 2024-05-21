import React from "react";
import designer from "../Assets/graphic-designer.png"
import twitch from "../Assets/twitchLogo.png"
import discord from "../Assets/discordLogo.png"
import youtube from "../Assets/youtubeLogo.png"
import facebook from "../Assets/facebookgLogo.png"
import Card from "../Components/Card";


function Landing() {
  return (
    <div className="flex flex-col w-screen bg-gradient-to-b from-gray-900 to-indigo-950">
      <div className="mt-14 mx-24 flex items-center justify-evenly ">
        <div>
        <p className="w-96 text-white text-5xl font-bold font-poppins">Upgrade your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500 ">Content Today</span></p>
        <button className="h-14 w-48 mt-4 text-2xl font-bold text-white rounded-xl bg-red-700 hover:bg-red-900">Browse Now</button>
        </div>
        <img src={designer} className="w-96 " />
      </div>
      <div className="flex flex-col py-4 w-screen h-48 items-center bg-indigo-900">
        <p className="text-white font-poppins font-semibold text-4xl">Works Anywhere</p>
        <div className="flex w-screen mt-16 justify-evenly ">
          <img className="h-4 sm:h-6 md:h-8" src={twitch} />
          <img className="h-4 sm:h-6 md:h-8" src={discord} />
          <img className="h-4 sm:h-6 md:h-8" src={youtube} />
          <img className="h-4 sm:h-6 md:h-8" src={facebook} />
        </div>
      </div>
      <div className="flex flex-col m-14">
        <p className="mb-8 text-white font-poppins font-bold text-4xl">New Collection</p>
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        <Card/>
        </div>
      </div>
    </div>
  );
}

export default Landing;
