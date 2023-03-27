import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return ( 
  <BrowserRouter>
  <div className="App" style={{backgroundImage: "url(./ques1.png)"}}>
    <Header />
    
  </div>
  </BrowserRouter>
  
  );
}

export default App;
