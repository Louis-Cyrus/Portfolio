/* GitHub Repository - Exercise */
// On va créer un hook custom qui permet de fetch les données. 
// Il prend en paramètres url et config pour faire comme un fetch mais il gère toutes les données et les erreurs.
// Il retourne une fonction qui permet de refresh les données.

// Path: src/hooks/useFetch.js
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
