import React, { useState } from 'react'
import Button from './Button'

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  })

  function changeHandler(event) {
    const { name, value } = event.target

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      }
    })
  }

  function submiteNote(event) {
    props.onAdd(note)
    event.preventDefault()
    setNote({
      title: '',
      content: '',
    })
  }

  return (
    <div>
      <form onSubmit={submiteNote}>
        <input
          type='text'
          value={note.title}
          name='title'
          placeholder='Titulo'
          onChange={changeHandler}
        />
        <textarea
          name='content'
          value={note.content}
          rows='3'
          placeholder='Descrição da nota'
          onChange={changeHandler}
        />
        <Button />
      </form>
    </div>
  )
}

export default CreateArea
