import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from '../Form/InputForm'


import './App.scss' 
import Results from '../Results/Results'
import Select from '../Select/Select'

function App() {
  return (
    <Container className="App">
      <h1>Tyler's Online Shop of Duhickeys</h1>
      <Select />
      <Results />
      <InputForm />

    </Container>
  )
}

export default App