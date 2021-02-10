import React, { useState } from 'react';
import Routes from "./routes"
import { ThreadContextProvider } from "./context/contexts/threadContext"
import { ThemeContextProvider } from "./context/contexts/themeContext"


interface Props {

}

const App: React.FC<Props> = ({ }) => {



  return (
    <>
      <ThemeContextProvider>
        <ThreadContextProvider>
          <Routes />
        </ThreadContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App