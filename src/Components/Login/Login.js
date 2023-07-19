import styled from "styled-components"
import { Link,useNavigate } from "react-router-dom";
import { useState} from 'react';
import * as service from "../../Services/wallet";



export default function Login(){

    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    async function Login(event){
        event.preventDefault()
        const body={
            email,
            password,
        }
        try{
            const promise= await service.signIn(body);
            localStorage.setItem(
            "wallet",
            JSON.stringify({token: promise.data.token, name: promise.data.name})
           );
           navigate("/Lobby");

        }catch(error){
            console.log(error)
            alert("Dados Incorretos")
        }
    }
    return(
        <Formulario>
            <Logo>
        <h1>MyWallet</h1>
        <form onSubmit={Login}>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='E-mail'/>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Senha'/>
           <button type='submit'>Entrar</button>
            <Link to="/Sign-up"><h2>Primeira vez? Cadastre-se!</h2></Link>
        </form>
            </Logo>
        </Formulario>
    )
}


 const Formulario=styled.div`
        display:flex;
        height:100vh;
     `
    
     const Logo=styled.div`
    display:flex;
     flex-direction:column;
     width:50%;
     margin:auto;
    
    justify-content:center;
     align-items:center;
     a{
        text-decoration:none;
     }
         h1{
                 color:#FFFFFF;
                 font-size:40px;
                 margin-bottom:15px;
                 font-family: 'Black Ops One', cursive;
             }
        
        input{
            width:23rem;
            margin-bottom:15px;
            border-radius:5px;
            border:none;
            height:5vh;
            padding-left:15px;


        }
        input::placeholder{
            margin-left:105px;
            font-size:19px;
            color:#404040;
            font-family:'Lexend Deca',cursive;
            }

        form{
            display:flex;
            flex-direction:column;
          
        }
        button{
            width:24rem;
            border:none;
            border-radius:5px;
            height:4vh;
            background-color:#A328D6;
            font-weight:700;
            font-size:20px;
            color:#FFFFFF;
            margin-bottom:60px;
            font-family:'Lexend Deca',cursive;
            :active{
                background-color:#FFFFFF;
                color:#A328D6;
                    }
            
        }
       
        h2{
            text-align:center;
            font-weight:700;
            font-size:15px;
            color:#FFFFFF;
            font-family:'Lexend Deca',cursive;
        }
        `


