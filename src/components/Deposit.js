import styled from "styled-components"
import { useParams, useNavigate,Link } from 'react-router-dom';

export default function Deposit(){
    const {Deposit}=useParams()
    return(
        <Main>
            <Header>
             Nova Entrada
            </Header>
            <Logo>
        <form>
            <input type='number' placeholder='Valor'/>
            <input type='text' placeholder='Descrição'/>
            <Link to='/Lobby'><button>Salvar entrada</button></Link>
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

