// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

import useLocalStorageState from '../hooks/useLocalStorageState'

function Greeting({initialName}) {
  const localStorageState = useLocalStorageState('name', initialName)
  console.log(localStorageState)

  const {handleChange,localStorageName} = localStorageState
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  // const [name, setName] = React.useState(()=>window.localStorage.getItem('name') ?? initialName)

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)
  // React.useEffect(()=>{
  //   window.localStorage.setItem('name', name)
  // },[name])

  //   function handleChange(event) {
  //     setName(event.target.value)
  //   }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          value={localStorageName}
          onChange={handleChange}
          id="name"
        />
      </form>
      {localStorageName ? (
        <strong>Hello {localStorageName}</strong>
      ) : (
        'Please type your name'
      )}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
