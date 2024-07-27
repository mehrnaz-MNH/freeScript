import { Top, Bottom, HomePage } from "./components";
import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [recording, setRecoding] = useState(null);

  return (
    <div className="flex flex-col p-4 max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Top />
        {file || recording ? <FileDisplay /> : <HomePage />}
      </section>
      <Bottom />
    </div>
  );
}

export default App;
