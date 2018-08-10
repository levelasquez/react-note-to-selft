import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe('App component', () => {
  const app = mount(<App />)

  test('renders the app title', () => {
    const title = app.find('h2').text()

    expect(title).toEqual('Note to Self')
  })

  test('renders the clear button', () => {
    const buttonText = app.find('.btn').at(1).text()

    expect(buttonText).toEqual('Clear Notes')
  })

  describe('Rendering form', () => {
    test('creates a form component', () => {
      const formExists = app.find('form').exists()

      expect(formExists).toBe(true)
    })

    test('renders a FormControl component', () => {
      const formControlExists = app.find('FormControl').exists()

      expect(formControlExists).toBe(true)
    })

    test('renders submit button', () => {
      const submitButtonText = app.find('.btn').at(0).text()

      expect(submitButtonText).toEqual('Submit')
    })
  })
})
