import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.scss' 
import Category from '../Category/Category'
import Select from '../Select/Select'

function App() {
  return (
    <Container className="App">
      <h1>Were gonna sell you some sub-prime mortgages baby.</h1>
      <Select />
      <Category />

    </Container>
  )
}

export default App