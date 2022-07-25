import { useEffect, useState } from 'react'
import axios from 'axios'

const useApi = (url, mapResults = (result) => result) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  /*useEffect(() => {
    setIsLoading(true)
    setError(null)
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Network response was not ok.')
      })
      .then(json => {
        setData(mapResults(json))
        setIsLoading(false)
      })
      .catch(setError)
  },[])*/

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(url)
      .then(response => setData(mapResults(response.data)))
      .catch(setError)
      .finally(() => setIsLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { data, isLoading, error }
}

export { useApi }
