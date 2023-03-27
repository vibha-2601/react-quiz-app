import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return ( 
  <BrowserRouter>
  <div className="App" style={{backgroundImage: "url(./ques1.png)"}}>
    <Header />
    
  </div>
  <Footer />
  </BrowserRouter>
  
  );
}

export default App;
