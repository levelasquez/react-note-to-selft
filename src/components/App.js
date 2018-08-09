import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import Note from './Note'

class App extends Component {
  state = {
    text: '',
    notes: [],
  }

  handleOnChange = ({ target: { value: text } }) => this.setState({ text })

  handleSubmit = () => {
    const { text, notes } = this.state

    const newNotes = notes.concat(text)

    this.setState({ notes: newNotes })
  }

  render() {
    const { notes } = this.state

    return (
      <div>
        <h2>Note to Self</h2>
        <Form inline>
          <FormControl onChange={this.handleOnChange} />
          {' '}
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
        {notes.map((note, index) => (
          <Note key={`${note}-${index}`} note={note} />
        ))}
      </div>
    )
  }
}

export default App
