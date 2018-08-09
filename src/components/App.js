import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

class App extends Component {
  state = { text: '' }

  handleOnChange = ({ target: { value: text } }) => this.setState({ text })

  handleOnClick = () => console.log(this.state.text)

  render() {
    return (
      <div>
        <h2>Note to Self</h2>
        <Form inline>
          <FormControl onChange={this.handleOnChange} />
          {' '}
          <Button onClick={this.handleOnClick}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App
