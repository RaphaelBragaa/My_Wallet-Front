import styled from "styled-components"
import { useParams, useNavigate,Link } from 'react-router-dom';
import { VscSignOut} from "@react-icons/all-files/vsc/VscSignOut"
import {VscDiffAdded } from "@react-icons/all-files/vsc/VscDiffAdded"
import {VscDiffRemoved } from "@react-icons/all-files/vsc/VscDiffRemoved"

export default function Lobby(){
    const {Lobby}=useParams()
    const exit={ color: "white", fontSize: "1.5em" }
    const add={color: "white", fontSize: "2.5em"}
    return(
        <Main>
            <Header>
               <h1>Lobby</h1>
            <Link to='/'><VscSignOut style={exit}/></Link> 
            </Header>
            <Dados>
                {/* <h2>
                       Não há registros de entrada ou saída 
                </h2> */}
                <Cash><h3>30/11</h3> <h4>Almoço mãe </h4> <h5>39,90</h5></Cash>
                 <Cash><h3>30/11</h3> <h4>Almoço mãe </h4> <h5>39,90</h5></Cash>
                 <Totally><h1>SALDO</h1><h2>13,99</h2></Totally>
            </Dados>
            <Container>
                 
                    <div>
                    <Link to="/Deposit"  style={{ textDecoration: 'none',color:'#FFFFFF'}}>
                    <VscDiffAdded style={add}/>
                    <h1>Nova entrada</h1>
                    </Link>
                    </div>
                    <div> 
                    <Link to="/Out" style={{ textDecoration: 'none',color:'#FFFFFF'}}>
                    <VscDiffRemoved style={add}/>
                    <h1>Nova saída</h1> 
                    </Link>
                    </div>
               
               
            </Container>
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
const Dados=styled.div`
    display:flex;
    justify-content:baseline;
    flex-direction:column;
    //align-items:center;

    padding-top:40px;
    padding-left:20px;
    height:60vh;
    width:100%;
    background-color:#FFFFFF;
    border-radius:5px;
    margin-bottom:10px;
    h2{
        background-color:#FFFFFF;
        text-align:center;
        font-size:25px;
        color:#C2C2C2;
        width:45%;
    }
    
`
const Cash=styled.div`

    display:flex;
    background-color:#FFFFFF;
    font-size:20px;
    margin-bottom:20px;

    h3{
        background-color:#FFFFFF;
        color:#DBDBDB;
        margin-right:20px;
    }
    h4{
        background-color:#FFFFFF;

    }
    h5{
        background-color:#FFFFFF;
        margin-left:35vh;
        color:red;
    }
`

const Container=styled.div`
    display:flex;
    justify-content:space-between;
    
    div{
        display:flex;
       
        height:25vh;
        width:48%;
        background-color:#A328D6;
        padding-left:20px;
        border-radius:8px;

        h1{
            background-color:#A328D6;
            color:#FFFFFF;
            width:10px;
            font-size:25px;
        }
        a{
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            background-color:#A328D6;
            height:100%;
            
        }
    }
`

const Totally=styled.div`
    display:flex;
    background-color:#FFFFFF;
    font-size:20px;
    h1{
        background-color:#FFFFFF;
        font-weight:700;
    }
    h2{

    }
`
