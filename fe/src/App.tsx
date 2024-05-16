// src/App.tsx
import "./App.css";
import SmartPlugControl from "./components/SmartPlugControl";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SmartPlugControl />
      </header>
    </div>
  );
};

export default App;
