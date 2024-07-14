import { Top, Bottom, HomePage } from "./components";

function App() {
  return (
    <div className="flex flex-col p-4 max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Top />
        <HomePage />
      </section>
      <Bottom />
    </div>
  );
}

export default App;
