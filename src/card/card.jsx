import React from 'react'

import style from '../css/app.css'
/* eslint-disable react/prop-types */
const Card = ({ contacts, selected, createContact, updateContact }) => {
  /* eslint-enable react/no-unused-state */
  const { firstname, lastname, age, role, mission, company } = contacts[selected]
  return (
    <div className={style.card}>
      <div className={style.border}>
        <div className={style.picto}>
          <img src={mission ? "./picto-dev.png" : "./picto-attente.png"} alt="" />
        </div>
        <div>FirstName: {firstname}</div>
        <div>Name: {lastname}</div>
        <div>Age: {age}</div>
        <div>Role: {role}</div>
        <div>Company: {company}</div>
      </div>
      <div className={style.buttons}>
        <button type="button" onClick={createContact}>Ajouter</button>
        <button type="button" onClick={updateContact}>Modifier</button>
      </div>
    </div>
  )
}

export default Card
