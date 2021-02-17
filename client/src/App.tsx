import React, { useState } from 'react';
import Routes from "./routes"
import { ThreadContextProvider } from "./context/contexts/threadContext"
import { ThemeContextProvider } from "./context/contexts/themeContext"
import { SearchContextProvider } from "./context/contexts/searchContext"


interface Props {

}

const App: React.FC<Props> = ({ }) => {


  return (
    <>
      <ThemeContextProvider>
        <ThreadContextProvider>
          <SearchContextProvider>
            <Routes />
          </SearchContextProvider>
        </ThreadContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App