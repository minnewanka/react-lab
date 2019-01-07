import React from 'react'
import Route from './routing/route'
import { Provider } from './context'
import catalogue from './data/catalogue'


export default class App extends React.Component {
  /* eslint-disable react/no-unused-state */
  constructor(props) {
    super(props)
    this.select = this.select.bind(this)
    this.updateContact = this.updateContact.bind(this)
    this.createContact = this.createContact.bind(this)
    this.cancel = this.cancel.bind(this)
    this.save = this.save.bind(this)
    this.create = this.create.bind(this)
    this.state = {
      contacts: catalogue,
      selected: 0,
      select: this.select,
      updateContact: this.updateContact,
      createContact: this.createContact,
      modifyMode: false,
      moddifyType: null,
      contactToUpdate: null,
      cancel: this.cancel,
      save: this.save,
      create: this.create
    }
  }
  select(selection) {
    this.setState({
      selected: selection
    })
  }
  updateContact() {
    this.setState(({selected, contacts}) => {
      return {
      modifyMode: true,
      modifyType:'update',
      contactToUpdate: {...contacts[selected]}
    }})
  }
  createContact() {
    this.setState(() => {
      return {
      modifyMode: true,
      modifyType:'create',
      contactToUpdate: null
    }})
  }
  cancel(){
    this.setState(() => {
      return {
      modifyMode: false,
      contactToUpdate: null
    }})
  }
  save(updatedContact){
    console.log("fonction save")
    this.setState(({contacts,selected}) => {
      contacts.splice(selected, 1, updatedContact)
      return {
        contacts: contacts,
        modifyMode: false
    }})
  }
  create(updatedContact){
    console.log("fonction create")
    this.setState(({contacts}) => {
      var newContacts = contacts.slice()  
      newContacts.push(updatedContact)  
      return {
        contacts: newContacts,
        modifyMode: false
    }})
  }

  render() {
    return (
      <Provider value={this.state}>
        <Route />
      </Provider>
    )
  }
}
  /* eslint-enable react/no-unused-state */

