import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import styled from 'styled-components'

function App() {
  return (
    <MainWebsite>
      <Header />
      <Routes>
        {/* <Route path='/search'>Search</Route>
        <Route path='/'>Home</Route> */}
      </Routes>
    </MainWebsite>
  )
}

export default App

const MainWebsite = styled.div``
