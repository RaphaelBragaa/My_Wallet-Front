import GlobalStyle from "./styles/GlobalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Sign from "./Sign-up";
import Lobby from "./Lobby";
import Deposit from "./Deposit";
import Out from "./Out";
import { useState} from 'react';



function App() {
  const [name,setName]=useState("")
  const[token,setToken]=useState("")
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Login setName={setName} setToken={setToken}/>}></Route> 
         <Route path='/Sign-up' element={<Sign />}></Route>
         <Route path='/Lobby' element={<Lobby name={name} token={token} setName={setName} setToken={setToken}/>}></Route>
         <Route path='/Out' element={<Out/>}></Route>
         <Route path='/Deposit' element={<Deposit/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
