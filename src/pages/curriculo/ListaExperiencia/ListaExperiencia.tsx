import React, { useEffect } from "react"

import styles from "./ListaExperiencia.module.css"
import {
  getExperiencias,
  updateExperiencia,
  Experiencia,
  deleteExperiencia,
} from "../../../services/experienciaService"
import { useNavigate } from "react-router-dom"

const ListaExperiencia: React.FC = () => {
  const navigate = useNavigate()
  const [experiencias, setExperiencias] = React.useState<Experiencia[]>([])

  const fetchExperiencias = async () => {
    try {
      const experiencias = await getExperiencias()
      setExperiencias(experiencias)
    } catch (error) {
      console.log("Erro ao buscar experiencias: ", error)
    }
  }

  React.useEffect(() => {
    fetchExperiencias()
  }, [])
  const handleEdit = (experiencia: Experiencia) => {
    navigate("/curriculo/experiencia/cadastro", { state: experiencia })
  }
  const handleDelete = async (id: number) => {
    try {
      await deleteExperiencia(id)
      fetchExperiencias()

      alert("Experiência deletada com sucesso!")
    } catch (error) {
      console.log("Erro ao deletar experiencia: ", error)
      alert("Erro ao deletar experiencia")
    }
    //Logica para deletar
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Descrição</th>
          <th>Tipo</th>
          <th>Ano Inicio</th>
          <th>Ano Fim</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {experiencias.map((experiencia, index) => (
          <tr key={index}>
            <td>{experiencia.titulo}</td>
            <td>{experiencia.descricao}</td>
            <td>{experiencia.tipo}</td>
            <td>{experiencia.anoInicio}</td>
            <td>{experiencia.anoFim}</td>
            <td>
              <button onClick={() => handleEdit(experiencia)}>Editar</button>
              <button onClick={() => handleDelete(experiencia.id)}>
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ListaExperiencia
