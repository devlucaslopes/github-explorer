import React from 'react'

import './styles.scss'

export const User = () => (
  <div className="user-container">
    <section className="user-profile">
      <img
        src="https://avatars.githubusercontent.com/u/20402983?v=4"
        alt="username"
      />

      <div>
        <span>
          Lucas Lopes
          <a href="#">Ver perfil</a>
        </span>
        <p>
          Apaixonado por tecnologia e o impacto que ela causa na vida das
          pessoas.
        </p>
      </div>
    </section>

    <section className="user-stats">
      <ul>
        <li>
          <span className="total">36</span>
          <span className="stats">Seguidores</span>
        </li>
        <li>
          <span className="total">36</span>
          <span className="stats">Seguindo</span>
        </li>
        <li>
          <span className="total">36</span>
          <span className="stats">Projetos</span>
        </li>
        <li>
          <span className="total">36</span>
          <span className="stats">Estrelas</span>
        </li>
      </ul>
    </section>
  </div>
)
