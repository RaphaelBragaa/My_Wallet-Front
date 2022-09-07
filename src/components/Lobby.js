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
             <VscSignOut style={exit}/>
            </Header>
            <Dados>
            </Dados>
            <Container>
                <div>
                <VscDiffAdded style={add}/>
                <h1>Nova entrada</h1>
                </div>
                <div>
                <VscDiffRemoved style={add}/>
                <h1>Nova saída</h1>
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
    height:60vh;
    width:100%;
    background-color:#FFFFFF;
    border-radius:5px;
    margin-bottom:10px;
`
const Container=styled.div`
    display:flex;
    justify-content:space-between;
    
    div{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
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
    }
`
