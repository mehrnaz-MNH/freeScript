import React from "react";

const FileDisplay = (props) => {
  const { file, recording, onReset } = props;
  console.log(recording);
  return (
    <main className="flex-1 flex flex-col p-4 justify-center pb-20  text-center w-fit w-max-full mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold p-4">
        Your
        <span className=" text-purple-500">File</span>
      </h1>
      <div className="text-left  flex flex-col my-4">
        <p className="font-semibold">Name</p>
        <p className="font-light text-slate-600">
          {file ? file.name : "custom audio "}
        </p>
      </div>
      <div className="flex justify-between items-center gap-20 pt-4">
        <button
          className="text-gray-500 hover:text-purple-500 duration-200"
          onClick={onReset}
        >
          Reset
        </button>
        <button className="customBtn px-3 rounded-md py-1">Transcribe</button>
      </div>
    </main>
  );
};

export default FileDisplay;
