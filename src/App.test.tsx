import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('<App />', () => {
  beforeEach(async function () {
    fetchMock.resetMocks()
  })

  it('should render correctly', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        login: 'thuram',
        id: 20402983,
        node_id: 'MDQ6VXNlcjIwNDAyOTgz',
        avatar_url: 'https://avatars.githubusercontent.com/u/20402983?v=4',
        name: 'John Doe',
        bio: 'Apaixonado por tecnologia e o impacto que ela causa na vida das pessoas.',
        public_repos: 31,
        followers: 35,
        following: 31
      })
    )

    render(<App />)

    userEvent.type(screen.getByPlaceholderText(/username/i), 'thuram')

    userEvent.click(screen.getByRole('button', { name: /find profile/i }))

    expect(screen.getByText(/buscando/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('heading', { name: /John Doe/i })
    ).toBeInTheDocument()
  })

  it('should render not found message if user not exits', async () => {
    render(<App />)

    userEvent.type(screen.getByPlaceholderText(/username/i), 'omg-fake-user')

    userEvent.click(screen.getByRole('button', { name: /find profile/i }))

    expect(screen.getByText(/buscando/i)).toBeInTheDocument()

    expect(
      await screen.findByText(
        /nenhum usuário foi encontrado, tente novamente./i
      )
    ).toBeInTheDocument()
  })
})
