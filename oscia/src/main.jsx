import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { GameBoard } from './components/GameBoard'
import { GanttChartSuccess } from './components/GanttChartSuccess'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GanttChartSuccess></GanttChartSuccess>
  </StrictMode>,
)
