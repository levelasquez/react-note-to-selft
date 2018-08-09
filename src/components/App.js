import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'
import Note from './Note'

const cookie_key = 'NOTES'

class App extends Component {
  state = {
    text: '',
    notes: [],
  }

  componentDidMount() {
    const notes = read_cookie(cookie_key)

    this.setState({ notes })
  }

  handleOnChange = ({ target: { value: text } }) => this.setState({ text })

  handleSubmit = () => {
    const { text, notes } = this.state

    const newNotes = notes.concat(text)

    this.setState({ notes: newNotes })

    bake_cookie(cookie_key, newNotes)
  }

  handleClear = () => {
    this.setState({ notes: [] })

    delete_cookie(cookie_key)
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
        <hr />
        <Button onClick={this.handleClear}>Clear Notes</Button>
      </div>
    )
  }
}

export default App
