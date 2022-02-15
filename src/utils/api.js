
import React, { useState, useEffect } from 'react'
import axios from 'axios'

//custom hook to fetch data from an api

const useFetchData = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading('loading...')
        setData(null);
        setError(null);
        const source = axios.CancelToken.source();
        axios.get(url, { cancelToken: source.token })
            .then(res => {
                setLoading(false);
                console.log(res)
               setData(res.data)
            })
            .catch(err => {
                setLoading(false)
                setError('An error occurred. Awkward..')
            })
        return () => {
            source.cancel();
        }
    }, [url])

    return { data, loading, error }
}


export default useFetchData