import NavBar from "./components/NavBar";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-r from-[#f8f9fb] to-[#eaf2f8]">
      <header className="min-h-screen w-2/5">
        <NavBar />
      </header>
      <main className="min-h-screen w-3/5">
        <Home />
      </main>
    </div>
  );
};

export default App;
