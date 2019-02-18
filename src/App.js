import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import app from './app.png'

const App = () => {
  return (
    <div>
      <p className="dd">React here!</p>
      <img src={app} />
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('app'))
