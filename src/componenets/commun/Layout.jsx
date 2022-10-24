import React from 'react'
import Footer from './itemes/Footer'
import NavBar from './itemes/NavBar'

function Layout({children}) {
  return (
    <main className=' font-Popping'>
        <header>
          <NavBar />
        </header>
        <article>{children}</article>
        <footer>
          <Footer />
        </footer>
    </main>
  )
}

export default Layout