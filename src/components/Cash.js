import styled from "styled-components";
import React from "react";

export default function Cashi({date, description,value,isEntry}){
    //const [disponivel,setDisponivel] = React.useState(0)


    return(
        <>
        <Cash cor={isEntry ? 'green':'red'}>
            <h3>{date}</h3> <h4>{description}</h4> <h5>{value}</h5>
        </Cash>
        </>
    )
}

const Cash=styled.div`
    display:flex;
    background-color:#FFFFFF;
    font-size:20px;
    margin-bottom:20px;
    h3{
        background-color:#FFFFFF;
        color:#C9C9C9;
        margin-right:20px;
        position: relative;
    }
    h4{
        flex:1;
        background-color:#FFFFFF;
    }
    h5{
        flex:1;
        background-color:#FFFFFF;
       margin-left:120vh; 
        position: relative;
        color:${(props)=>props.cor};
    }
    @media (max-width:767px) {
        h5{
            margin-left:12vh;
        }
    }
`