import React, { FormEvent, useState } from 'react'

import './styles.scss'

type FormProps = {
  handleSubmit: (event: FormEvent, username: string) => void
}

export const Form = ({ handleSubmit }: FormProps) => {
  const [username, setUsername] = useState('')

  return (
    <form
      onSubmit={(event) => handleSubmit(event, username)}
      className="form-container"
    >
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Find profile</button>
    </form>
  )
}
