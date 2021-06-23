import React from 'react'

import GithubLogo from 'assets/images/github.png'

import './styles.scss'

export const Header = () => (
  <header className="header-container">
    <img src={GithubLogo} alt="GitHub" />
    <h1>Github Explorer</h1>
  </header>
)
