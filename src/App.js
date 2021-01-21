import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Team />
      
      {/* make each team card onclick that brings all the players from that team */}
      {/* have add button for each player to users team */}
      {/* when added to users team, have delete feature */}
      {/* add DB to CRUD players from team */}
    </div>
  );
}

export default App;
