import GlobalStyle from "./GlobalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Sign from "./Sign-up";



function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Login/>}></Route> 
         <Route path='/Sign-up' element={<Sign/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
