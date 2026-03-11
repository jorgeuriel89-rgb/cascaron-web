import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}