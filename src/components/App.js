import GlobalStyle from "./Styles/GlobalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Sign from "./SignUp/SignUp";
import Lobby from "./Lobby/Lobby";
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
         <Route path='/Out' element={<Out token={token}/>}></Route>
         <Route path='/Deposit' element={<Deposit token={token}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
