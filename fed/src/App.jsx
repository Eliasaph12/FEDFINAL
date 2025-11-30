import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import FeedbackWidget from './components/FeedbackWidget'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
      <FeedbackWidget />
    </>
  )
}

export default App
