import React from 'react'
import { mount } from 'enzyme'
import Note from './Note'

const props = {
  note: 'test note',
}

describe('Note component', () => {
  const note = mount(<Note {...props} />)

  test('renders the note text', () => {
    const noteText = note.find('p').text()

    expect(noteText).toEqual(props.note)
  })
})
