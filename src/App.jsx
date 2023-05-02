import React from 'react'
import HEADER from './components/header/Header'
import ABOUT from './components/about/About'
import CONTACT from './components/contact/Contact'
import FOOTER from './components/footer/Footer'
import NAV from './components/nav/Nav'


const App = () => {
  return (
    <>
    <HEADER/>
    <NAV/>
    <ABOUT/>
    <CONTACT/>
    <FOOTER/>

    </>
  )
}

export default App