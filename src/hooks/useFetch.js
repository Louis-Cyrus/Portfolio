import { useState, useEffect } from 'react';

const useFetch = (url, config) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(url, config);
            const json = await response.json();
            setData(json);
        } catch (e) {
            setError(e);
        }
        };
        fetchData();
    }, [url, config, refresh]);
    
    return {
        data,
        error,
        refresh: () => setRefresh(!refresh),
    };
};

export default useFetch;
