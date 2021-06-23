import React from 'react'

import './App.scss'

import { Layout } from 'components/Layout'
import { Header } from 'components/Header'
import { Form } from 'components/Form'

function App() {
  return (
    <Layout>
      <div className="container">
        <Header />

        <Form />
      </div>
    </Layout>
  )
}

export default App
