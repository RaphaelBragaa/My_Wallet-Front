import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { insertCash } from "../Services/wallet";

export default function Deposit() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const body = {
    description,
    value,
    isEntry: true,
  };

  async function Inserir(event) {
    event.preventDefault();
    try {
      const promise = await insertCash(body);
      console.log(promise);
      navigate("/Lobby");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Main>
      <Header>Nova Saída</Header>
      <Logo>
        <form onSubmit={Inserir}>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor"
          />
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
          />
          <button type="submit">Salvar saída</button>
          <Link to="/Lobby">
            <button type="submit">Cancelar</button>
          </Link>
        </form>
      </Logo>
    </Main>
  );
}

const Main = styled.div`
  height: 100vh;
  font-family: "Lexend Deca", cursive;
  padding-left: 150px;
  padding-right: 150px;
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
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;

  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
  h1 {
    color: #ffffff;
    font-size: 40px;
    margin-bottom: 15px;
    font-family: "Black Ops One", cursive;
  }

  input {
    width: 38rem;
    margin-bottom: 15px;
    border-radius: 5px;
    border: none;
    height: 5vh;
    padding-left: 15px;
  }
  input::placeholder {
    margin-left: 105px;
    font-size: 19px;
    color: #404040;
    font-family: "Lexend Deca", cursive;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  button {
    width: 39rem;
    border: none;
    border-radius: 5px;
    height: 5.5vh;
    background-color: #a328d6;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 60px;
    font-family: "Lexend Deca", cursive;
    :active {
      background-color: #ffffff;
      color: #a328d6;
    }
  }

  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
    font-family: "Lexend Deca", cursive;
  }
  @media (max-width: 767px) {
    input {
      width: 50%;
      margin: auto;
      margin-bottom: 5px;
    }
    button {
      margin-top: 2.5vh;
      margin-bottom: 5px;
    }
  }
`;
