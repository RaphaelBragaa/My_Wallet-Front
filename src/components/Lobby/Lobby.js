import styled from "styled-components"
import { useParams, useNavigate,Link } from 'react-router-dom';
import { VscSignOut} from "@react-icons/all-files/vsc/VscSignOut"
import {VscDiffAdded } from "@react-icons/all-files/vsc/VscDiffAdded"
import {VscDiffRemoved } from "@react-icons/all-files/vsc/VscDiffRemoved"
import axios from 'axios'
import { useEffect,useState } from "react";
import {useLocation} from 'react-router-dom'
import Cash from "../Cash";


export default function Lobby({name,token,setName,setToken}){
   const {Lobby} = useParams()
   const location = useLocation();
   console.log(location.token)
   console.log(token)

    const[dados,setDados]=useState([])
    const [total,setTotal]=useState(0)

    const config={
        headers:{Authorization:`Bearer ${token}`}
    }

   useEffect( ()=>{
    async function Permission(){
      
        try{
          const promise = await axios.get('http://localhost:5000/posts',config)
            	setName(promise.data.name)
                console.log(name)
        }catch(error){
            console.log(error)
        }
    }
    async function Entradas(){ 
        
        try{
            const promise = await axios.get('http://localhost:5000/moneys',config)
            setDados(promise.data)
            console.log(typeof(dados[1].value))
            dados.map((dado,soma)=>{return(
              soma =  parseFloat(dado.value) + soma
             
            )})
           
             for(let i=0;i<dados.length;i++){
                 if(dados){
                    console.log(dados[i].isEntry)
                   // let number = parseInt(dados[i].value)
                
                    setTotal(300)
             }
             console.log(total)
             }
           
          
        }catch(error){
            console.log(error)
        }
    }


    Permission()
    Entradas()
},[total,dados])


  
    
    const exit={ color: "white", fontSize: "1.5em" }
    const add={color: "white", fontSize: "2.5em"}
    return(
        <Main>
            <Header>
               <h1>{name}</h1>
            <Link to='/'><VscSignOut style={exit}/></Link> 
            </Header>
           
                <Dados>
                     {/* <h2>
                        Não há registros de entrada ou saída 
                    </h2>  */}
                    <Caixa>
                     {dados.map((dado)=>{return(<Cash date={dado.date} description={dado.description} value={dado.value} isEntry={dado.isEntry}/>)})}
                    </Caixa> 
                    
                     <Totally><h1>SALDO</h1><h6>...</h6></Totally> 
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
       color:green;
       background-color:#FFFFFF;
    }
`

const Caixa=styled.div`
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        background-color:#FFFFFF;
        
`