import NavBar from "./components/NavBar";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex min-h-screen w-full flex-col-reverse bg-gradient-to-r from-[#f8f9fb] to-[#eaf2f8] md:flex-row">
      <header className="min-h-screen w-full md:w-1/4">
        <NavBar />
      </header>
      <main className="md:block md:min-h-screen lg:w-3/4">
        <Home />
      </main>
    </div>
  );
};

export default App;
