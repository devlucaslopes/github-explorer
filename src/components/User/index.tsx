import React from 'react'

import { UserData } from 'App'

import './styles.scss'

export const User = ({
  name,
  bio,
  repositories,
  following,
  followers
}: UserData) => (
  <div className="user-container">
    <section className="user-profile">
      <img
        src="https://avatars.githubusercontent.com/u/20402983?v=4"
        alt={name}
      />

      <div>
        <h1>{name}</h1>
        <p>{bio}</p>
      </div>
    </section>

    <section className="user-stats">
      <ul>
        <li>
          <span className="total" aria-label="seguidores">
            {followers}
          </span>
          <span className="stats">Seguidores</span>
        </li>
        <li>
          <span className="total" aria-label="seguindo">
            {following}
          </span>
          <span className="stats">Seguindo</span>
        </li>
        <li>
          <span className="total" aria-label="projetos">
            {repositories}
          </span>
          <span className="stats">Projetos</span>
        </li>
      </ul>
    </section>
  </div>
)
