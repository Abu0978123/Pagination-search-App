import "./App.css";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
// import { useContext } from 'react'
import { useGlobalContext } from "./context/Context";

function App() {
  return (
    <div className="App">
      {/* <h1>welcome to my sit</h1> */}
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
}

export default App;
