import React from 'react'

import './App.scss'

import { Layout } from 'components/Layout'
import { Header } from 'components/Header'
import { Form } from 'components/Form'
import { User } from 'components/User'

function App() {
  return (
    <Layout>
      <div className="container">
        <Header />

        <Form />

        {/* <User /> */}

        <p className="not-found">
          Nenhum usuário foi encontrado, tente novamente.
        </p>
      </div>
    </Layout>
  )
}

export default App
