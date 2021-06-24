import React from 'react'
import { render, screen } from '@testing-library/react'

import { Header } from '.'

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Header />)

    expect(screen.getByRole('img', { name: /github/i }))
    expect(screen.getByRole('heading', { name: /github explorer/i }))
  })
})
