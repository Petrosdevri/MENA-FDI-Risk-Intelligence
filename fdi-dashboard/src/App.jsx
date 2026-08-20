import { useState } from 'react'
import Header from './components/Header'
import CountryRadarChart from './components/RadarChart'
import FullStanding from './components/FullStanding/FullStanding'
import Top5Chart from './components/Top5Chart'
import TopStats from './components/TopStats/TopStats'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className='flex flex-col max-w-7xl mx-auto px-6 pt-8 pb-0 gap-10'>
        <TopStats />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Top5Chart />
          <CountryRadarChart />
        </div>
        <FullStanding />
      </main>
    </>
  )
}

export default App
