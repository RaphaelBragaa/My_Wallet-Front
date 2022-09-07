import styled from "styled-components"
import { Link } from "react-router-dom";


export default function Login(){
    return(
        <Formulario>
            <Logo>
        <h1>MyWallet</h1>
        <form>
            <input type='email' placeholder='E-mail'/>
            <input type='password' placeholder='Senha'/>
            <Link to='/Lobby'><button>Entrar</button></Link>
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


