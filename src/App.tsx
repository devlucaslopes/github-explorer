import React from 'react'

import './App.scss'

import { Layout } from 'components/Layout'
import { Header } from 'components/Header'

function App() {
  return (
    <Layout>
      <div className="container">
        <Header />
      </div>
    </Layout>
  )
}

export default App
