import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../../store/voteCounter'


function Voter(props) {
  return (
    <Table variant="sm" striped bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Votes</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.voteCounter.candidates.map(person => {

          return (
            <tr key={person.name}>
              <th>{person.name}</th>
              <th>{person.votes}</th>
              <th>
                <Button variant="primary" onClick={() => props.increment(person.name)}>Vote Yes</Button>
                <Button variant="primary" onClick={() => props.decrement(person.name)}>Vote No</Button>
              </th>

            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}


//this function gets called when connect gets called, and connect passes 'state' to it, which will 
const mapStateToProps = state => {
  return { voteCounter: state.voteCounter }
}

// import a collection of command-creating functions, imported from voteCounter, inside the store section of the file structure.
const mapDispatchToProps = { increment, decrement, reset }


export default connect(mapStateToProps, mapDispatchToProps)(Voter)

