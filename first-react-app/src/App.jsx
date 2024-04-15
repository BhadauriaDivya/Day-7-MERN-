// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Languages from './component/Languages'
import Message, { Display } from './component/Message'

function App() {

  //  return <h1>MCA</h1>
  //  return <h1>KIET</h1>;<h1>MCA</h1>         ERROR
  //  return (                                  ERROR
  //   <h1>KIET</h1>;
  //   <h1>MCA</h1>;
  // )

  return (
    <>
    <Message/>
    <Display/>
    <Languages/>
    </>
  )
}

export default App