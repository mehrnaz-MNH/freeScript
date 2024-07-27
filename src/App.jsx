import { Top, Bottom, HomePage, FileDisplay } from "./components";
import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [recording, setRecording] = useState(null);

  function onReset() {
    setFile(null);
    setRecording(null);
  }

  return (
    <div className="flex flex-col p-4 max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Top />
        {file || recording ? (
          <FileDisplay file={file} recording={recording} onReset={onReset} />
        ) : (
          <HomePage setFile={setFile} setRecording={setRecording} />
        )}
      </section>
      <Bottom />
    </div>
  );
}

export default App;
