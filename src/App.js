import React, { useState, useCallback, useMemo } from 'react'

import Button from './components/UI/Button/Button'
import './App.css'
import DemoOutput from './components/Demo/DemoOutput'
import DemoList from './components/Demo/DemoList'

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
  const [listTitle, setListTitle] = useState('My List')

  console.log('App running')

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph)
    }
  }, [allowToggle])

  const allowButtonHandler = useCallback(() => {
    setAllowToggle(true)
  }, [])

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title')
  }, [])

  const listItems = useMemo(() => [5, 2, 1, 10, 9], [])

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={allowButtonHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  )
}

export default App
