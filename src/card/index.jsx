import React from 'react'
import { Consumer } from '../context'
import Card from './card'
import CardForm from './cardForm'

const ComsumerCard = () => (
  <Consumer>
    {({ contacts, selected, createContact, updateContact, modifyMode, modifyType, contactToUpdate, cancel, save, create }) => {
      console.log(' ComsumerCard= ',modifyType)
      return (
        modifyMode ?
          <CardForm contactToUpdate={contactToUpdate} cancel={cancel} modifyFonction={modifyType == 'create' ? create : save}  /> : (
            <Card
              contacts={contacts}
              selected={selected}
              createContact={createContact}
              updateContact={updateContact}
            />
          )
      )
    }}
  </Consumer>
)

export default ComsumerCard