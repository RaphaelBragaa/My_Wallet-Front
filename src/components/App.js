import GlobalStyle from "./styles/GlobalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Sign from "./Sign-up";
import Lobby from "./Lobby";



function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Login/>}></Route> 
         <Route path='/Sign-up' element={<Sign/>}></Route>
         <Route path='/Lobby' element={<Lobby/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
