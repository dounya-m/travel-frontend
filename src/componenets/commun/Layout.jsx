import React from 'react'

function Layout({children}) {
  return (
    <main className=' font-Popping'>
        <header>NavBar</header>
        <article>{children}</article>
    </main>
  )
}

export default Layout