import * as React from 'react'

const useLocalStorageState = (itemName, initialName = '') => {
  const [localStorageName, setLocalStorage] = React.useState(
    () => window.localStorage.getItem(itemName) ?? initialName,
  )

  React.useEffect(() => {
    window.localStorage.setItem(itemName, localStorageName)
  }, [localStorageName, itemName])

  function handleChange(event) {
    setLocalStorage(event.target.value)
  }
  return {localStorageName, handleChange}
}

export default useLocalStorageState
