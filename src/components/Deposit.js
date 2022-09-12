import styled from "styled-components"
import { useParams, useNavigate,Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

export default function Deposit({token}){
    const [value,setValue]=useState("")
    const [description,setDescription]=useState("")
    console.log(token)
    
    const {Deposit}=useParams()
    const navigate=useNavigate()

    const config={
        headers:{Authorization:`Bearer ${token}`}
    }

    const body={
        description,
        value,
        isEntry:true
    }
    
        async function Inserir(event){
            event.preventDefault()
            try{
              const promise = await axios.post('http://localhost:5000/moneys',body,config)
              console.log(promise)
                navigate("/Lobby")
            }catch(error){
                alert(error)
            }
        }
  
    return(
        <Main>
            <Header>
             Nova Entrada
            </Header>
            <Logo>
        <form onSubmit={Inserir}>
            <input type='number' onChange={(e)=>setValue(e.target.value)} placeholder='Valor' />
            <input type='text' onChange={(e)=>setDescription(e.target.value)}placeholder='Descrição'/>
           <button type='submit'>Salvar entrada</button>
        </form>
            </Logo>
        
        </Main>
    )
}

const Main=styled.div`
        height:100vh;
        font-family:'Lexend Deca',cursive;
        padding-left:150px;
        padding-right:150px;
        
`
const Header=styled.div`
        display:flex;
        align-items:center;
        justify-content: space-between;
        top:0;
        left:0;
        height:8vh;
        width:100%;
        font-weight:700;
        font-size:30px;
        color:#FFFFFF;
        margin-bottom:12px;
`

const Logo=styled.div`
    display:flex;
     flex-direction:column;
     width:100%;
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
            width:38rem;
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
            width:39rem;
            border:none;
            border-radius:5px;
            height:5.5vh;
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

