import React from 'react'
import Messages from './components/Messages'
import Mail from './components/Mail'
import Calender from './components/Calender'
import Map from './components/Map'

function App() {
  return (
    <div className=' w-100 h-screen bg-gradient-to-b from-slate-200 from-10% via-rose-100 via-70% to-blue-200 grid grid-cols-12 gap'>
      <div className='h-100 flex justify-center items-center col-span-3'>
        <Messages />
      </div>
      <div className='h-100 flex justify-start items-center col-span-9 overflow-scroll actions'>
        <Mail />
        <Calender />
        <Map />

      </div>
    </div>
  )
}

export default App