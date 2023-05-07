import React, { useState } from "react"

import styles from "./ListaPortfolio.module.css"

import {
  getPortfolio,
  updatePortfolio,
  Portfolio,
  deletePortfolio,
} from "../../../services/portfolioService"
import { useNavigate } from "react-router-dom"

const ListaPortfolio: React.FC = () => {
  const navigate = useNavigate()
  const [portfolio, setPortfolio] = React.useState<Portfolio[]>([])

  const fetchPortfolio = async () => {
    try {
      const portfolio = await getPortfolio()
      setPortfolio(portfolio)
    } catch (error) {
      console.log("Erro ao buscar portfolio: ", error)
    }
  }

  React.useEffect(() => {
    fetchPortfolio()
  }, [])
  const handleEdit = (portfolio: Portfolio) => {
    navigate("/portfolio/cadastro", { state: portfolio })
  }
  const handleDelete = async (id: number) => {
    try {
      await deletePortfolio(id)
      fetchPortfolio()

      alert("Portfolio deletado com sucesso!")
    } catch (error) {
      console.log("Erro ao deletar portfolio: ", error)
      alert("Erro ao deletar portfolio")
    }
    //Logica para deletar
  }
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Image</th>
          <th>Link</th>
          {/* <th>Ações</th> */}
        </tr>
      </thead>
      <tbody>
        {portfolio.map((itemPortfolio, index) => (
          <tr key={index}>
            <td>{itemPortfolio.title}</td>
            <td>
              <img
                src={itemPortfolio.image}
                alt={itemPortfolio.title}
                className={styles.image}
              />{" "}
            </td>
            <td>
              {" "}
              <a href={itemPortfolio.link} target="_blank" rel="noreferrer">
                {itemPortfolio.link}
              </a>{" "}
            </td>
            <td>
              <button onClick={() => handleEdit(itemPortfolio)}>Editar</button>
              <button onClick={() => handleDelete(itemPortfolio.id)}>
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ListaPortfolio
