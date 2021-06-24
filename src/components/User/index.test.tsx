import React from 'react'
import { render, screen } from '@testing-library/react'

import { User } from '.'
import { UserData } from 'App'

const userMock: UserData = {
  name: 'John Doe',
  bio: 'bio',
  followers: 36,
  following: 10,
  repositories: 5
}

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<User {...userMock} />)

    expect(screen.getByRole('img', { name: /john doe/i }))
    expect(screen.getByRole('heading', { name: /john doe/i }))
    expect(screen.getByLabelText(/seguidores/i).textContent).toBe('36')
    expect(screen.getByLabelText(/seguindo/i).textContent).toBe('10')
    expect(screen.getByLabelText(/projetos/i).textContent).toBe('5')
  })
})
