import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GameBoard } from './components/GameBoard'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameBoard></GameBoard>
  </StrictMode>,
)
