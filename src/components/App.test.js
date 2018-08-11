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

  describe('creating a note', () => {
    const testNote = 'test note'

    beforeEach(() => {
      app.find('FormControl').simulate('change', {
        target: { value: testNote },
      })
    })

    it('updates the text in state', () => {
      const { text } = app.state()

      expect(text).toEqual(testNote)
    })

    describe('submitting a new note', () => {
      beforeEach(() => {
        app.find('.btn').at(0).simulate('click')
      })

      afterEach(() => {
        app.find('.btn').at(1).simulate('click')
      })

      it('adds the new note to state', () => {
        const { notes: [note] } = app.state()

        expect(note).toEqual(testNote)
      })


      describe('remounting the component', () => {
        let app2

        beforeEach(() => {
          app2 = mount(<App />)
        })

        it('reads the stored note cookies', () => {
          const { notes: [note] } = app2.state()

          expect(note).toEqual(testNote)
        })
      })

      describe('clearing the notes', () => {
        beforeEach(() => {
          app.find('.btn').at(1).simulate('click')
        })

        it('clears the note in state', () => {
          const { notes } = app.state()

          expect(notes).toEqual([])
        })
      })
    })
  })
})
