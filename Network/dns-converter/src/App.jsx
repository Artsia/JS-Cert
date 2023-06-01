//import { useState } from 'react'
import './App.css'
import createIPv4Adress from './ip'

function App() {


  return (
    <>
      <div className="card">

        <div id='domainNameDiv'>

          <input name='myInput'></input>
          <button>
            Click
          </button>

        </div>


        <div id='ipAdrressDiv'>

          <p id='ip'>
            
          </p>

        </div>



      </div>
    </>
  )
}


export default App
