import React from "react";
import { useState, useRef, useEffect } from "react";

const HomePage = (props) => {
  const { setFile, setRecording } = props;

  // a state for the state of our recording ( inactive or recording)
  const [recStat, setRecStat] = useState("inactive");
  // a state for the audio itseld
  const [audio, setAudio] = useState([]);
  // a state for duration
  //const [duration, setDuration] = useState(0);

  //
  const mediaRecorder = useRef(null);

  // it's to know we ain't recording video
  const inType = "audio/webm";

  async function startRecording() {
    let currStream;

    // get users perm for the audio rec
    try {
      const streamData = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      currStream = streamData;
    } catch (e) {
      console.log(e.message);
      return;
    }

    setRecStat("recording");

    // now we want to make a media recording instance
    const media = new MediaRecorder(currStream, { type: inType });
    // you send the ref of rcorder
    mediaRecorder.current = media;
    // start it
    mediaRecorder.current.start();
    let audioChunk = [];
    // check the data if ok save it
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") {
        return;
      }
      if (event.data.size === 0) {
        return;
      }
      audioChunk.push(event.data);
    };

    // put the audio in it's place
    setAudio(audioChunk);
  }

  async function stopRecording() {
    // change of state
    setRecStat("inactive");

    // stop the recorder
    mediaRecorder.current.stop();
    // if started make an audio blob , clear audio , set duration to zero and send over the recording
    mediaRecorder.current.onstop = () => {
      const audiofile = new Blob(audio, { type: inType });
      setRecording(audiofile);
      setAudio([]);
      //setDuration(0);
    };
  }

  // useEffect(() => {
  //   if (recStat === "inactive") {
  //     return;
  //   }
  //   const interval = setInterval(() => {
  //     setDuration((CURR) => CURR + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // });

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
      <button
        className="flex items-center justify-between text-base gap-4 mx-auto w-72 max-w-full my-4 customBtn duration-200 px-4 py-2 rounded-xl"
        onClick={recStat === "recording" ? stopRecording : startRecording}
      >
        <p>{recStat === "inactive" ? "Record" : "Stop Recording"}</p>
        <i
          className={
            "fa-solid fa-microphone " +
            (recStat === "recording" ? "text-red-500" : "")
          }
        ></i>
      </button>

      <p>
        Or{" "}
        <label className="text-purple-500 hover:text-purple-400 duration-200">
          Upload{" "}
          <input
            className="hidden"
            type="file"
            accept=".mp3,.wave"
            onChange={(e) => setFile(e.target.files[0])}
          ></input>
        </label>
        a mp3 file
      </p>
      <p className="italic p-4 text-slate-400">Free Forever</p>
    </main>
  );
};

export default HomePage;
