import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Cardstwo from "./components/Cardstwo";


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []); 

  return (
    <div className="App">
     <Navbar />
     <Cards />
     <Cardstwo />
   
     
    
    </div>
  );
}

export default App;