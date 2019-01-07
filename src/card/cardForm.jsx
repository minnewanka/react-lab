import React from 'react'
import style from '../css/app.css'
/* eslint-disable react/prop-types */
export default class CardForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contactToUpdate: props.contactToUpdate ? props.contactToUpdate : {}
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange({ target: { value, name } }) {
    var { contactToUpdate } = this.state
    contactToUpdate[name] = value
    this.setState({ contactToUpdate: contactToUpdate })
  }

  render() {
    const { modifyFonction, cancel } = this.props
    const { contactToUpdate } = this.state
    const { firstname='', lastname='', age, role, mission, company } = contactToUpdate ? contactToUpdate : {}
    const isEnabled = firstname.length > 0 && lastname.length > 0
    return (
      <div className={style.card}>
        <div className={style.border}>
          <div className={style.picto}>
            <img src={mission ? "./picto-dev.png" : "./picto-attente.png"} alt="" />
          </div>
          <div> FirstName: <input type="text" name="firstname" defaultValue={firstname} onChange={this.handleInputChange} /></div>
          <div> Name: <input type="text" name="lastname" defaultValue={lastname} onChange={this.handleInputChange} /></div>
          <div> Age: <input type="text" name="age" defaultValue={age} onChange={this.handleInputChange} /></div>
          <div> Role: <input type="text" name="role" defaultValue={role} onChange={this.handleInputChange} /></div>
          <div> Company: <input type="text" name="company" defaultValue={company} onChange={this.handleInputChange} /></div>

        </div>
        <div className={style.buttons}>
          <button type="button" disabled={!isEnabled} onClick={() => modifyFonction(contactToUpdate)}>Save</button>
          <button type="button" onClick={cancel}>Cancel</button>
        </div>
      </div>
    )
  }
}
