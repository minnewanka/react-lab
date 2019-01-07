import React from 'react'

import ComsumerCard from './card/index'
import List from './cardlist/list'

import style from './css/app.css'

const Home = () => {
  return (
    <div className={style.content}>
      <ComsumerCard />
      <List />
    </div>
  )
}

export default Home