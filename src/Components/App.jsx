import React from 'react'
import '../styles/main.css'
import '../styles/common-styling.css'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Title from './Title/Title'
import Product from './Products/Product'

const App = () => {
  return (
    <>
    <Navbar />
      <Header />
      <Title />
      <Product/>
    </>
  )
}

export default App