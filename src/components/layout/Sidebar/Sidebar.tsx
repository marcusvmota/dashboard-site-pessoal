import React from "react"

import { NavLink } from "react-router-dom"
import styles from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.navigation}>
        {/* <h3> Geral</h3> */}
        <ul>
          <li>
            <NavLink to="/">
              <h3>Home</h3>
            </NavLink>
          </li>
        </ul>
        <h3>Curriculo</h3>
        <ul>
          <li>
            <NavLink to="/curriculo/cadastro/resumo">Cadastrar Resumo</NavLink>
          </li>
          <li>
            <NavLink to="/curriculo/cadastro/expeeriencia-academia">
              Cadastrar Experiencia Academica
            </NavLink>
          </li>
          <li>
            <NavLink to="./curriculo/cadastro/experiencia-profissional">
              Cadastrar Experiencia Profissional
            </NavLink>
          </li>
        </ul>
        <h3> Portfólio</h3>
        <ul>
          <li>
            <NavLink to="/portfolio/cadastro">Cadastrar Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio/listagem">Listagem de Portfolios</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
