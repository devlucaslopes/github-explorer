import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Form } from '.'
import userEvent from '@testing-library/user-event'

describe('<Header />', () => {
  it('should render correctly', () => {
    const spyHandleSubmit = jest.fn((e) => e.preventDefault())

    render(<Form handleSubmit={spyHandleSubmit} />)

    const input = screen.getByPlaceholderText(/username/i)
    const button = screen.getByRole('button', { name: /find profile/i })

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    userEvent.type(input, 'john doe')

    expect(input).toHaveValue('john doe')

    fireEvent.click(button)

    expect(spyHandleSubmit).toHaveBeenCalled()
  })
})
