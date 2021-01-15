import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      {/* main body */}
      {/* api call to get player info */}
      {/* being able to CRUD players to "your roster" */}
    </div>
  );
}

export default App;
