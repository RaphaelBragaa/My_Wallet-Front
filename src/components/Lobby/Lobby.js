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
    // const[dados,setDados]=useState([])
     const [totalValue,setTotalValue]=useState(0)
    
    const nameUser = JSON.parse(localStorage.getItem("wallet"))?.name;
    const dados = 
        [ {date: '27/08/11',
          description: 'paçoca',
          value: -24,
          isEntry: false},
          {date: '27/08/11',
          description: 'agiota',
          value: 200,
           isEntry: true}
        //   {date: '27/08/11',
        //   description: 'agiota',
        //   value: -200,
        //   isEntry: false}
            ]
            const totalValores = dados.reduce((sum, user) => sum + user.value, 0);
            setTotalValue(totalValue + totalValores)

    // useEffect((dados) => {
    //    async function sumValues(dados){
    //     dados.forEach( dado => {
    //         setTotalValue(totalValue += dado.value)
    //     });
    //     return totalValue;
    // }
    // sumValues()
    // },[totalValue])
    
    

//    useEffect( ()=>{
//     async function Permission(){
//         try{
//           const promise = await service.listCash()
//             	setDados(promise.data)
//                 console.log(promise)
//         }catch(error){
//             console.log(error)
//         }
//     }
//     Permission()
// },[])


  
    
    const exit={ color: "white", fontSize: "1.5em" }
    const add={color: "white", fontSize: "2.5em"}
    return(
        <Main>
            <Header>
               <h1>{nameUser}</h1>
            <Link to='/'><VscSignOut style={exit}/></Link> 
            </Header>
                <Dados>
                     { dados.length > 0 ?  
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
                     <Totally><h1>SALDO</h1><h6 cor={totalValue > 1 ? 'red':'green'}>{totalValores}</h6></Totally> 
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
    
    justify-content: space-between;
    
    flex-direction:column;
    padding-top:30px;
    padding-left:20px;
    padding-bottom:20px;
    height:60vh;
    width:100%;
    background-color:#FFFFFF;
    border-radius:5px;
    margin-bottom:10px;
    h2{
        background-color:#FFFFFF;
        text-align:center;
        margin: auto;
        font-size:25px;
        color:#C2C2C2;
        width:45%;
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
    justify-content:space-between;
    background-color:#FFFFFF;
    font-size:20px;
    z-index:1;
    
   
    
    h1{
        background-color:#FFFFFF;
        font-weight:700;
    }
    h6{
       margin-right:42px;
       color:${(props)=>props.cor};;
       background-color:#FFFFFF;
    }
`

const Caixa=styled.div`
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        background-color:#FFFFFF;
        
        
`