import React from "react";

const Top = () => {
  return (
    <header className="flex justify-between  gap-4 p-4">
      <h1 className="text-lg">
        Whisper
        <span className="font-bold text-pretty text-purple-500">Scribe</span>
      </h1>
      <button className="rounded-lg customBtn px-4 items-center gap-2 py-2 text-purple-400 duration-200">
        New +
      </button>
    </header>
  );
};

export default Top;
