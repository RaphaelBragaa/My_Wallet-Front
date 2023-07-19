import { useParams, useNavigate,Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'
import { useState} from 'react';
import * as service from "../../Services/wallet";


export default function Signin(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nome,setNome]=useState("")

    const navigate = useNavigate()

    async function Cadastro(event){
        event.preventDefault()
        const body = {
            name:nome,
            email,
            password,
            confirmPassword
        }

        console.log(body)
            try{
                await service.signUp(body)
                navigate('/')
            }catch(error){
                console.log(error)
                alert('Senhas não coincidem !')
            }
        }

return (
        <>
        <Formulario>
            <Logo>
        <h1>MyWallet</h1>
        <form onSubmit={Cadastro}>
            <input type='text' required value={nome} onChange={(e)=>setNome(e.target.value)}placeholder='Nome'/>
            <input type='email' required value={email} onChange={(e)=>setEmail((e.target.value))}placeholder='E-mail'/>
            <input type='password' required value={password} onChange={(e)=>setPassword((e.target.value))} placeholder='Senha'/>
            <input type='password' required value={confirmPassword} onChange={(e)=>setConfirmPassword((e.target.value))} placeholder='Confirme a Senha'/>
            <button type='submit'>Cadastrar</button>
            <Link to="/"><h2>Já tem uma conta? Entre agora!</h2></Link>
        </form>
            </Logo>
        </Formulario>
        </>
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
input:autofill{
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