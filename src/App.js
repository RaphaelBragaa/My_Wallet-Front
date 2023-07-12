import GlobalStyle from "./components/styles/GlobalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Sign from "./components/SignUp/SignUp";
import Lobby from "./components/Lobby/Lobby";
import Deposit from "./components/Deposit";
import Out from "./components/Out";
import { useState} from 'react';



export default function App() {
  const [name,setName]=useState("")
  const[token,setToken]=useState("")
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
         {/* <Route path='/' element={<Login setName={setName} setToken={setToken}/>}></Route> 
         <Route path='/Sign-up' element={<Sign />}></Route> */}
         <Route path='/Lobby' element={<Lobby name={name} token={token} setName={setName} setToken={setToken}/>}></Route>
         <Route path='/Out' element={<Out token={token}/>}></Route>
         <Route path='/Deposit' element={<Deposit token={token}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

