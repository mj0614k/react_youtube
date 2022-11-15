import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { SearchBar } from './'

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <AiFillYoutube className="icon" />
        Animal Youtube
      </h1>
      <SearchBar />
    </header>
  )
}

export default HeaderCont
