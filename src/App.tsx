import React, { FormEvent, useState } from 'react'

import './App.scss'

import { Layout } from 'components/Layout'
import { Header } from 'components/Header'
import { Form } from 'components/Form'
import { User } from 'components/User'

export type UserData = {
  name: string
  bio: string
  followers: number
  following: number
  repositories: number
}

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<UserData>({} as UserData)
  const [userNotFound, setUserNotFound] = useState(false)

  const handleSubmit = (event: FormEvent, username: string) => {
    event.preventDefault()

    setIsLoading(true)
    setUserNotFound(false)

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.message === 'Not Found') setUserNotFound(true)

        setUser({
          name: response.name,
          bio: response.bio,
          followers: response.followers,
          following: response.following,
          repositories: response.public_repos
        })
      })
      .catch(() => setUserNotFound(true))
      .finally(() => setIsLoading(false))
  }

  return (
    <Layout>
      <div className="container">
        <Header />

        <Form handleSubmit={handleSubmit} />

        {isLoading ? (
          <p className="not-found">Buscando...</p>
        ) : (
          user.name && <User {...user} />
        )}

        {userNotFound && (
          <p className="not-found">
            Nenhum usuário foi encontrado, tente novamente.
          </p>
        )}
      </div>
    </Layout>
  )
}

export default App
