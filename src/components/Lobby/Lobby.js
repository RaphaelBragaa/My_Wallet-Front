import styled from "styled-components"
import { useNavigate,Link } from 'react-router-dom';
import { VscSignOut} from "@react-icons/all-files/vsc/VscSignOut"
import {VscDiffAdded } from "@react-icons/all-files/vsc/VscDiffAdded"
import {VscDiffRemoved } from "@react-icons/all-files/vsc/VscDiffRemoved"
import axios from 'axios'
import { useEffect,useState } from "react";
import {useLocation} from 'react-router-dom'
import Cash from "../Cash";
import * as service from "../../Services/wallet"


export default function Lobby({name,token,setName,setToken}){
     const navigate = useNavigate()
     const [totalValue,setTotalValue]=useState(0)
     const userName = JSON.parse(localStorage.getItem("wallet"))?.name;
     const dados = 
         [ {date: '27/08/11',
           description: 'paçoca',
           value: -24,
           isEntry: false},
           {date: '27/08/11',
           description: 'agiota',
           value: 200,
            isEntry: true},
            {date: '27/08/11',
            description: 'agiota',
            value: -200,
            isEntry: false}
             ]
             useEffect(()=>{

                const calcularTotal = () => {
    const totalValores = dados.reduce((sum, user) => sum + user.value, 0);
    setTotalValue(totalValores);
  };
  calcularTotal();
             },[])
                

  
    
    const exit={ color: "white", fontSize: "1.5em" }
    const add={color: "white", fontSize: "2.5em"}
    return(
        <Main>
            <Header>
               <h1>{userName}</h1>
            <Link to='/'><VscSignOut style={exit}/></Link> 
            </Header>
            <Dados>
                {dados.length > 0 ?  
                 (<Caixa>
                  {dados.map((dado)=>{return(<Cash 
                   date={dado.date} 
                   description={dado.description} 
                   value={dado.value} 
                   isEntry={dado.isEntry}
                    />)})}
                  </Caixa> ) :
                     (<h2>
                        Não há registros de entrada ou saída 
                      </h2> )} 
                     <Totally><h1>SALDO</h1><h6 style={{ color: totalValue > 0 ? 'green' : 'red' }}>{totalValue}</h6></Totally> 
            </Dados>  
            <Container>
                    <div>
                    <Link to="/Deposit"  onClick={()=>{navigate("/Deposit",{state:{id:1,name:'sabaoon'}})}}style={{ textDecoration: 'none',color:'#FFFFFF'}}>
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
const Main = styled.div`
    height: 100vh;
    font-family: 'Lexend Deca', cursive;
    padding-left: 150px;
    padding-right: 150px;

    @media (max-width: 767px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    height: 8vh;
    width: 100%;
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;
    margin-bottom: 12px;

    @media (max-width: 767px) {
        font-size: 24px;
    }
`;

const Dados = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 30px;
    padding-left: 20px;
    padding-bottom: 20px;
    height: 60vh;
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    margin-bottom: 10px;

    h2 {
        background-color: #ffffff;
        text-align: center;
        margin: auto;
        font-size: 25px;
        color: #c2c2c2;
        width: 45%;

        @media (max-width: 767px) {
            width: 100%;
        }
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        height: 25vh;
        width: 48%;
        background-color: #a328d6;
        padding-left: 20px;
        border-radius: 8px;

        h1 {
            background-color: #a328d6;
            color: #ffffff;
            width: 10px;
            font-size: 25px;
        }

        a {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            background-color: #a328d6;
            height: 100%;
        }
    }

    @media (max-width: 767px) {
        flex-wrap: wrap;

        div {
            width: 45%;
            margin-bottom: 20px;
        }
    }
`;

const Totally = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    font-size: 20px;
    z-index: 1;

    h1 {
        background-color: #ffffff;
        font-weight: 700;
    }

    h6 {
        margin-right: 42px;
        background-color: #ffffff;
    }
`;

const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #ffffff;
`;