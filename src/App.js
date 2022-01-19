import { useState } from 'react'
import axios from 'axios'
import NASAData from './components/NASAData'
import './App.css'



function App() {


  // create states  
  const [userInput, setUserInput] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)



  const handleChange = (e) => {
    // console.log('handling change', e.target.value)
    setUserInput(e.target.value)
  }

  const handleInputSubmit = e => {
    e.preventDefault()
    console.log('submitting')

    setLoading(true)

    // Return a promise
    axios.get(`https://images-api.nasa.gov/search?q=${userInput}`)

      .then(response => {
        setData(response.data.collection.items)
        setLoading(false)
      })
      .catch(err => console.error(err))

  }

  return (
    <div className="App">
      <div id="headerText">
      <h1>Spacestagram</h1>
      <p>"We put the photos, on the line"</p>
      </div>
      {console.log('state', data)}
      <div>
        {/* create form to enter in search */}
        <form onSubmit={handleInputSubmit}>
          <label htmlFor='userInput'>Search: </label>
          <input
            type='text'
            id='userInput'
            name='userInput'
            onChange={handleChange}
            value={userInput}
          />
          <input id="submitButton" type="submit" value='Submit' />
        </form>
      </div>

      {/* gif for loading image */}
      {
        loading
          ?
          <img src="https://tenor.com/view/stars-star-shooting-star-animated-gif-7526875.gif" alt="" />
          :
          <div id='nasaContainer'>
            {
              data.map((item) => {
                return (
                  <NASAData item={item} />
                )
              })
            }
          </div>
      }



    </div>
  );
}

export default App