import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <Lugin>
            <Logo>
        <h1>MyWallet</h1>
        <form>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='senha'/>
            <button>Entrar</button>
            <h2>Primeira vez? Cadastre-se!</h2>
        </form>
            </Logo>
        </Lugin>
    )
}


 const Lugin=styled.div`
 
    display:flex;
     width:100%;

     background-color:#8C11BE;
     margin: auto;
     `

     const Logo=styled.div`
     display:flex;
     flex-direction:column;
     width:50%;
     margin:auto;


     justify-content:center;
     align-items:center;
     

     width:50%;
         h1{
                 color:#FFFFFF;
                 font-size:50px;
                 font-family: 'Black Ops One', cursive;
             }
        
        input{
            width:20rem;
            margin-bottom:10px;
        }
        input::placeholder{
            margin-left:105px;
            font-size:18px;
            color:#DBDBDB;
            }

        form{
            display:flex;
            flex-direction:column;
          
        }
            `


