import React from "react"

import styles from "./ListaExperiencia.module.css"

interface Experiencia {
  titulo: string
  descricao: string
  tipo: string
  anoInicio: string
  anoFim: string
}

const ListaExperiencia: React.FC = () => {
  const [experiencias, setExperiencias] = React.useState<Experiencia[]>([
    {
      titulo: "Estagiário em Desenvolvimento de Software",
      descricao: "Desenvolvimento de aplicações web utilizando React e Node.js",
      tipo: "Profissional",
      anoInicio: "2019",
      anoFim: "2020",
    },
  ])

  const handleDelete = (index: number) => {
    //Logica para deletar
  }

  const handleEdit = (experiencia: Experiencia) => {
    //Logica para editar
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
              <button onClick={() => handleDelete(index)}>Deletar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ListaExperiencia
