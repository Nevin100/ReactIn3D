import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";

const App = () => {
  return (
    <main className="">
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src={`/gradient.png`}
        alt="Gradient"
      />

      <div className="h-0 w-[40rem] aboslute top-[20%] right-[-15%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

      <Header />
      <Hero />
    </main>
  );
};

export default App;
