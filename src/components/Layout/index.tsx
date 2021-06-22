import React, { ReactNode } from 'react'

import './styles.scss'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="wrapper">{children}</div>
)
