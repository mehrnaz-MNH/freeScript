import React from "react";

const HomePage = () => {
  return (
    <main className="flex-1 flex flex-col p-4 justify-center items-center pb-20">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold p-4">
        Whisper
        <span className=" text-purple-500">Scribe</span>
      </h1>
      <h3 className="text-base md:text-lg p-4 font-bold ">
        Record <span className="text-purple-400">&rarr;</span> Transcribe{" "}
        <span className="text-purple-400">&rarr;</span> Translate
      </h3>
      <button className="flex items-center justify-between text-base gap-4 mx-auto w-72 max-w-full my-4 customBtn duration-200 px-4 py-2 rounded-xl">
        <p>Record</p>
        <i className="fa-solid fa-microphone"></i>
      </button>

      <p>
        Or{" "}
        <label className="text-purple-500 hover:text-purple-400 duration-200">
          Upload{" "}
          <input className="hidden" type="file" accept=".mp3,.wave"></input>
        </label>
        a mp3 file
      </p>
      <p className="italic p-4 text-slate-400">Free Forever</p>
    </main>
  );
};

export default HomePage;
