import React, { useState } from 'react';
import Routes from "./routes"
import { ThreadContextProvider } from "./context/contexts/threadContext"


interface Props {

}

const App: React.FC<Props> = ({ }) => {



  return (
    <>

      <ThreadContextProvider>
        <Routes />
      </ThreadContextProvider>
    </>
  )
}

export default App