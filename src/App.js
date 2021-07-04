// import logo from './logo.svg';
// import './App.css';
import Title from "./Comps/Title/Title";
// import Button from "./Comps/Button/Button";
import Statistics from "./Comps/Statistics/Statistics";

// import Counter from "./Comps/Counter/Counter"

function App() {
  return (
    <div className="App">
      <Title text="Please leave feedback" />

      <Statistics></Statistics>

      {/* <Counter initValue={0}/> */}
    </div>
  );
}

export default App;
